# Detectron - Enemy Aircraft Detection System with YOLOv8

The Enemy Aircraft Detection System is a computer vision project developed using YOLOv3 object detection model and the Detectron library. It aims to detect enemy aircraft from aerial images or video streams.

## Features

- Real-time detection of enemy aircraft from images or video streams.
- Support for multiple aircraft classes and types.
- High accuracy and fast inference using YOLOv8.
- Easy integration with existing systems or applications.

## Technologies Used

- YOLOv8: Object detection model for detecting aircraft.
- Python: Programming language used for backend development.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/enemy-aircraft-detection.git
```

2. Navigate to the project directory:

```bash
run app.py
```

## Usage

1. Prepare your aerial images or video streams for detection.
2. Run the detection script:

```bash
python detect_aircraft.py --input <input_file_or_directory> --output <output_file_or_directory>
```

3. View the detected enemy aircraft in the output images or video streams.

## Configuration

- Customize the detection settings in `config.py`, such as confidence threshold, NMS threshold, etc.
- Update the YOLOv8 weights in the `models` directory for improved detection performance.

## Contributing

Contributions are welcome! Feel free to submit bug reports, feature requests, or pull requests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
