const beginButton = document.getElementById('start-btn');
const questionBox = document.getElementById('question-container');
const mixQuestions, currentQuestionNumber

beginButton.addEventListener('click', beginGame);

function beginGame() {
    console.log('started');
    beginButton.classList.add('hide');
    mixQuestions = questions.sort(() => Math.random() - .5);
    questionBox.classList.remove('hide');
    nextQuestion()
}

function nextQuestion() {

}

function chooseAnswer() {

}

const questions = [
    {
        question: 'Which Italian city is home of the car manufacturer Fiat?',
        answers: [
            {option: 'Turin', correct: true },
            {option: 'Maranello', correct: false },
            {option: 'Modena', correct: false },
            {option: 'Rome', correct: false },                     
        ]
    }
]