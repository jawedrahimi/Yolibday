const arena = document.getElementById("arena");
const yesBtn = document.getElementById("yesBtn");
const noBtn  = document.getElementById("noBtn");
const msg    = document.getElementById("message");

function randomPos() {
  const pad = 10;
  const a = arena.getBoundingClientRect();
  const b = noBtn.getBoundingClientRect();

  const maxX = Math.max(pad, a.width - b.width - pad);
  const maxY = Math.max(pad, a.height - b.height - pad);

  const x = pad + Math.random() * (maxX - pad);
  const y = pad + Math.random() * (maxY - pad);

  noBtn.style.left = `${x}px`;
  noBtn.style.top  = `${y}px`;
}

function setMessage(text){
  msg.textContent = text;
}

/* YES opens 2nd page.
   Tries opening a new tab/window; if blocked, opens in same tab. */
yesBtn.addEventListener("click", () => {
  setMessage("YAYAYA!!! 🎉 Opening your celebration...");
  yesBtn.disabled = true;
  yesBtn.textContent = "YOU’RE IN ✅";

  const w = window.open("celebrate.html", "_blank");
  if (!w) {
    window.location.href = "celebrate.html";
  }
});

/* NO button becomes impossible */
["mouseenter", "mouseover", "pointerenter", "touchstart", "focus"].forEach(evt => {
  noBtn.addEventListener(evt, (e) => {
    if (evt === "touchstart") e.preventDefault();
    randomPos();
    setMessage("Nice try 😄 Just press YES ✅");
  }, { passive: false });
});

/* If someone somehow clicks NO */
noBtn.addEventListener("click", (e) => {
  e.preventDefault();
  randomPos();
  setMessage("NO is currently unavailable 😅 Try YES ✅");
});

window.addEventListener("load", randomPos);
window.addEventListener("resize", randomPos);