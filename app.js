let computerScore = 0;
let humanScore = 0;
let finalScore = 0;
let humanChoice;
let computerChoice;

const btn = document.querySelector('#button');
const rck = document.querySelector('#rock');
const ppr = document.querySelector('#paper');
const scr = document.querySelector('#scissor');
const hum = document.querySelector('#human');
const comp = document.querySelector('#computer');
const result = document.querySelector('#result');

function computerPlay(comPlay) {
    comPlay = Math.round(Math.random() * 2) + 1;
    if (comPlay == 3) {
        comPlay = "rock"
    } else if (comPlay == 2) {
        comPlay = "paper"
    } else {
        comPlay = "scissor"
    }
    return comPlay;
}

btn.addEventListener ("click", (event) => {
    // let target = event.target;
    humanChoice = event.target.id;
    computerChoice = computerPlay();
    
    playRound(humanChoice, computerChoice);

    if (humanChoice == "rock") {
        hum.textContent = `You chose ${humanChoice}`;
        comp.textContent = `Computer chose ${computerChoice}`;
    } else if (humanChoice == "paper") {
        hum.textContent = `You chose ${humanChoice}`;
        comp.textContent = `Computer chose ${computerChoice}`;
    } else {
        hum.textContent = `You chose ${humanChoice}`;
        comp.textContent = `Computer chose ${computerChoice}`;
    }
});


function playRound(playerSelection, computerSelection) {
    if ((playerSelection === 'rock' && computerSelection === 'rock') || (playerSelection === 'paper' && computerSelection === 'paper') || (playerSelection === 'scissor' && computerSelection === 'scissor')) {
     result.textContent = `It is a tie. Your score is ${humanScore} and computer's score is ${computerScore}`;
} 

else if ((playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'scissor') || (playerSelection === 'scissor' && computerSelection === 'rock')) {
    computerScore++;
    result.textContent = `Oops! you lost this round. Your score is ${humanScore} and computer's score is ${computerScore}`;
} 

else if ((playerSelection === 'rock' && computerSelection === 'scissor') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissor' && computerSelection === 'paper')) {
     humanScore++;
     result.textContent = `Yay! you won this round. Your score is ${humanScore} and computer's score is ${computerScore}`;
 } 
 else {
     return ("Something went wrong");
 }

 

if (humanScore === 5)  {
        result.textContent = `Congratulations, you won the game
        
        Your score is ${humanScore} and Computer score is ${computerScore} \n`;
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        result.textContent = `Oops! You lose this game
        
        Your score is ${humanScore} and Computer score is ${computerScore}\n`;
        humanScore = 0;
        computerScore = 0;
    };
};






// read about the event and event.type
// Develop the habit of persistence and grit in yourself
// play to win, not to lose