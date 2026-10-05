document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("examGrid");
  const historyContent = document.getElementById("historyContent");
  let currentFilter = "All";

  const getHistory = () => JSON.parse(localStorage.getItem("examHistory") || "[]");

  function renderExams() {
    const list = currentFilter === "All" ? exams : exams.filter(e => e.category === currentFilter);
    grid.innerHTML = list.map(exam => `
      <article class="exam-card">
        <div class="exam-icon">${exam.icon}</div>
        <span class="category">${exam.category}</span>
        <h3>${exam.name}</h3>
        <p>${exam.description}</p>
        <span class="difficulty ${exam.difficulty.toLowerCase()}">${exam.difficulty}</span>
        <div class="exam-meta"><span>⏱ ${exam.duration} min</span><span>☷ ${exam.questions.length} Questions</span></div>
        <a class="btn btn-primary" href="exam.html?id=${exam.id}">Start Exam →</a>
      </article>`).join("");
  }

  function renderHistory() {
    const history = getHistory();
    if (!history.length) {
      historyContent.innerHTML = `<div class="history-empty"><h3>No attempts yet</h3><p>Choose an exam above and complete your first assessment.</p><a class="btn btn-primary" href="#exams">Browse Exams</a></div>`;
      return;
    }
    historyContent.innerHTML = `<div class="history-table-wrap"><table class="history-table">
      <thead><tr><th>Exam</th><th>Date</th><th>Score</th><th>Percentage</th><th>Status</th></tr></thead>
      <tbody>${history.map(h => `<tr><td><b>${h.examName}</b></td><td>${new Date(h.date).toLocaleString()}</td><td>${h.score}/${h.total}</td><td>${h.percentage}%</td><td class="${h.percentage >= 40 ? "status-pass" : "status-fail"}">${h.percentage >= 40 ? "PASS" : "TRY AGAIN"}</td></tr>`).join("")}</tbody>
    </table></div>`;
  }

  document.querySelectorAll(".filter").forEach(btn => btn.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(b => b.classList.remove("active"));
    btn.classList.add("active"); currentFilter = btn.dataset.filter; renderExams();
  }));

  document.querySelectorAll("[data-scroll]").forEach(btn => btn.addEventListener("click", () => document.querySelector(btn.dataset.scroll).scrollIntoView({behavior:"smooth"})));

  document.getElementById("clearHistory")?.addEventListener("click", () => {
    if (confirm("Clear all exam history?")) { localStorage.removeItem("examHistory"); renderHistory(); showToast("History cleared"); }
  });

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") document.body.classList.add("dark");
  document.getElementById("themeToggle")?.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
    document.getElementById("themeToggle").textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
  });

  document.getElementById("mobileMenu")?.addEventListener("click", () => document.getElementById("navLinks").classList.toggle("open"));
  renderExams(); renderHistory();
});

function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message; toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2200);
}