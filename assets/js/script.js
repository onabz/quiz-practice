const beginButton = document.getElementById('start-btn');
const questionBox = document.getElementById('question-container');
const questionItem = document.getElementById('question');
const answerItems = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
let mixQuestions, currentQuestionNumber;

beginButton.addEventListener('click', beginGame);

function beginGame() {
    beginButton.classList.add('vanish')
    mixQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionNumber = 0
    questionBox.classList.remove('vanish')
    nextQuestion()
}

function nextQuestion() {
    resetState()
    getQuestion(mixQuestions[currentQuestionNumber])
}

function getQuestion(question) {
    questionItem.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
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
    nextButton.classList.add('vanish')
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
    })
    nextButton.classList.remove('vanish')
}

function bodyStatus(entity, right) {
    bodyStatusRemove(entity)
    if (right) {
        entity.classList.add('correct')
    } else {
        entity.classList.add('wrong')
    }
}

function bodyStatusRemove(entity) {
    entity.classList.remove('correct')
    entity.classList.remove('wrong')
}

const questions = [
    {
        question: 'Which Italian city is home of the car manufacturer Fiat?',
        answers: [
            { option: 'Turin', correct: true },
            { option: 'Maranello', correct: false },
            { option: 'Modena', correct: false },
            { option: 'Rome', correct: false }                     
        ]
    }
]