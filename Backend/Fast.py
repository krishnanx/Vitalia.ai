import base64
from flask import Flask, request, jsonify
from flask_cors import CORS  # Add this import
from Barcode import BarcodeReader
import os
from openai import OpenAI
client = OpenAI(api_key="sk-proj-01234567890123456789012345678901")


app = Flask(__name__)
CORS(app)  # Enable CORS for all routes
# Directory to save decoded images
UPLOAD_DIR = "./uploaded_images"
os.makedirs(UPLOAD_DIR, exist_ok=True)

@app.route("/upload-base64", methods=["POST"])
def upload_base64():
    try:
        # Get the Base64 encoded image from the request
        image_data = request.json.get("image")
        if not image_data:
            return jsonify({"error": "No image data provided"}), 400

        # Decode the Base64 string
        image_bytes = base64.b64decode(image_data)
        file_path = os.path.join(UPLOAD_DIR, "uploaded_image.jpg")

        # Save the decoded image
        with open(file_path, "wb") as image_file:
            image_file.write(image_bytes)
        barcode_info = BarcodeReader(file_path)
        ingredients = mock_get_ingredients(barcode_info)
        generated_text = generate_openai_text(ingredients)
        result = dict(status="success",data=barcode_info)
        if isinstance(barcode_info, str):
            my_dict = dict(status="error", data=barcode_info)
            return jsonify(my_dict), 400
        
        return jsonify(result)
        #return jsonify({"info": f"Image saved at {file_path}"}), 200
    except Exception as e:
        # Ensure the f-string is properly closed
        return jsonify({"error": f"Failed to decode and save image: {str(e)}"}), 400

def generate_openai_text(ingredients):
    try:
        prompt = f"""For the following ingredients: {', '.join(ingredients)}
        Please provide:
        1. A detailed explanation of each ingredient
        2. Potential toxicity concerns and safe consumption limits
        3. Common allergies or sensitivities
        4. Nutritional benefits and health considerations
        5. Safe storage recommendations
        6. Common culinary uses and substitutes
        
        Format the response in clear sections for easy reading."""

        openai_response = client.chat.completions.create(model="gpt-4o-mini",
        messages=[
            {"role": "user", "content": prompt}
        ],
        max_tokens=500)
        return openai_response.choices[0].message.content.strip()
    except Exception as e:
        raise RuntimeError(f"OpenAI API Error: {str(e)}")

def mock_get_ingredients(barcode_data):
    try:
        url = f"https://world.openfoodfacts.net/api/v2/product/{barcode_data}"
        response = requests.get(url)
        response.raise_for_status()  

        data = response.json()
        if data["status"] == 1: 
            ingredients_text = data["product"]["ingredients_text"]
            ingredients_list = [ing.strip() for ing in ingredients_text.split(",")]
            return ingredients_list
        else:
            return None
    except Exception as e:
        print(f"Error fetching ingredients: {str(e)}")
        return None



if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)

