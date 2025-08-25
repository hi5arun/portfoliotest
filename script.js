// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Testimonials slider
let slider = document.getElementById("testimonial-slider");
let index = 0;
setInterval(() => {
  index = (index + 1) % 4;
  slider.style.transform = `translateX(-${index * 100}%)`;
}, 4000);

// Jarvis popup
const toggleBtn = document.getElementById("jarvis-toggle");
const popupWin = document.getElementById("jarvis-popup");
const closeBtn = document.getElementById("jarvis-close");

toggleBtn.addEventListener("click", () => {
  popupWin.style.display = (popupWin.style.display === "block") ? "none" : "block";
});
closeBtn.addEventListener("click", () => popupWin.style.display = "none");

// Case study expand/collapse
document.querySelectorAll(".read-more").forEach(btn => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;
    content.classList.toggle("hidden");
    btn.textContent = content.classList.contains("hidden") ? "Read More ▼" : "Read Less ▲";
  });
});
