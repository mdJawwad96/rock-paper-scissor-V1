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

function userPlay(userInp) {
    userInp = prompt("Choose Rock, Paper or Scissor").toLowerCase();
    return userInp;
}

let userScore = 0;
let computerScore = 0;

let start;
function game(start) {
     for (start = 0; start < 5; start++) {
         let playerSelection = userPlay();
         let computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
     }
        if (userScore > computerScore) {
            console.log('Congratulations, You win the game')
            console.log('Your total score is ' + userScore)
            console.log('Computer\'s score is ' + computerScore)
        } else if (computerScore > userScore) {
            console.log('Unfortunately, You lose this time');
            console.log('Your total score is ' + userScore)
            console.log('Computer\'s score is ' + computerScore)
        } else {
            console.log('I think it is a tie, play again to win')
        }
     return start
 }   

 console.log(game(start));

   function playRound(playerSelection, computerSelection) {
       if (playerSelection === 'rock' && computerSelection === 'rock') {
        console.log("Hmm, it is a tie - you both selected rock");
        console.log('You score is '+ userScore);
        console.log('Computer\'s score is ' + computerScore);
   } else if (playerSelection === 'rock' && computerSelection === 'paper') {
       computerScore++;
       console.log("Oops, You lose - paper beat the rock");
       console.log('You score is '+ userScore);
       console.log('Computer\'s score is ' + computerScore);
    } else if (playerSelection === 'rock' && computerSelection === 'scissor') {
        userScore++;
        console.log("Yay! you win - rock beat the scissor");
        console.log('You score is '+ userScore);
        console.log('Computer\'s score is ' + computerScore);
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        userScore++;
        console.log("Yay! you win - paper beat the rock");
        console.log('You score is '+ userScore);
        console.log('Computer\'s score is ' + computerScore);
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        console.log("Hmm, it is a tie - you both selected paper");
        console.log('You score is '+ userScore);
        console.log('Computer\'s score is ' + computerScore);
     } else if (playerSelection === 'paper' && computerSelection === 'scissor') {
        computerScore++;
        console.log("Oops, you lose - scissor beat the paper");
        console.log('You score is '+ userScore);
       console.log('Computer\'s score is ' + computerScore);
     } else if (playerSelection === 'scissor' && computerSelection === 'rock') {
        computerScore++;
        console.log("Oops, you lose - rock beat the scissor");
        console.log('You score is '+ userScore);
        console.log('Computer\'s score is ' + computerScore);
    } else if (playerSelection === 'scissor' && computerSelection === 'paper') {
        userScore++;
        console.log("Yay! scissor beat the paper");
        console.log('You score is '+ userScore);
        console.log('Computer\'s score is ' + computerScore);
     } else if (playerSelection === 'scissor' && computerSelection === 'scissor') {
        console.log("Hmm, it is a tie - you both selected the scissor");
        console.log('You score is '+ userScore);
        console.log('Computer\'s score is ' + computerScore);
     }
    else {
        return ("Something went wrong");
    }
}

   let playerSelection = userPlay();
   let computerSelection = computerPlay();