function toggleDarkMode() {
    var body = document.getElementsByTagName("body")[0];
    var currentClass = body.className;
    if (currentClass === "dark-mode") {
        body.className = "";
    } else {
        body.className = "dark-mode";
    }
}