const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById('progressText');
const progressBarFull = document.getElementById('progressBarFull');
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0; // Score variable to store internally
let questionCounter = 0;

let questions = [];

// Load questions from JSON
fetch('questions.json')
    .then((res) => res.json())
    .then((loadedQuestions) => {
        questions = loadedQuestions;
        startSurvey();
    })
    .catch((err) => console.error(err));

const MAX_QUESTIONS = 9;

startSurvey = () => {
    questionCounter = 0;
    score = 0;
    getNewQuestion();
};

getNewQuestion = () => {
    if (questionCounter >= questions.length || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score); // Store final score if needed
        return window.location.assign('/end.html');
    }
    currentQuestion = questions[questionCounter];
    questionCounter++;

    // Update progress bar and progress text
    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

    // Set question text and choices
    question.innerText = currentQuestion.question;
    choices.forEach((choice, index) => {
        choice.innerText = currentQuestion['choice' + (index + 1)];
    });

    acceptingAnswers = true;
};

// Handle choice selection and apply weighting to score
choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswerIndex = selectedChoice.dataset['number'] - 1;

        // Add weight of selected choice to score
        const weight = currentQuestion.weights[selectedAnswerIndex];
        incrementScore(weight);

        // Indicate selected choice visually
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
