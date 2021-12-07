/* jshint esversion: 8 */

const beginButton = document.getElementById('start-btn');
const questionBox = document.getElementById('question-container');
const questionItem = document.getElementById('question');
const answerItems = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
let mixQuestions, currentQuestionNumber;
let correctAnswers = 0;
let wrongAnswers = 0; 

beginButton.addEventListener('click', beginGame);
nextButton.addEventListener('click', nextQuestion)

function beginGame() {
    beginButton.classList.add('vanish')
    mixQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionNumber = 0
    questionBox.classList.remove('vanish')
    nextQuestion()
}

function nextQuestion() {
    resetState()
    if (currentQuestionNumber <= 9) {
        currentQuestionNumber++
        getQuestion(mixQuestions[currentQuestionNumber])
    } else {
        gameOver();
    }
    console.log('correct answers = ' + correctAnswers);
    console.log('wrong answers = ' + wrongAnswers);
}

function getQuestion(question) {
    questionItem.innerText = question.question
    question.answers.forEach(answer => {
        let button = document.createElement('button')
        button.innerText = answer.option
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', chooseAnswer)
        answerItems.appendChild(button)
    })
}

function resetState() {
    bodyStatusRemove(document.body)
    nextButton.classList.add('vanish')
    questionItem.innerText = ''
    while (answerItems.firstChild) {
      answerItems.removeChild(answerItems.firstChild)
  }    
}

function chooseAnswer(e) {
    const choosenButton = e.target
    const right = choosenButton.dataset.correct
    bodyStatus(document.body, right)
    Array.from(answerItems.children).forEach(button => {
        bodyStatus(button, button.dataset.correct)
        button.disabled = true
    });
    if (right) {
        correctAnswers++;
    } else {
        wrongAnswers++;
    }
    
    if (mixQuestions.length > currentQuestionNumber + 1) {
        nextButton.classList.remove('vanish')
    }   else {
        beginButton.innerText = 'Restart'
        beginButton.classList.remove('vanish')
    }
    
}

function gameOver() {
    questionItem.innerText = `game over: correct = ${correctAnswers}, wrong = ${wrongAnswers} `;
}

function bodyStatus(entity, right) {
    bodyStatusRemove(entity)
    if (right) {
        entity.classList.add('correct');
    } else {
        entity.classList.add('wrong');
    }
}

function bodyStatusRemove(entity) {
    entity.classList.remove('correct')
    entity.classList.remove('wrong')
}

