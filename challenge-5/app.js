const images = [
  {
    url: "https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Beautiful Mountain Landscape",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Ocean Sunset View",
  },
  {
    url: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Autumn Forest Path",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Urban City Skyline",
  },
];

const carouselTrack = document.getElementById("carouselTrack");
const caption = document.getElementById("caption");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const autoPlayButton = document.getElementById("autoPlayButton");
const timerDisplay = document.getElementById("timerDisplay");

let index = 0;
let intervalId = null;
let countdownInterval = null;
let countdown = 5;
images.forEach((image) => {
  const imgDiv = document.createElement("div");
  imgDiv.classList.add("carousel-slide");
  imgDiv.style.backgroundImage = `url(${image.url})`;
  carouselTrack.appendChild(imgDiv);
});

function updateCarousel() {
  const offset = -index * 100;
  carouselTrack.style.transform = `translateX(${offset}%)`;
  caption.innerText = images[index].caption;
}
function nextSlide() {
  index = (index + 1) % images.length;
  updateCarousel();
  startCountdown();
}
function prevSlide() {
  index = (index - 1 + images.length) % images.length;
  updateCarousel();
}
function startCountdown() {
  countdown = 5;
  timerDisplay.innerText = `Next slide in ${countdown}`;

  clearInterval(countdownInterval);
  countdownInterval = setInterval(() => {
    countdown--;
    timerDisplay.innerText = `Next slide in ${countdown}`;
    if (countdown <= 0) {
      clearInterval(countdownInterval);
      nextSlide();
    }
  }, 1000);
}
function startAutoPlay() {
  if (!intervalId) {
    startCountdown();
    intervalId = setInterval(nextSlide, 5000);
    autoPlayButton.innerText = "Stop Auto Play";
  }
}

function stopAutoPlay() {
  clearInterval(intervalId);
  clearInterval(countdownInterval);
  intervalId = null;
  countdownInterval = null;
  timerDisplay.innerText = "";
  autoPlayButton.innerText = "Start Auto Play";
}

// Button event listeners
nextButton.addEventListener("click", () => {
  stopAutoPlay();
  nextSlide();
});

prevButton.addEventListener("click", () => {
  stopAutoPlay();
  prevSlide();
});

autoPlayButton.addEventListener("click", () => {
  if (intervalId) {
    stopAutoPlay();
  } else {
    startAutoPlay();
  }
});
updateCarousel();
