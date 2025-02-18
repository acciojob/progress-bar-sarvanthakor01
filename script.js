//your JS code here. If required.
const circles = document.querySelectorAll('.circle');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
let currentActive = 0;

// Update the progress line width based on the current active circle
function updateProgress() {
    const progressLine = document.querySelector('.progress-line');
    const totalCircles = circles.length;
    const activeWidth = (currentActive / (totalCircles - 1)) * 100; // Calculate width percentage
    progressLine.style.width = `${activeWidth}%`;
}

// Handle Next button click
nextButton.addEventListener('click', () => {
    if (currentActive < circles.length - 1) {
        currentActive++;
        circles[currentActive].classList.add('active');
        updateProgress();
        prevButton.disabled = false; // Enable Previous button
    }
    if (currentActive === circles.length - 1) {
        nextButton.disabled = true; // Disable Next button at the last circle
    }
});

// Handle Previous button click
prevButton.addEventListener('click', () => {
    if (currentActive > 0) {
        circles[currentActive].classList.remove('active');
        currentActive--;
        updateProgress();
        nextButton.disabled = false; // Enable Next button
    }
    if (currentActive === 0) {
        prevButton.disabled = true; // Disable Previous button at the first circle
    }
});

// Initial setup
updateProgress();