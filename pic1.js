// Mobile viewport fix
function setRealVh() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}
setRealVh();
window.addEventListener('resize', setRealVh);

const slidesWrapper = document.getElementById("slidesWrapper");
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
const startBtn = document.getElementById("startBtn");
let current = 0;

const animationClasses = [
  "anim-zoomInOut",
  "anim-bubblePulse",
  "anim-heartbeat",
  "anim-bounce",
  "anim-zoomInOut",
  "anim-zoomInOut",
  "anim-bubblePulse",
  "anim-heartbeat",
  "anim-bounce",
  "anim-zoomInOut"
];

function playAudioForSlide(index) {
  for (let i = 0; i < totalSlides; i++) {
    const audio = document.getElementById(`audio${i}`);
    const slide = slides[i];
    slide.classList.remove("active", ...animationClasses);

    if (i === index) {
      slide.classList.add("active", animationClasses[i % animationClasses.length]);
      audio.currentTime = 0;
      audio.play().catch(e => console.log("Blocked:", e));
      audio.onended = () => {
        slide.classList.remove(animationClasses[i % animationClasses.length]);
        changeSlide(1);
      };
    } else {
      audio.pause();
      audio.currentTime = 0;
      audio.onended = null;
    }
  }

  slidesWrapper.style.transform = `translateX(-${index * 100}%)`;
}

function changeSlide(step = 1) {
  current = (current + step + totalSlides) % totalSlides;
  playAudioForSlide(current);
}

startBtn.addEventListener('click', () => {
  startBtn.style.display = 'none';
  playAudioForSlide(current);
});

// Swipe support
let startX = 0;
document.getElementById("slideshow").addEventListener('touchstart', e => startX = e.touches[0].clientX);
document.getElementById("slideshow").addEventListener('touchend', e => {
  const endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) changeSlide(1);
  else if (endX - startX > 50) changeSlide(-1);
});

// Floating emojis
const symbolContainer = document.getElementById('floating-symbols');
const symbols = ['💖', '❤️', '💕', '✨', '🌟', '💘', '🌸'];

function createSymbol() {
  const symbol = document.createElement('div');
  symbol.className = 'floating-symbol';
  symbol.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  symbol.style.left = Math.random() * 100 + 'vw';
  symbol.style.top = '100vh';
  symbol.style.fontSize = (Math.random() * 12 + 16) + 'px';
  symbol.style.animationDuration = (Math.random() * 6 + 10) + 's';
  symbolContainer.appendChild(symbol);
  setTimeout(() => symbol.remove(), 15000);
}

setInterval(createSymbol, 500);
