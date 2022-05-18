const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  const btn = question.querySelector(".question-btn");
  btn.addEventListener("click", () => {
    questions.forEach((item) => {
      item !== question ? item.classList.remove("show-text") : null;
    });
    question.classList.toggle("show-text");
  });
});
