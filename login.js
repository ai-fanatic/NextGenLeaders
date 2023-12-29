const questions = [
  {
    question: "What day of the week the Next Gen Leader Session conducted?",
    answer: "Friday",
    hint: "🤔Hint: It's a day where the previous weekly Ashling meeting of the week.",
  },
  {
    question: "At what time the meeting started?",
    answer: "8AM CST",
    hint: "🤔Hint: Early in the morning, Central Standard Time.",
  },
  {
    question: "Is the final session conducted in 2023?",
    answer: "No",
    hint: "🤔Hint: Answer Yes or No.",
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
