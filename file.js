function computerPlay(comPlay) {
    comPlay = Math.round(Math.random() * 2) + 1;
    if (comPlay == 3) {
        comPlay = "Rock"
    } else if (comPlay == 2) {
        comPlay = "Paper"
    } else {
        comPlay = "Scissors"
    }

    console.log(comPlay);
}

computerPlay();
