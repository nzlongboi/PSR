const tallycount = document.getElementById('tally');
const roundCountElement = document.getElementById('roundCount'); 
let playerWins = 0;
let computerWins = 0;
let roundsPlayed = 0;
// declare and initialise variables and cosntants
//variables nmaed, numbers are their data type and their starting values are 0







const Paper = document.getElementById('Paper');
const Scissors = document.getElementById('Scissors');
const Rock = document.getElementById('Rock');
//linking HTML PSR buttons to the JS file
Paper.addEventListener('click', playRound);
Scissors.addEventListener('click', playRound);
Rock.addEventListener('click', playRound);
//adding event listeners to each button that call the playRound function when the button is clicked



function getComputerChoice() { //this works just fine, lets keep this
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


function announceWinner () {
    if (playerWins === 5) {
        alert('Congrats! You are the winner!');
    } else if (computerWins === 5) {
        alert('Computer wins! Better luck next time.');
    }
}



function playRound(event) { 
const playGameResult = document.getElementById('playGameResult');
const computerChoice = getComputerChoice();
const playerChoice = event.target.id; //ensuring the HTML buttons and JS file are linked
// Here, we are getting the id of the button that was clicked, which helps us
// determine the players choice
// An event object is generated on click and passed to playRound, our
// Event Handler Function. 
// We include the parameter (event) in our function so that it expects and 
// knows to use this object


if (playerChoice === computerChoice) {
    playGameResult.innerHTML = 'This round is a tie';
} else if (
    (playerChoice === 'Paper' && computerChoice === 'Rock') ||
    (playerChoice === 'Scissors' && computerChoice === 'Paper') ||
    (playerChoice === 'Rock' && computerChoice === 'Scissors') 
   ) { 
    playGameResult.innerHTML = `You win! ${playerChoice} beats ${computerChoice}!`;
    playerWins++;
} else if ( 
    (playerChoice === 'Paper' && computerChoice === 'Scissors') ||
    (playerChoice === 'Scissors' && computerChoice === 'Rock') ||
    (playerChoice === 'Rock' && computerChoice === 'Paper') 
    ) {
    playGameResult.innerHTML = `You Lose! ${computerChoice} beats ${playerChoice}!`;
    computerWins++;
} else {
    playGameResult.innerHTML = "Invalid Choice";
}
    roundsPlayed++;
    tallycount.textContent = `Player Wins: ${playerWins} | Computer Wins: ${computerWins}` 
    roundCountElement.textContent = `Rounds Played: ${roundsPlayed}`;

    announceWinner();
}
//Added 'invalid choice' for cases that cannot be handled. 
//Added Player Lose conditions. Helped to clear up the logic and handle cases properly without errors.


