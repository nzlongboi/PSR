function getComputerChoice() {
    var randomResult = (Math.floor(Math.random() *3) +1);
    var computerChoice;
    const displayComputerChoice = document.getElementById('displayComputerChoice');
switch (randomResult) {
    case 1:
        computerChoice = 'paper';
        displayComputerChoice.innerHTML = 'paper';
        break;
    case 2:
        computerChoice = 'scissors';
        displayComputerChoice.innerHTML = 'scissors';
        break;
    case 3:
        computerChoice = 'rock';
        displayComputerChoice.innerHTML = 'rock';
        break;
    default: 
        computerChoice = 'Unknown';
        break;
}
return computerChoice;
}  

const playerInput = document.getElementById('playerInput');
const submitButton = document.querySelector('submitButton');
submitButton.addEventListener('click', playGame);

function playGame() {
const playGameResult = document.getElementById('playGameResult');
const computerChoice = getComputerChoice();
const playerChoice = playerInput.value;

if (playerChoice === computerChoice) {
    playGameResult.innerHTML = 'Its a tie!';
} else if (
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper') ||
    (playerChoice === 'rock' && computerChoice === 'scissors')) { 
     playGameResult.innerHTML = 'You Win!!!';
} else { 
    playGameResult.innerHTML = 'You Lose!!!';
}
    
} 

