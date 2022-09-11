// retrieve input from user
// generate random computer choice
// determine who wins
// return 'Paper covers rock! You win!';
// 'Your scissors are smashed by rock! You lose!'
// 'Go to sleep little rock, you\'re covered by paper!'
// 'Snip, snip, snip, you\'re making snowflakes!'
// 'You ruined a perfectly good pair of scissors'
// 'I brought the "good" scissors today, bitch!'


function getComputerChoice() {
    let num = Math.floor(Math.random()*9);
     if (num < 3) {
        return 'rock';
     }
    else if (num < 6) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}

function remove() {
    option.classList.remove('clicked');
}

const beginPromptContainer = document.querySelector('#beginPrompt');
beginPromptContainer.style.cssText = 'display: flex; gap: 8px; padding: 0px 0px 100px 0px'
const beginPrompt = document.createElement('p');
beginPrompt.textContent = 'Care to play a game?';
beginPromptContainer.appendChild(beginPrompt);

const scoreContainer = document.querySelector('#score');

function createScoreboard(){    
    const userScoreDisplay = document.createElement('div');
    userScoreDisplay.style.cssText = 'display:flex; flex-direction: column; gap: 8px';
    scoreContainer.appendChild(userScoreDisplay);
        const userScoreString = document.createElement('p');
        userScoreString.textContent = 'Your Score: ';
        const userScoreValue = document.createElement('p');
        userScoreValue.textContent = `${userScore}`;
        userScoreDisplay.appendChild(userScoreString);
        userScoreDisplay.appendChild(userScoreValue);
        
    const compScoreDisplay = document.createElement('div');
    compScoreDisplay.style.cssText = 'display:flex; gap: 8px';
    scoreContainer.appendChild(compScoreDisplay);
        const compScoreString = document.createElement('p');
        compScoreString.textContent = 'My Score: ';
        const compScoreValue = document.createElement('p');
        compScoreValue.textContent = `${compScore}`;
        compScoreDisplay.appendChild(userScoreString);
        compScoreDisplay.appendChild(userScoreValue);
};

const yesButton = document.createElement('button');
yesButton.classList.add('yesButton');
yesButton.textContent = 'Yes!';
beginPromptContainer.appendChild(yesButton);

const rockPhrase = document.createElement('p');
rockPhrase.classList.add('countdown');
rockPhrase.textContent = 'ROCK';

const paperPhrase = document.createElement('p');
paperPhrase.classList.add('countdown');
paperPhrase.textContent = 'PAPER';

const scissorsPhrase = document.createElement('p');
scissorsPhrase.classList.add('countdown');
scissorsPhrase.textContent = 'SCISSORS';

const shootPhrase = document.createElement('p');
shootPhrase.classList.add('countdown');
shootPhrase.textContent = 'SHOOT!';

const countdownArray = [rockPhrase, paperPhrase, scissorsPhrase, shootPhrase];

function rpsCountdown() {
    for (let i = 0; i < countdownArray.length ; i++) {
        let phrase = countdownArray[i];
        console.log(phrase);
        setTimeout(() => {
               beginPromptContainer.appendChild(phrase)
        }, (i + 1) * 500);
        setTimeout(() => {
            beginPromptContainer.removeChild(phrase)
        }, (i + 2) * 500);
    };
};

yesButton.addEventListener('click', () => {
    beginPromptContainer.removeChild(beginPrompt);
    beginPromptContainer.removeChild(yesButton);
    rpsCountdown();


});

// psuedo code 
// player clicks yes
// begins game
// displays score
// player clicks an option
// plays round
// first player to 5 wins


const options = document.querySelectorAll('.option');
console.log(options);
options.forEach ((option) => {
    option.addEventListener('click', () => {
        console.log(option.id);
        option.classList.add('clicked');
        setTimeout(() => option.classList.remove('clicked'),150);
    });
});

function playRound(userPick, compPick) {
    if (userPick === null) {
        alert('you scared?')
        return 'null';
    }
    else {
        userPick = userPick.toLowerCase();
        if (compPick === userPick) {
            return 'tie';
        }
        else if (compPick === 'rock' && userPick === 'paper') {
            return 'win';
        }
        else if (compPick === 'rock' && userPick === 'scissors') {
            return 'lose';
        }
        else if (compPick === 'paper' && userPick === 'rock') {
            return 'lose';
        }
        else if (compPick === 'paper' && userPick === 'scissors') {
            return 'win';
        }
        else if (compPick === 'scissors' && userPick === 'rock') {
            return 'win';
        }
        else if (compPick === 'scissors' && userPick === 'paper') {
            return 'lose';
        }
        else {
            return 'empty';
        }
    }
}

let userPick = 'rock';
function game() {
    let compScore = 0;
    let userScore = 0;
    for (let i = 0; i < 5; i++) {
        let userPick = prompt('Rock, paper, scissors, and shoot!', '');
        compPick = getComputerChoice();
        let result = playRound(userPick,compPick);
        console.log(result);
        if (result === 'win') {
            userScore += 1;
            alert(`You played ${userPick}, I played ${compPick}. You win. Let's go ${4-i} more`);
        }
        else if (result === 'lose') {
            compScore += 1;
            alert(`You played ${userPick}, I played ${compPick}. You lose. Let's go ${4-i} more`);
        }
        else if (result === 'tie') {
            alert('tie!');
        }
        else if (result == 'null') {
            return
        }
        else {
            i = --i;
            alert('Play fair!');
        }
        alert(`Computer score: ${compScore} \nUser score: ${userScore}`)
        console.log(`Computer played ${compPick} \nUser played ${userPick}`);
        console.log(`Computer score: ${compScore} \nUser score: ${userScore}`);
        console.log('next round...');
    }
    if (compScore > userScore) {
        alert(`Not your day! My score: ${compScore} Your score: ${userScore}`);
        return `Not your day! My score: ${compScore} Your score: ${userScore}`;
    }
    else if (compScore <userScore) {
        alert(`You got lucky... My score: ${compScore} Your score: ${userScore}`);
        return `You got lucky... My score: ${compScore} Your score: ${userScore}`;
    }
    else {
        alert(`It's a tie! What a wast of time. My score: ${compScore} Your score: ${userScore}`);
        return `It's a tie! What a wast of time. My score: ${compScore} Your score: ${userScore}`;
    }  
}
