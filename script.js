//Commit to GitHub
// Committing and adding a second time




const playerInput = document.getElementById('playerInput');



function getComputerChoice() {
    var randomResult = (Math.floor(Math.random() *3) +1);
    var computerChoice;

switch (randomResult) {
    case 1:
        computerChoice = 'Paper';
        break;
    case 2:
        computerChoice = 'Scissors';
        break;
    case 3:
        computerChoice = 'Rock';
        break;
    default: 
        computerChoice = 'Unknown';
        break;
}
return computerChoice;
}  

function playerVScomputer() {
const playerChoice = playerInput.value;
const computerChoice = getComputerChoice();

if (playerChoice === computerChoice) {
    alert('Its a tie');
} else if (
    (playerChoice === 'Paper' && computerChoice === 'Rock') ||
    (playerChoice === 'Scissors' && computerChoice === 'Paper') ||
    (playerChoice === 'Rock' && computerChoice === 'Scissors')
) {
    alert('You Win!!!');
} else {
    alert('You Lose!!!');
}
    
}

