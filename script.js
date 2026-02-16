const arena = document.getElementById("arena");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const celebrate = document.getElementById("celebrate");

/* Random NO button movement */
function moveNoButton() {
  const arenaBox = arena.getBoundingClientRect();
  const btnBox = noBtn.getBoundingClientRect();

  const maxX = arenaBox.width - btnBox.width;
  const maxY = arenaBox.height - btnBox.height;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

/* YES button click */
yesBtn.addEventListener("click", () => {
  message.textContent = "YAAYYYA!!! 🎉🎂 See you there! 🎁";

  yesBtn.disabled = true;
  yesBtn.textContent = "YOU’RE IN ✅";

  celebrate.hidden = false;

  noBtn.style.opacity = "0.3";
});

/* NO button impossible */
["mouseenter", "touchstart", "click"].forEach(event => {
  noBtn.addEventListener(event, (e) => {
    e.preventDefault();
    moveNoButton();
    message.textContent = "Nice try 😄 Just press YES!";
  });
});

/* Start position */
window.onload = moveNoButton;
window.onresize = moveNoButton;