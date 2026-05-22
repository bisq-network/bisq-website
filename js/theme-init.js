(function () {
  if (typeof Cookies === "undefined") {
    return;
  }

  var darkMode = Cookies.get("darkmode");
  var prefersDark = window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (darkMode === undefined && prefersDark) {
    document.body.classList.add("dark-mode");
    Cookies.set("darkmode", 1);
  } else if (darkMode === "1" || darkMode === 1) {
    document.body.classList.add("dark-mode");
    Cookies.set("darkmode", 1);
  } else {
    document.body.classList.remove("dark-mode");
    Cookies.set("darkmode", 0);
  }
})();
