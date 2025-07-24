// Personalize greeting
const params = new URLSearchParams(window.location.search);
const name = params.get("name");
if (name) {
  document.getElementById("greeting").innerText = `Happy Birthday ${name} !`;
}

let clickedCount = 0;

document.querySelectorAll(".puzzle-piece").forEach(piece => {
  piece.addEventListener("click", function () {
    if (!this.classList.contains("clicked")) {
      this.classList.add("clicked");
      clickedCount++;
    }

    if (clickedCount === 4) {
      setTimeout(() => {
        window.location.href = "next.html";
      }, 500);
    }
  });
});
