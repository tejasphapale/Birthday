// Floating hearts animation
const heartContainer = document.getElementById('heart-container');
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerText = '❤️';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = (Math.random() * 15 + 10) + 'px';
  heart.style.animationDuration = (Math.random() * 5 + 5) + 's';
  heartContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 10000);
}
setInterval(createHeart, 400);

// Show "Next" button after delay
setTimeout(() => {
  document.getElementById('nextBtn').style.display = 'block';
}, 10000);

// Redirect on button click
function goToNext() {
  window.location.href = "next.html"; // Change as needed
}
