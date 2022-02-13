function computerPlay(comPlay) {
    comPlay = Math.round(Math.random() * 2) + 1;
    if (comPlay == 3) {
        comPlay = "Rock"
    } else if (comPlay == 2) {
        comPlay = "Paper"
    } else {
        comPlay = "Scissor"
    }

}

// Write a function that takes user input

function userPlay(userInp) {
    userInp = prompt("Choose Rock, Paper or Scissor").toLowerCase();
    console.log(userInp);
}

// computerPlay();
// userPlay();
