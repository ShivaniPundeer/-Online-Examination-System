document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(location.search);
  const exam = exams.find(e => e.id === params.get("id")) || exams[0];
  let current = 0, answers = Array(exam.questions.length).fill(null);
  let secondsLeft = exam.duration * 60, submitted = false;

  const $ = id => document.getElementById(id);
  $("examName").textContent = exam.name;
  $("questionCounter").textContent = `${exam.questions.length} Questions`;
  $("difficultyBadge").textContent = exam.difficulty;

  function render() {
    const q = exam.questions[current];
    $("questionNumber").textContent = `Question ${current + 1} of ${exam.questions.length}`;
    $("questionText").textContent = q.q;
    $("questionProgress").style.width = `${((current + 1) / exam.questions.length) * 100}%`;
    $("options").innerHTML = q.options.map((option, i) => `
      <div class="option ${answers[current] === i ? "selected" : ""}" data-index="${i}">
        <span class="option-letter">${String.fromCharCode(65+i)}</span><span>${option}</span>
      </div>`).join("");
    document.querySelectorAll(".option").forEach(el => el.addEventListener("click", () => {
      answers[current] = Number(el.dataset.index); render();
    }));
    $("prevBtn").disabled = current === 0;
    $("nextBtn").textContent = current === exam.questions.length - 1 ? "Last Question" : "Next →";
    renderPalette();
  }

  function renderPalette() {
    $("palette").innerHTML = exam.questions.map((_, i) => `<button class="${i === current ? "current" : ""} ${answers[i] !== null ? "answered" : ""}" data-q="${i}">${i+1}</button>`).join("");
    document.querySelectorAll("#palette button").forEach(b => b.addEventListener("click", () => { current = Number(b.dataset.q); render(); }));
  }

  function formatTime(sec) { return `${String(Math.floor(sec/60)).padStart(2,"0")}:${String(sec%60).padStart(2,"0")}`; }
  function tick() {
    $("timer").textContent = formatTime(secondsLeft);
    if (secondsLeft <= 60) $("timer").parentElement.style.background = "#fff0f0";
    if (secondsLeft <= 0) { submit(true); return; }
    secondsLeft--;
  }
  const timer = setInterval(tick, 1000); tick();

  $("prevBtn").addEventListener("click", () => { if (current > 0) { current--; render(); } });
  $("nextBtn").addEventListener("click", () => { if (current < exam.questions.length - 1) { current++; render(); } else openSubmit(); });
  $("submitBtn").addEventListener("click", openSubmit);
  $("cancelSubmit").addEventListener("click", () => $("confirmModal").classList.remove("show"));
  $("confirmSubmit").addEventListener("click", () => submit(false));

  function openSubmit() {
    const answered = answers.filter(a => a !== null).length;
    $("submitSummary").textContent = `You have answered ${answered} of ${exam.questions.length} questions. Submit your exam now?`;
    $("confirmModal").classList.add("show");
  }

  function submit(auto = false) {
    if (submitted) return;
    submitted = true; clearInterval(timer);
    const correct = answers.reduce((n, a, i) => n + (a === exam.questions[i].answer ? 1 : 0), 0);
    const wrong = answers.reduce((n, a, i) => n + (a !== null && a !== exam.questions[i].answer ? 1 : 0), 0);
    const skipped = answers.filter(a => a === null).length;
    const percentage = Math.round(correct / exam.questions.length * 100);
    const result = {examId:exam.id, examName:exam.name, date:new Date().toISOString(), score:correct, wrong, skipped, total:exam.questions.length, percentage, answers};
    localStorage.setItem("lastResult", JSON.stringify(result));
    const history = JSON.parse(localStorage.getItem("examHistory") || "[]");
    history.unshift(result); localStorage.setItem("examHistory", JSON.stringify(history.slice(0,20)));
    location.href = `result.html?id=${exam.id}`;
  }
  render();
});