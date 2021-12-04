const beginButton = document.getElementById('start-btn');
const questionBox = document.getElementById('question-container');

beginButton.addEventListener('click', beginGame);

function beginGame() {
    console.log('started');
    beginButton.classList.add('hide');
    questionBox.classList.remove('hide');
}

function nextQuestion() {

}

function chooseAnswer() {

}