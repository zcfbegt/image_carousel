let currentIndex = 0; // Start with the first image
const images = document.querySelectorAll('.image-container'); // Select all image containers

function showImage(index) {
    // Hide all images
    images.forEach(image => {
        image.classList.remove('active');
    });

    // Show the image at the given index
    images[index].classList.add('active');
}

document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length; // Move to the next image
    showImage(currentIndex);
});

document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Move to the previous image
    showImage(currentIndex);
});

// Initialize carousel with the first image visible
showImage(currentIndex);
