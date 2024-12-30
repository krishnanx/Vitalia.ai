import base64
from flask import Flask, request, jsonify
from flask_cors import CORS
from Barcode import BarcodeReader
from dotenv import load_dotenv
import os
from openai import OpenAI
from PIL import Image
from io import BytesIO
import requests
import re
# Load environment variables
load_dotenv()
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
client = OpenAI(api_key=OPENAI_API_KEY)

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Directory to save decoded images
UPLOAD_DIR = "./uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)

UPLOAD_DIRS = "./uploaded_images"
os.makedirs(UPLOAD_DIRS, exist_ok=True)

def crop_image(file_path):
    """Crops the image into a square centered on the image."""
    with Image.open(file_path) as img:
        width, height = img.size
        box_size = min(width, height)

        # Calculate coordinates for the square crop
        left = (width - box_size) / 2
        top = (height - box_size) / 2
        right = left + box_size
        bottom = top + box_size

        cropped_img = img.crop((left, top, right, bottom))
        cropped_file_path = os.path.join(UPLOAD_DIR, "cropped_image.jpg")
        cropped_img.save(cropped_file_path)

    return cropped_file_path

@app.route("/upload-base64", methods=["POST"])
def upload_base64():
    try:
        # Get the Base64 encoded image from the request
        image_data = request.json.get("image")
        if not image_data:
            return jsonify({"error": "No image data provided"}), 400

        # Decode the Base64 string
        image_bytes = base64.b64decode(image_data)
        file_path = os.path.join(UPLOAD_DIRS, "uploaded_image.jpg")

        # Save the decoded image
        with open(file_path, "wb") as image_file:
            image_file.write(image_bytes)
        
        # Crop the image
        cropped_file_path = crop_image(file_path)
        
        # Read the barcode from the cropped image
        barcode_info = BarcodeReader(cropped_file_path)
        
        if barcode_info == "error:barcode not detected":
            return jsonify({"status": "error", "message": "Barcode not detected"}), 400
        
        # Get ingredients from the barcode
        ingredients,brand,name,image,nutrients = mock_get_ingredients(barcode_info)
        

      
        result = {
            "status": "success",
            "barcode_info": barcode_info,
            "Brand":brand,
            "Name":name,
            "ingredients": ingredients,
            #"openai_response": generated_text,
            "Image":image,
            "Nutrients":nutrients,
            "HealthScore":50
        }

        if not result["ingredients"]:  # This checks if the list is empty
            print("OPEN AI RESULT")
            ingredientsText = generate_openai_text(result["Name"])
            ingredients = extract_ingredients(ingredientsText)
            print("ingredients:", ingredients)
            result = {
                "status": "success",
                "barcode_info": barcode_info,
                "Brand": brand,
                "Name": name,
                "ingredients": ingredients,
                #"openai_response": generated_text,
                "Image": image,
                "Nutrients": nutrients,
                "HealthScore": 50
            }

            return jsonify(result),200
        # Return the result as JSON
        return jsonify(result), 200

    except Exception as e:
        # Catch any other exceptions and return an error message
        return jsonify({"error": f"Failed to decode and save image: {str(e)}"}), 400

def generate_openai_text(name):
    try:
        prompt = f"""For the Product name: {', '.join(name)}
        Please provide:
        1. All ingredients used to create the product,Dont leave out any!,return with the ingredients enclosed with "[]"
        """

        openai_response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {"role": "user", "content": prompt}
            ],
            max_tokens=100
        )
        return openai_response.choices[0].message.content.strip()
    except Exception as e:
        raise RuntimeError(f"OpenAI API Error: {str(e)}")

def mock_get_ingredients(barcode_data):
    try:
        # Replace this URL with a dynamic URL using barcode_data if needed
        url = f"https://world.openfoodfacts.net/api/v2/product/{barcode_data}"
        response = requests.get(url)
        response.raise_for_status()  

        data = response.json()
        if data["status"] == 1: 
            value = data["product"].get("ingredients_text", [])
            print(data["product"])
            image = data["product"].get("image_small_url", "No image available")
            nutrients_text = data["product"].get("nutriments", {})
            name = data["product"].get("product_name","")
          
            nutrients = [
                {"name": "energy", "value": f'{nutrients_text.get("energy-kcal_100g", 0)} Kcal'},
                {"name": "Fat", "value": f'{nutrients_text.get("fat_100g", 0)} g'},
                {"name": "Carbohydrates", "value": f'{nutrients_text.get("carbohydrates_100g", 0)} g'},
                {"name": "Fruits&vegetables&nuts", "value": nutrients_text.get("fruits-vegetables-nuts-estimate-from-ingredients_100g", 0)},
                {"name": "Proteins", "value": f'{nutrients_text.get("proteins_100g", 0)} g'},
                {"name": "Saturated Fat", "value": f'{nutrients_text.get("saturated-fat_100g", 0)} g'},
                {"name": "Sodium", "value": f'{nutrients_text.get("sodium_100g", 0)} g'},
                {"name": "Sugar", "value": f'{nutrients_text.get("sugars_100g", 0)} g'}
            ]

            print("nutrients:",nutrients)           
            if value:  # Check if value is not an empty list
                ingredients_list = [ing.strip() for ing in value.split(",")]
            else:
                ingredients_list = []
            return ingredients_list,data["product"]["brands"],name,image,nutrients
        else:
            return None
    except Exception as e:
        print(f"Error fetching ingredients: {str(e)}")
        return None
def extract_ingredients(ingredient_string):
    # Regular expression to find the ingredients inside square brackets
    match = re.search(r'\[(.*?)\]', ingredient_string)
    
    if match:
        # Extract the ingredients and split them by commas
        ingredients = match.group(1).split(', ')
        return ingredients
    else:
        return []
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
