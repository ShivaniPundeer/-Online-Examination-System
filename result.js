document.addEventListener("DOMContentLoaded", () => {
  const result = JSON.parse(localStorage.getItem("lastResult") || "null");
  if (!result) { location.href = "index.html#exams"; return; }
  const exam = exams.find(e => e.id === result.examId);
  document.getElementById("resultExam").textContent = result.examName;
  document.getElementById("score").textContent = result.score;
  document.querySelector(".score-circle span").textContent = `/ ${result.total}`;
  document.getElementById("correct").textContent = result.score;
  document.getElementById("wrong").textContent = result.wrong;
  document.getElementById("skipped").textContent = result.skipped;
  document.getElementById("percentage").textContent = `${result.percentage}%`;

  const passed = result.percentage >= 40;
  document.getElementById("resultTitle").textContent = passed ? "Congratulations!" : "Keep Practicing!";
  document.getElementById("resultIcon").textContent = passed ? "✓" : "!";
  document.getElementById("resultMessage").textContent = passed
    ? "Excellent work! Keep practicing to make your score even stronger."
    : "Don't worry. Review your answers and try the exam again to improve your score.";

  document.getElementById("reviewList").innerHTML = exam.questions.map((q, i) => {
    const selected = result.answers[i];
    const isCorrect = selected === q.answer;
    return `<div class="review-item ${isCorrect ? "correct" : "wrong"}">
      <h4>Q${i+1}. ${q.q}</h4>
      <p>Your answer: <b>${
  selected === null
    ? "Not answered"
    : q.options[selected]
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
}</b></p>

<p>Correct answer: <b>${
  q.options[q.answer]
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
}</b></p>
    </div>`;
  }).join("");
});
