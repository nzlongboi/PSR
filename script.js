const tallycount = document.getElementById('tally');
const playerData = document.getElementById('playerInput');
const submitButton = document.querySelector('button.submitButton');
const roundCountElement = document.getElementById('roundCount');
let playerWins = 0;
let computerWins = 0;
let roundsPlayed = 0;
submitButton.addEventListener('click', playGame);
// declare and initialise variables and cosntants
//variables nmaed, numbers are their data type and their starting values are 0


function getComputerChoice() {
    var randomResult = (Math.floor(Math.random() *3) +1);
    var computerChoice;
    const displayComputerChoice = document.getElementById('displayComputerChoice');
switch (randomResult) {
    case 1:
        computerChoice = 'Paper';
        displayComputerChoice.innerHTML = 'Paper';
        break;
    case 2:
        computerChoice = 'Scissors';
        displayComputerChoice.innerHTML = 'Scissors';
        break;
    case 3:
        computerChoice = 'Rock';
        displayComputerChoice.innerHTML = 'Rock';
        break;
    default: 
        computerChoice = 'Unknown';
        break;
}
return computerChoice;
}  
// I used math.floor(math.random()) to generate a random number between three 
// and then switch statements to assign a string to each number


function playGame() {
const playGameResult = document.getElementById('playGameResult');
const computerChoice = getComputerChoice();
const playerChoice = playerData.value;

if (playerChoice === computerChoice) {
    playGameResult.innerHTML = 'This round is a tie';
} else if (
    (playerChoice === 'Paper' && computerChoice === 'Rock') ||
    (playerChoice === 'Scissors' && computerChoice === 'Paper') ||
    (playerChoice === 'Rock' && computerChoice === 'Scissors')) { 
    playGameResult.innerHTML = `You win! ${playerChoice} beats ${computerChoice}!`;
    playerWins++;
} else { 
    playGameResult.innerHTML = `You Lose! ${computerChoice} beats ${playerChoice}!`;
    computerWins++;
}
    


roundsPlayed++;

if (roundsPlayed === 5) {
    if (playerWins > computerWins) {
        tallycount.innerHTML = 'You win the game!';
    } else if (computerWins > playerWins) {
        tallycount.innerHTML = 'You lose :(';
    } else {
        tallycount.innerHTML = 'It\s a tie;'
    }

    playerWins = 0;
    computerWins = 0;
    roundsPlayed = 0;
    submitButton.removeEventListener('click, playRound');
}
roundCountElement.innerHTML = `Round: ${roundsPlayed}`;

}

