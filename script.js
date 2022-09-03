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


