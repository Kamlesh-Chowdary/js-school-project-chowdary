import { fetchEvents } from "./fetcher.js";
import { renderTimeline } from "./renderer.js";

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("theme-toggle")!;

  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    toggleButton.textContent = isDark ? "🌞" : "🌙";
  });

  fetchEvents()
    .then(renderTimeline)
    .catch(error => {
      console.error("Error loading events:", error);
    });
});
