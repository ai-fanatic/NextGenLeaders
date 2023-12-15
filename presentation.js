// Existing code (if any) goes here

// Add this new code for collapsible functionality
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

// Additional code (if any) goes here

function loadPresentation(month) {
  const presentationContainer = document.getElementById(month + "-content");
  // Load the presentation HTML or embed code based on the selected month
  presentationContainer.innerHTML = `<h3>Presentation for ${month}</h3>`;
  // In a real scenario, replace the above line with the code to load the actual presentation
}
