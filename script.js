function getComputerChoice() {
    let comThrow = Math.floor(Math.random() * 3);
    if (comThrow == 0) {
        return "Rock";
    } else if (comThrow == 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function oneGame(playerThrow) {
    
}