let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random()*10);

const compareGuesses = (hum,com,trg) => {
    if (Math.abs(hum-trg) <= Math.abs(com-trg)) {
        return true;
    } else {
        return false;
    }
}

const alert = hum => {
    if (hum>=0 && hum<=9) {
        return true;
    } else {
        window.alert('The number must be between 0 and 9');
        return false;
    }
}

const updateScore = winner => winner === 'human' ? humanScore++ : computerScore++;

const advanceRound = () => currentRoundNumber++;

