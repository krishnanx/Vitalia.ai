import base64
from flask import Flask, request, jsonify
from flask_cors import CORS  # Add this import
from Barcode import BarcodeReader
import os

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
        result = dict(status="success",data=barcode_info)
        if isinstance(barcode_info, str):
            my_dict = dict(status="error", data=barcode_info)
            return jsonify(my_dict), 400
        
        return jsonify(result)
        #return jsonify({"info": f"Image saved at {file_path}"}), 200
    except Exception as e:
        # Ensure the f-string is properly closed
        return jsonify({"error": f"Failed to decode and save image: {str(e)}"}), 400

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)

