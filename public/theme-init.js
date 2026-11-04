// Applies the saved (or system) theme before first paint so the page never flashes white in dark mode.
// Kept as a file because the CSP blocks inline scripts.
try {
  var saved = localStorage.getItem("theme");
  if (saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    document.documentElement.classList.add("dark");
  }
} catch (e) {}
