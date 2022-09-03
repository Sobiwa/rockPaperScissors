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
    console.log(num);
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
let playerWin;

function playRound(userPick, compPick) {
    userPick = userPick.toLowerCase();
    if (compPick === userPick) {
        return 'it\'s a tie!';
    }
    else if (compPick === 'rock' && userPick === 'paper') {
        let playerWin = true;
        return 'Paper covers rock! You win!';
    }
    else if (compPick === 'rock' && userPick === 'scissors') {
        let playerWin = false;
        return 'Your scissors are smashed by rock! You lose!';
    }
    else if (compPick === 'paper' && userPick === 'rock') {
        let playerWin = false;
        return 'Go to sleep little rock, you\'re covered by paper!';
    }
    else if (compPick === 'paper' && userPick === 'scissors') {
        let playerWin = true;
        return 'Snip, snip, snip, you\'re making snowflakes!';
    }
    else if (compPick === 'scissors' && userPick === 'rock') {
        let playerWin = true;
        return 'You ruined a perfectly good pair of scissors';
    }
    else if (compPick === 'scissors' && userPick === 'paper') {
        let playerWin = false;
        return 'I brought the "good" scissors today, bitch!';
    }
    else {
        return 'does not compute';
    }
}

let userPick = 'rock';
function game() {
    let compScore = 0;
    let userScore = 0;
    for (let i = 0; i < 5; i++) {
        let userPick = prompt('Rock, paper, scissors, and shoot!', '');
        compPick = getComputerChoice();
        result = playRound(userPick,compPick);
        if (playerWin) {
            userScore += 1;
        }
        else if (!playerWin) {
            compScore += 1;
        }
        else {
            return
        }
        alert(`Computer score: ${compScore} \n User score: ${userScore}`)
        console.log(`Computer score: ${compScore} \n User score: ${userScore}`);
    }
    if (compScore > userScore) {
        return `Not your day! My score: ${compScore} Your score: ${userScore}`;
    }
    else {
        return `You got lucky... My score: ${compScore} Your score: ${userScore}`
    }
}

