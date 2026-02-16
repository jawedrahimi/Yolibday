const arena = document.getElementById("arena");
const yesBtn = document.getElementById("yesBtn");
const noBtn  = document.getElementById("noBtn");
const msg    = document.getElementById("message");

function setMessage(t){ msg.textContent = t; }

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

yesBtn.addEventListener("click", () => {
  setMessage("YAYAYA!!! 🎉 Opening celebration...");
  const w = window.open("celebrate.html", "_blank");
  if (!w) window.location.href = "celebrate.html";
});

["mouseenter","mouseover","pointerenter","touchstart","focus"].forEach(evt => {
  noBtn.addEventListener(evt, (e) => {
    if (evt === "touchstart") e.preventDefault();
    randomPos();
    setMessage("Nice try 😄 Just press YES ✅");
  }, { passive:false });
});

noBtn.addEventListener("click", (e) => {
  e.preventDefault();
  randomPos();
  setMessage("NO is currently unavailable 😅 Try YES ✅");
});

window.addEventListener("load", randomPos);
window.addEventListener("resize", randomPos);