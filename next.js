function goToNext() {
  window.location.href = 'pic1.html'; // Change this if needed
}

// Show continue button after 3 seconds
window.addEventListener('load', function () {
  setTimeout(() => {
    const btnBlock = document.getElementById('continue-block');
    btnBlock.style.display = 'block';
  }, 3000);
});

// Generate floating hearts
const heartContainer = document.getElementById('heart-container');
setInterval(() => {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerText = '❤️';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = (Math.random() * 10 + 10) + 'px';
  heartContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}, 300);
