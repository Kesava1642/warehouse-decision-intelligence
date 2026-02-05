document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = Array.from(document.querySelectorAll("details.nav-dropdown"));
  if (!dropdowns.length) return;

  const isDesktopHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  const closeAll = (except = null) => {
    dropdowns.forEach(d => {
      if (d !== except) d.removeAttribute("open");
    });
  };

  // Click outside closes
  document.addEventListener("click", (e) => {
    const header = document.querySelector("header");
    if (!header) return;
    if (!header.contains(e.target)) closeAll();
  });

  if (isDesktopHover) {
    dropdowns.forEach((d) => {
      let t;
      d.addEventListener("mouseenter", () => {
        clearTimeout(t);
        closeAll(d);
        d.setAttribute("open", "");
      });
      d.addEventListener("mouseleave", () => {
        clearTimeout(t);
        t = setTimeout(() => d.removeAttribute("open"), 120);
      });
    });
  } else {
    // Mobile: tapping summary toggles; but still close others when one opens
    dropdowns.forEach((d) => {
      d.addEventListener("toggle", () => {
        if (d.open) closeAll(d);
      });
    });
  }
});
