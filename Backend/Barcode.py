# barcode_reader.py

import cv2
from pyzbar.pyzbar import decode

def BarcodeReader(image_path):
    # Read the image in numpy array using cv2
    img = cv2.imread(image_path)

    # Decode the barcode image
    detectedBarcodes = decode(img)

    # If not detected, return a message
    if not detectedBarcodes:
        return "Barcode Not Detected or your barcode is blank/corrupted!"
    else:
        barcode_data = []
        # Traverse through all the detected barcodes in image
        for barcode in detectedBarcodes:
            # Print the barcode data
            barcode_data.append({
                "data": barcode.data.decode("utf-8"),
                "type": barcode.type
            })
        
        return barcode_data
