const checkButton = document.querySelector('.check-button')
const showButton = document.querySelector('.show-button')
const clearButton = document.querySelector('.clear-button')

const rightAnswers = ['19', '40 minutes', 'balcony', 'tennis courts'];

let studentsAnswers = document.querySelectorAll('.exercise__input')

checkButton.addEventListener('click', () => handleClickCheckButton())
showButton.addEventListener('click', () => handleClickShowButton())
clearButton.addEventListener('click', () => handleClickClearButton ())

function handleClickCheckButton () {
    takeAnswers()
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
}

function takeAnswers () {
    let studentsAnswersValues = [];
    for (let i=0; i<studentsAnswers.length; i++) {
        studentsAnswersValues.push(studentsAnswers[i].value)
    }
    return studentsAnswersValues
}