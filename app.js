// Sélectionner les éléments du DOM
let userScore = document.querySelector('.user-score');
let compScore = document.querySelector('.computer-score');
let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissors = document.querySelector('.scissors');
let result = document.querySelector('.result p');
let userScoreActive = 0;
let compScoreActive = 0;
let turn = false


function getRandomNumber() {
    return Math.floor(Math.random() * 3);
}

function startTurn() {
    turn = true;
    rock.classList.add('disable-click');
    paper.classList.add('disable-click');
    scissors.classList.add('disable-click');
}

function endTurn(){
    turn = false;
    resetAfterDelay();
    rock.classList.remove('disable-click');
    paper.classList.remove('disable-click');
    scissors.classList.remove('disable-click');
}

function updateScore() {
    userScore.textContent = userScoreActive;
    compScore.textContent = compScoreActive;
}

function resetSelection() {
    rock.classList.remove('rock-user-selected', 'rock-comp-selected');
    scissors.classList.remove('scissors-comp-selected', 'scissors-user-selected');
    paper.classList.remove('paper-comp-selected', 'paper-user-selected');
}

function resetAfterDelay() {
    setTimeout(() => {
        resetSelection();
    }, 1000);
}

function matchNul() {
    result.textContent = 'Match nul';
}

function userLoses() {
    result.textContent = 'Tu perds...';
    compScoreActive++;
    updateScore();
}

function userWins() {
    result.textContent = 'Tu gagnes !';
    userScoreActive++;
    updateScore();
}

function compChoice(getRandomNumber) {
    if (getRandomNumber === 0) {
        rock.classList.add('rock-comp-selected');
    } else if (getRandomNumber === 1) {
        paper.classList.add('paper-comp-selected');
    } else {
        scissors.classList.add('scissors-comp-selected');
    }
}


rock.addEventListener('click', () => {
    startTurn();
    rock.classList.add('rock-user-selected');

    setTimeout(() => {
        const compChoiceValue = getRandomNumber();
        compChoice(compChoiceValue);

        if (compChoiceValue === 0) {
            matchNul();
        } else if (compChoiceValue === 1) {
            userLoses();
        } else {
            userWins();
        }

        endTurn();
    }, 1000);
});

paper.addEventListener('click', () => {
    startTurn();
    paper.classList.add('paper-user-selected');

    setTimeout(() => {
        const compChoiceValue = getRandomNumber();
        compChoice(compChoiceValue);

        if (compChoiceValue === 0) {
            userWins();
        } else if (compChoiceValue === 1) {
            matchNul();
        } else {
            userLoses();
        }

        endTurn();
    }, 1000);
});

scissors.addEventListener('click', () => {
    startTurn();
    scissors.classList.add('scissors-user-selected');

    setTimeout(() => {
        const compChoiceValue = getRandomNumber();
        compChoice(compChoiceValue);

        if (compChoiceValue === 0) {
            userLoses();
        } else if (compChoiceValue === 1) {
            userWins();
        } else {
            matchNul();
        }

        endTurn();
    }, 1000);
});