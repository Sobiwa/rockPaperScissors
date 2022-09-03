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
        let result = playRound(userPick,compPick);
        console.log(result);
        if (result === 'win') {
            userScore += 1;
            alert(`You played ${userPick}, I played ${compPick}. You win. Let's go ${4-i} more`);
        }
        else if (result === 'lose') {
            compScore += 1;
            alert(`You played ${userPick}, I played ${compPick}. You lose Let's go ${4-i} more`);
        }
        else if (result === 'tie') {
            alert('tie!');
        }
        alert(`Computer score: ${compScore} \n User score: ${userScore}`)
        console.log(`Computer score: ${compScore} \n User score: ${userScore}`);
    }
    if (compScore > userScore) {
        return `Not your day! My score: ${compScore} Your score: ${userScore}`;
    }
    else {
        return `You got lucky... My score: ${compScore} Your score: ${userScore}`;
    }
}


