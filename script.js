function getComputerChoice() {
    let comThrow = Math.floor(Math.random() * 3);
    if (comThrow == 0) {
        return "rock";
    } else if (comThrow == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function oneGame(playerThrow) {
    let player = playerThrow.toLowerCase();
    let com = getComputerChoice();

    console.log (player, com);

    if (player == "rock") {
        if (com == "rock") {
            return "Tie";
        } else if (com == "paper") {
            return "Lose";
        } else if (com == "scissors") {
            return "Win";
        }
    } else if (player == "paper") {
        if (com == "rock") {
            return "Win";
        } else if (com == "paper") {
            return "Tie";
        } else if (com == "scissors") {
            return "Lose";
        }
    } else if (player == "scissors") {
        if (com == "rock") {
            return "Lose";
        } else if (com == "paper") {
            return "Win";
        } else if (com == "scissors") {
            return "Tie";
        }
    }
}