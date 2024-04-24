document.getElementById('predictButton').addEventListener('click', () => {
    // Remove previously displayed predicted image, if any
    const previousImage = document.getElementById('predictedImage');
    if (previousImage) {
        previousImage.parentNode.removeChild(previousImage);
    }

    // Get the selected file
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    // Create FormData object
    const formData = new FormData();
    formData.append('image', file);

    // Send POST request to Flask backend
    fetch('/predict', {
        method: 'POST',
        body: formData
    })
    .then(response => response.blob()) // Get the response as a blob
    .then(blob => {
        // Create object URL for the blob
        const objectURL = URL.createObjectURL(blob);

        // Create and style the predicted image element
        const predictedImage = new Image();
        predictedImage.id = 'predictedImage'; // Set an id for easy access
        predictedImage.src = objectURL;
        predictedImage.style.maxWidth = '300%'; // Ensure image fits container width
        predictedImage.style.margin = '60px auto'; // Center the image horizontally
        predictedImage.style.display = 'block'; // Ensure the image is block-level element
        predictedImage.style.zIndex = '2000000000000';

        // Append the predicted image to a container div below the box
        const container = document.createElement('div');
        container.appendChild(predictedImage);
        container.style.textAlign = 'center'; // Center the container horizontally
        container.style.marginTop = '550px';
        container.style.marginLeft = '-650px';  // Add some space between the box and image
        container.style.marginBottom = '-300px';

        // Append the container below the box
        const buttonContainer = document.querySelector('.button-container');
        buttonContainer.parentNode.insertBefore(container, buttonContainer.nextSibling);
    })
    .catch(error => console.error('Error:', error));
});
