from flask import Flask, render_template, request, send_file
import os
import subprocess
import os
from flask import send_file
from ultralytics import YOLO
from PIL import Image

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')



@app.route('/predict', methods=['POST'])
def predict():
    # Get the uploaded file
    file = request.files['image']

    # Create the directory if it doesn't exist
    if not os.path.exists('temp'):
        os.makedirs('temp')

    # Save the file temporarily
    file_path = 'temp/image.jpg'
    file.save(file_path)

    # Initialize the YOLO model
    model = YOLO(r'C:\Users\BASIL K AJI\Desktop\Projects\Detectron\Outputs\training_results2\weights\best.pt')

    # Perform object detection
    results = model([file_path])

    # Save the result
    result_image_path = 'temp/result.jpg'
    for result in results:
        result.save(filename=result_image_path)

    # Return the processed image for display
    return send_file(result_image_path, mimetype='image/jpeg')
