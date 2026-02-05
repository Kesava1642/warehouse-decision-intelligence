document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = Array.from(document.querySelectorAll(".nav-dropdown"));

  if (!dropdowns.length) return;

  // Close all dropdowns
  const closeAll = () => dropdowns.forEach(d => d.removeAttribute("open"));

  // Close when clicking outside
  document.addEventListener("click", (e) => {
    const clickedInsideAny = dropdowns.some(d => d.contains(e.target));
    if (!clickedInsideAny) closeAll();
  });

  // Close on ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeAll();
  });

  // If user opens one dropdown by click, close others
  dropdowns.forEach(d => {
    d.addEventListener("toggle", () => {
      if (d.open) dropdowns.forEach(other => { if (other !== d) other.removeAttribute("open"); });
    });
  });
});
