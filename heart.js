function createHeart() {
  const heart = document.createElement("div");
  const emojis = ["💖", "💘", "💝", "💕", "❤️"];
  heart.innerText = emojis[Math.floor(Math.random() * emojis.length)];
  heart.className = "floating-heart";

  // Full-screen random directions with subtle curves
  const angle = Math.random() * 2 * Math.PI;
  const radius = Math.random() * 120 + 100; // Spread wider
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  const curveFactor = 0.3; // mid-curve (Bezier-like)
  const xMid = x * curveFactor + (Math.random() * 20 - 10);
  const yMid = y * curveFactor + (Math.random() * 20 - 10);

  heart.style.setProperty("--x", `${x}vw`);
  heart.style.setProperty("--y", `${y}vh`);
  heart.style.setProperty("--xMid", `${xMid}vw`);
  heart.style.setProperty("--yMid", `${yMid}vh`);
  heart.style.setProperty("--duration", `${(Math.random() * 2 + 5).toFixed(2)}s`);
  heart.style.fontSize = `${Math.random() * 18 + 28}px`;

  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 8000);
}

function loopHearts() {
  createHeart();
  setTimeout(loopHearts, Math.random() * 350 + 250); // faster bursts: 250–600ms
}

function goToBirthday() {
  const name = document.getElementById("nameInput").value.trim();
  if (name) {
    window.location.href = `name.html?name=${encodeURIComponent(name)}`;
  } else {
    alert("Please enter your name!");
  }
}

window.addEventListener("DOMContentLoaded", loopHearts);
