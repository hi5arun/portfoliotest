// ===== Jarvis Popup =====
const toggleBtn = document.getElementById("jarvis-toggle");
const popup = document.getElementById("jarvis-popup");
const closeBtn = document.getElementById("jarvis-close");

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    popup.style.display = (popup.style.display === "none" || popup.style.display === "") ? "block" : "none";
  });
}

if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });
}

// ===== Tooltip on Mobile (tap support) =====
document.querySelectorAll('.tooltip').forEach(el => {
  el.addEventListener('click', function () {
    let tip = this.querySelector('.tooltip-text');
    tip.style.visibility = tip.style.visibility === 'visible' ? 'hidden' : 'visible';
    tip.style.opacity = tip.style.opacity === '1' ? '0' : '1';
  });
});
