// Keep the other variables the same
let slideIndex = 0;
const track = document.querySelector('.carousel-track');
const slides = document.getElementsByClassName("slide");

// Run once to set initial position
updateSlidePosition();

function moveSlide(n) {
  slideIndex += n;

  // Loop Logic
  if (slideIndex >= slides.length) {
    slideIndex = 0; // Go back to start
  } else if (slideIndex < 0) {
    slideIndex = slides.length - 1; // Go to end
  }

  updateSlidePosition();
  resetTimer(); // Keep your existing reset timer logic
}

function updateSlidePosition() {
  // 1. Calculate where to go
  const moveAmount = slideIndex * -100;

  // 2. Apply the move
  track.style.transform = `translateX(${moveAmount}%)`;
}

// --- AUTO PLAY SETTINGS ---
let slideInterval; // Variable to track the timer

function startAutoPlay() {
  // Run 'moveSlide(1)' every 5000 milliseconds (5 seconds)
  slideInterval = setInterval(() => {
    moveSlide(1);
  }, 10000);
}

function stopAutoPlay() {
  clearInterval(slideInterval); // Stops the timer
}

function resetTimer() {
  stopAutoPlay();  // Stop the current timer
  startAutoPlay(); // Start a fresh one
}

// Start the auto-play when the page loads
startAutoPlay();
