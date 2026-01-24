const toggle = document.getElementById("toggle");
const body = document.body;

toggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  body.classList.toggle("light");
  toggle.textContent = body.classList.contains("dark") ? "🌙" : "☀️";
});
