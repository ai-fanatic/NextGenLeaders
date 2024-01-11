const questions = [
  {
    question: "At what time the meeting started?",
    answer: "8AM",
    hint: "🤔Hint: Enter the time, Central Standard Time.",
  },
  {
    question: "Is the final session conducted in 2023?",
    answer: "No",
    hint: "🤔Hint: Answer Yes or No.",
  },
  {
    question: "What day the NextGen Session was conducted?",
    answer: "Friday",
    hint: "🤔Hint: No hint for this!!",
  },
  {
    question: "How long is the session scheduled for?",
    answer: "90",
    hint: "🤔Hint: Enter in Minutes 30, 60 or 90",
  },
];

window.onload = function () {
  const selectedQuestion =
    questions[Math.floor(Math.random() * questions.length)];
  document.getElementById("question-label").innerText =
    selectedQuestion.question;
  document.getElementById("hint-text").innerText = selectedQuestion.hint;

  const form = document.getElementById("login-form");
  form.onsubmit = function (event) {
    event.preventDefault();
    const userAnswer = document.getElementById("answer-input").value;
    if (
      userAnswer.trim().toLowerCase() === selectedQuestion.answer.toLowerCase()
    ) {
      window.location.href = "main.html";
    } else {
      alert("Incorrect answer. Please try again.");
    }
  };
};

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
