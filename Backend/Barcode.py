# barcode_reader.py

import cv2
from pyzbar.pyzbar import decode
import re
def BarcodeReader(image_path):
    # Read the image in numpy array using cv2
    img = cv2.imread(image_path)

    # Decode the barcode image
    detectedBarcodes = decode(img)

    # If not detected, return a message
    if not detectedBarcodes:
        return "error:barcode not detected"
    else:
        barcode_data = []
        # Traverse through all the detected barcodes in image
        
        for barcode in detectedBarcodes:
            # Print the barcode data
            barcode_data.append({
                "data": barcode.data.decode("utf-8"),
                "type": barcode.type
            })
        non_url_data = []
        for item in barcode_data:
            if 'data' in item and not is_url(item['data']):
                non_url_data.append(item['data'])

        # Output the result
        print("Non-URL Barcode Data:", non_url_data[0])
        #print( "Barcode Data: ", barcode_data[0].data)
        #cv2.imshow("Barcode Detected",img)
        #cv2.waitKey(0)
        #cv2.destroyAllWindows() 
        return non_url_data[0]
def is_url(data):
    return re.match(r'^https?://', data) is not None

# Iterate through barcode data and check for non-URL data
