function toggleDarkMode() {
    var body = document.getElementsByTagName("body")[0];
    var currentClass = body.className;
    if (currentClass === "dark-mode") {
      body.className = "";
      localStorage.setItem("darkMode", "");
    } else {
      body.className = "dark-mode";
      localStorage.setItem("darkMode", "enabled");
    }
  }
  
  window.addEventListener("DOMContentLoaded", function () {
    var darkMode = localStorage.getItem("darkMode");
    var body = document.getElementsByTagName("body")[0];
    if (darkMode === "enabled") {
      body.className = "dark-mode";
    }
  });
  