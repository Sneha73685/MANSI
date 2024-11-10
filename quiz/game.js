const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById('progressText');
const progressBarFull = document.getElementById('progressBarFull');
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
const MAX_QUESTIONS = 9;

let questions = [];

fetch('questions.json')
    .then((res) => res.json())
    .then((loadedQuestions) => {
        questions = loadedQuestions;
        startSurvey();
    })
    .catch((err) => console.error(err));

startSurvey = () => {
    questionCounter = 0;
    score = 0;
    getNewQuestion();
};

getNewQuestion = () => {
    if (questionCounter >= questions.length || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        return window.location.assign('/end.html');
    }

    currentQuestion = questions[questionCounter];
    questionCounter++;
    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

    question.innerText = currentQuestion.question;
    choices.forEach((choice, index) => {
        choice.innerText = currentQuestion[`choice${index + 1}`];
    });

    acceptingAnswers = true;
};

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;
        acceptingAnswers = false;

        const selectedChoice = e.target;
        const selectedAnswerIndex = selectedChoice.dataset['number'] - 1;
        const weight = currentQuestion.weights[selectedAnswerIndex];
        incrementScore(weight);

        selectedChoice.parentElement.classList.add('selected');
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove('selected');
            getNewQuestion();
        }, 1000);
    });
});

incrementScore = (num) => {
    score += num;
};
