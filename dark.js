function toggleDarkMode() {
  const isDark = document.documentElement.classList.toggle("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");

  const iframe = document.getElementById("blog");
  if (iframe) {
    try {
      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

      iframeDoc.documentElement.classList.toggle("dark-mode");
    }
    catch (e) {
  }
}
}
