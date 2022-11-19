var number;
var choice;
var num;
var h = 0; //Human choice
var result;
var c = 0; //Computer choice

//We want it to return 'Rock', 'Paper' or 'Scissors'

function getComputerChoice () {
    x = Math.floor(Math.random() * 3);
    //function returns Rock Paper or Scissors
    if (x === 0) {
        choice = 'rock'; 
    }
    if (x === 1) {
        choice = 'paper';
    }
    else if (x === 2) {
        choice = 'scissors';
    }
    return choice;
}

function setComputerSelection () {
var computerSelection = getComputerChoice();
console.log(`Computer chose ${computerSelection}`);
return computerSelection;
}

function getUserChoice () {
var userChoice = prompt("What is your choice?");
const playerSelection = userChoice.toLowerCase();
console.log(`Player chose ${playerSelection}`);
return playerSelection;
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection == 'rock' && computerSelection == 'paper') ||
        (playerSelection == 'scissors' && computerSelection == 'rock') ||
        (playerSelection == 'paper' && computerSelection == 'scissors')) {
            result = `You Lose! ${computerSelection} beats ${playerSelection}`;
            c++;
            console.log(result);
            console.log(c);
        }
    else if ((playerSelection == 'paper' && computerSelection == 'rock') ||
       (playerSelection == 'rock' && computerSelection == 'scissors') ||
       (playerSelection == 'scissors' && computerSelection == 'paper')) {
             result = `You Lose! ${playerSelection} beats ${computerSelection}`;
            h++;
            console.log(result);
            console.log(h);
        }
    else if (playerSelection === computerSelection){
            console.log("It's a tie!"); //Eventually take this out
        }
}

function game(){
    for (let i = 0; i<5; i++) {
        var newComputerSelection = setComputerSelection();
        var newUserChoice = getUserChoice();
        playRound(newUserChoice,newComputerSelection);        
    }

    if (c > h) {    
        console.log("Computer wins")
    }
    else if (c < h) {
        console.log("Human wins");
    }
    else {
        console.log ("Guess it's a Tie");
    }
}

game();