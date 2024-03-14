// Sélectionner les éléments du DOM
let userScore = document.querySelector('.user-score');
let compScore = document.querySelector('.computer-score');
let result = document.querySelector('.result p');
let userScoreActive = 0;
let compScoreActive = 0;
let turn = false
let choices = document.querySelectorAll('.choice');


function getRandomNumber() {
    return Math.floor(Math.random() * 3);
}

function startTurn() {
    turn = true;
    document.body.classList.add('disable-click');
}

function endTurn() {
    turn = false;
    resetAfterDelay();
    document.body.classList.remove('disable-click');
}

function updateScore() {
    userScore.textContent = userScoreActive;
    compScore.textContent = compScoreActive;
}

function resetSelection() {
    choices.forEach(choice => choice.classList.remove('user-selected', 'comp-selected'));
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
    const compChoice = getRandomNumber;
    choices[compChoice].classList.add('comp-selected');
}

for (let choice of choices) {
    choice.addEventListener('click', () => {
        startTurn();
        choice.classList.add('user-selected');

        setTimeout(() => {
            const compChoiceValue = getRandomNumber();
            compChoice(compChoiceValue);

            const userChoice = choice.dataset.choice;

            if (compChoiceValue === 0 && userChoice === 'rock') {
                matchNul();
            } else if (compChoiceValue === 1 && userChoice === 'rock') {
                userLoses(); 
            } else if (compChoiceValue === 2 && userChoice === 'rock') {
                userWins();
            } else if (compChoiceValue === 0 && userChoice === 'paper') {
                userWins();
            } else if (compChoiceValue === 1 && userChoice === 'paper') {
                matchNul();
            } else if (compChoiceValue === 2 && userChoice === 'paper') {
                userLoses();
            } else if (compChoiceValue === 0 && userChoice === 'scissors') {
                userLoses();
            } else if (compChoiceValue === 1 && userChoice === 'scissors') {
                userWins();
            } else if (compChoiceValue === 2 && userChoice === 'scissors') {
                matchNul();
            }
            
            endTurn();
        }, 1000);
    });
};
