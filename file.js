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

computerPlay();
// Write a function that takes user input

function userPlay(userInp) {
    userInp = prompt("Choose Rock, Paper or Scissor").toLowerCase();
    return userInp;
}

// create a function that compare uservalue with computer value and return the result;
   function playRound(playerSelection, computerSelection) {
       if (playerSelection === 'rock' && computerSelection === 'rock') {
        return "Hmm, it is a tie - you both selected rock";
   } else if (playerSelection === 'rock' && computerSelection === 'paper') {
       computerScore++;
       return "Oops, You lose - paper beat the rock";
    } else if (playerSelection === 'rock' && computerSelection === 'scissor') {
        userScore++;
        return "Yay! you win - rock beat the scissor";
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        userScore++;
        return "Yay! you win - paper beat the rock";
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return "Hmm, it is a tie - you both selected paper";
     } else if (playerSelection === 'paper' && computerSelection === 'scissor') {
        computerScore++;
         return "Oops, you lose - scissor beat the paper";
     } else if (playerSelection === 'scissor' && computerSelection === 'rock') {
        computerScore++;
        return "Oops, you lose - rock beat the scissor";
    } else if (playerSelection === 'scissor' && computerSelection === 'paper') {
        userScore++;
        return "Yay! scissor beat the paper";
     } else if (playerSelection === 'scissor' && computerSelection === 'scissor') {
         return "Hmm, it is a tie - you both selected the scissor";
     }
    else {
        return "Something went wrong";
    }
}
    let userScore = 0;
    let computerScore = 0;
   let playerSelection = userPlay();
   let computerSelection = computerPlay();

   console.log(playRound(playerSelection, computerSelection));
   
   // write a function which consist a loop and add score and in the end it shows the result
