const menuBtn = document.getElementById("menu-btn");
const menuOverlay = document.getElementById("menu-overlay");
const closeBtn = document.getElementById("close-btn");

menuBtn.addEventListener("click", () => {
  menuOverlay.classList.add("open");
});

closeBtn.addEventListener("click", () => {
  menuOverlay.classList.remove("open");
});
