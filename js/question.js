const quizData = [
    {
    question: " 1. Ikinyabiziga cyose cyangwa ibinyabiziga bigenda bigomba kugira:",
    a: "Umuyobozi",
    b: "Umuherekeza",
    c: "A na B ni ibisubizo by'ukuri",
    d: "Nta gisubizo cy'ukuri kirimo",
    correct: "a" },
    
    {
    question: " 2. Ijambo “akayira” bivuga inzira nyabagendwa ifunganye yagenewe gusa:",
    a: "Abanyamaguru",
    b: "Ibinyabiziga bigenda ku biziga bibiri",
    c: "A na B ni ibisubizo by'ukuri",
    d: "Nta gisubizo cy'ukuri kirimo",
    correct: "c" },
    
    {
    question: " 3. Umurongo uciyemo uduce umenyesha ahegereye umurongo ushobora kuzuzwa n’uturanga gukata tw’ibara ryera utwo turanga cyerekezo tumenyesha :",
    a: " Igisate cy’umuhanda abayobozi bagomba gukurikira",
    b: " Ahegereye umurongo ukomeje",
    c: "Igabanurwa ry’umubare w’ibisate by’umuhanda mu cyerekezo bajyamo",
    d: "A na C nibyo",
    correct: "c" },
    {
    question: "4. Ibinyabiziga bikurikira bigomba gukorerwa isuzumwa buri mwaka:",
    a: " Ibinyabiziga bigenewe gutwara abagenzi muri rusange",
    b: "  Ibinyabiziga bigenewe gutwara ibintu birengeje toni 3.5",
    c: " Ibinyabiziga bigenewe kwigisha gutwara",
    d: "Nta gisubizo cy’ukuri kirimo",
    correct: "d" },
    
    {
    question: "5. Ahantu ho kugendera mu muhanda herekanwa n’ibimenyetso bimurika ibinyabiziga ntibishobora kuhagenda :",
    a: "Biteganye",
    b: "Ku murongo umwe",
    c: " A na B nibyo",
    d: "Nta gisubizo cy’ukuri kirimo",
    correct: "d" }];
    
    const quiz = document.getElementById("quiz");
    const answerEls = document.querySelectorAll(".answer");
    const questionEl = document.getElementById("question");
    const a_text = document.getElementById("a_text");
    const b_text = document.getElementById("b_text");
    const c_text = document.getElementById("c_text");
    const d_text = document.getElementById("d_text");
    const submitBtn = document.getElementById("submit");
    
    let currentQuiz = 0;
    let score = 0;
    
    loadQuiz();
    
    function loadQuiz() {
    deselectAnswers();
    
    const currentQuizData = quizData[currentQuiz];
    
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    }
    
    function getSelected() {
    let answer = undefined;
    answerEls.forEach(answerEl => {
    if (answerEl.checked) {
    answer = answerEl.id;
    }
    });
    return answer;
    }
    
    function deselectAnswers() {
    answerEls.forEach(answerEl => {
    answerEl.checked = false;
    });
    }
    
    submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
    if (answer === quizData[currentQuiz].correct) {
    score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) { loadQuiz(); } else { quiz.innerHTML=` <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
        <button onclick="#">Reload</button>
        `;
        }
        }
        });