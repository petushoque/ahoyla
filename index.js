const checkButton = document.querySelector('.check-button')
const showButton = document.querySelector('.show-button')
const clearButton = document.querySelector('.clear-button')

const rightAnswers = ['19', '40 minutes', 'balcony', 'tennis courts'];

const studentsAnswers = document.querySelectorAll('.exercise__input')
const resultPanel = document.querySelector('.exercise__result')
let totalAnswers = document.querySelector('.total')
let countOfRightAnswers = document.querySelector('.number')
let percentOfRightAnswers = document.querySelector('.percent')

checkButton.addEventListener('click', () => handleClickCheckButton())
showButton.addEventListener('click', () => handleClickShowButton())
clearButton.addEventListener('click', () => handleClickClearButton ())

function handleClickCheckButton () {
    let counterForAnswers = 0
    for (let i=0; i<studentsAnswers.length; i++) {
        studentsAnswers[i].classList.remove('exercise__input_correct')
        studentsAnswers[i].classList.remove('exercise__input_wrong')
    }
    for (let i=0; i<studentsAnswers.length; i++) {
        if (studentsAnswers[i].value === rightAnswers[i]) {
            studentsAnswers[i].classList.add('exercise__input_correct')
            counterForAnswers = counterForAnswers + 1
        }
        else {
            studentsAnswers[i].classList.add('exercise__input_wrong')
        }        
    }
    console.log(counterForAnswers)
    resultPanel.classList.add('exercise__result_visible')
    countOfRightAnswers.innerHTML = counterForAnswers
    percentOfRightAnswers.innerHTML = ((counterForAnswers / rightAnswers.length) * 100);
}

function handleClickShowButton () {
    for (let i=0; i<studentsAnswers.length; i++) {
        studentsAnswers[i].value = rightAnswers[i]
    }
}

function handleClickClearButton () {
    for (let i=0; i<studentsAnswers.length; i++) {
        studentsAnswers[i].value = ''
    }
    for (let i=0; i<studentsAnswers.length; i++) {
        studentsAnswers[i].classList.remove('exercise__input_correct')
        studentsAnswers[i].classList.remove('exercise__input_wrong')
    }
    resultPanel.classList.remove('exercise__result_visible')
}

totalAnswers.innerHTML = rightAnswers.length