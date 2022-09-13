
//Global Variables
const beginPromptContainer = document.querySelector('#beginPrompt');
    const beginPrompt = document.createElement('p');
        beginPrompt.textContent = 'Care to play a game?';
        beginPromptContainer.appendChild(beginPrompt);
    const yesButton = document.createElement('button');
        yesButton.classList.add('yesButton');
        yesButton.textContent = 'Yes!';
        beginPromptContainer.appendChild(yesButton);

    const roundResults = document.createElement('p');
        roundResults.classList.add('roundResults');
    const playAgain = document.createElement('div');
        playAgain.classList.add('playAgain');
    const playAgainButton = document.createElement('button');
    beginPromptContainer.appendChild(roundResults);
    beginPromptContainer.appendChild(playAgain);

const options = document.querySelectorAll('.option');


const scoreContainer = document.querySelector('#score');
    const userScoreDisplay = document.createElement('div');
    userScoreDisplay.style.cssText = 'display:flex; gap: 8px';
    scoreContainer.appendChild(userScoreDisplay);
        const userScoreString = document.createElement('p');
        const officialUserScoreDisplay = document.createElement('p');
        userScoreDisplay.appendChild(userScoreString);
        userScoreDisplay.appendChild(officialUserScoreDisplay);
        
    const compScoreDisplay = document.createElement('div');
    compScoreDisplay.style.cssText = 'display:flex; gap: 8px';
    scoreContainer.appendChild(compScoreDisplay);
        const compScoreString = document.createElement('p'); 
        const officialCompScoreDisplay = document.createElement('p');
        compScoreDisplay.appendChild(compScoreString);
        compScoreDisplay.appendChild(officialCompScoreDisplay);



playAgainButton.textContent = 'Play again?';
let compPickArray;
let officialUserScore = 0;
let officialCompScore = 0;
let roundResultsMessage;
const countdownArray = ['ROCK', 'PAPER', 'SCISSORS', 'SHOOT!'];
//Global Variables

//Functions
function startGame() {
    rpsCountdown(300);
    userScoreString.textContent = 'Your Score: ';
    compScoreString.textContent = 'My Score: ';
    options.forEach((option) => {
        option.addEventListener('click', (e) => {
            roundResults.textContent = '';
            let play = e.target.id;
            let officialCompChoice = getComputerChoice();
            if (officialUserScore < 5 && officialCompScore < 5) {
                let outcome = playRound(play, officialCompChoice);
                addPoint(outcome);
                if (officialUserScore > 4) {
                    rpsCountdown(250, roundResultsMessage, 'Congrats, you win!');
                    setTimeout(() => {
                    playAgain.appendChild(playAgainButton)
                    }, 2750);
                } else if (officialCompScore > 4) {
                    rpsCountdown(250, roundResultsMessage, 'HA HA, I win!');
                    setTimeout(() => {
                        playAgain.appendChild(playAgainButton)
                        }, 2750);
                } else {
                    rpsCountdown(200, roundResultsMessage);
                }
                setTimeout(() => { 
                officialUserScoreDisplay.textContent = `${officialUserScore}`;
                officialCompScoreDisplay.textContent = `${officialCompScore}`;
                }, 1000);
            };
        });
    });
}; 

function getComputerChoice() {
    let num = Math.floor(Math.random() * 9);
    if (num < 3) {
        return 'rock';
    } else if (num < 6) {
        return 'paper';
    } else {
        return 'scissors';
    }
};

function rpsCountdown(ms, message, message2) {
    if (countdownArray.length > 4) {
        if (countdownArray.length > 5) {
            countdownArray.pop();
        };
        countdownArray.pop();
    };
    if (message) {
        countdownArray.push(message);
        if (message2) {
            countdownArray.push(message2);
        };
    };
    for (let i = 0; i < countdownArray.length; i++) {
        let phrase = countdownArray[i];
        if (i > 4) {
            setTimeout(() => {
                roundResults.textContent = phrase;
            }, ((i + 1) * ms) + (ms * 4));
        } else {
        setTimeout(() => {
            roundResults.textContent = phrase;
        }, (i + 1) * ms);
        };
    };
};

function playRound(userPick, compPick) {
    if (compPick === userPick) {
        compPick = capitalizeFirstLetter(compPick);
        roundResultsMessage = `${compPick} and ${userPick}, we're so in sync!`
        return 'tie';
    } else if (compPick === 'rock' && userPick === 'paper') {
        roundResultsMessage = 'Ugh, my rock is absolutely useless under your paper.'
        return 'win';
    } else if (compPick === 'rock' && userPick === 'scissors') {
        roundResultsMessage = 'Your scissors are smashed by rock! You lose!'
        return 'lose';
    } else if (compPick === 'paper' && userPick === 'rock') {
        roundResultsMessage = 'Go to sleep little rock, you\'re covered by paper!';
        return 'lose';
    } else if (compPick === 'paper' && userPick === 'scissors') {
        roundResultsMessage = 'Snip, snip, snip, you\'re making snowflakes!'
        return 'win';
    } else if (compPick === 'scissors' && userPick === 'rock') {
        roundResultsMessage = 'You ruined a perfectly good pair of scissors!'
        return 'win';
    } else if (compPick === 'scissors' && userPick === 'paper') {
        roundResultsMessage = 'I brought the "good" scissors today, bitch!'
        return 'lose';
    };
};

function addPoint(result) {
    if (result === 'win') {
        officialUserScore += 1;
    } else if (result === 'lose') {
        officialCompScore += 1;
    } else if (result === 'tie') {
        return;
    }
};

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
//Functions

//EventListeners
options.forEach ((option) => {
        option.addEventListener('click', () => {
        option.classList.add('clicked');
        setTimeout(() => option.classList.remove('clicked'),150);
    });
});

yesButton.addEventListener('click', () => {
    beginPromptContainer.removeChild(beginPrompt);
    beginPromptContainer.removeChild(yesButton);
    startGame();
});

playAgainButton.addEventListener('click', () => {
    rpsCountdown(300);
    roundResults.textContent = '';
    playAgain.removeChild(playAgainButton);
    officialUserScore = 0;
    officialCompScore = 0;
    officialUserScoreDisplay.textContent = `${officialUserScore}`;
    officialCompScoreDisplay.textContent = `${officialCompScore}`;    
});