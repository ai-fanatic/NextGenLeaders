function toggleTheme() {
  var body = document.body;
  var themeIcon = document.getElementById("theme-icon");
  body.classList.toggle("night-mode");

  if (body.classList.contains("night-mode")) {
    themeIcon.textContent = "🌜"; // Moon icon for night mode
  } else {
    themeIcon.textContent = "🌞"; // Sun icon for day mode
  }
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
