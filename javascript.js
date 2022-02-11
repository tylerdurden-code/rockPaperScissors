function computerPlay() {
    const computerChoice = ["rock","paper","scissors"];
    num = Math.floor(Math.random() * 3);
    return computerChoice[num];
}
function playerSelection() {
    let rightChoice = false;
    while (rightChoice === false){
        playerChoice = window.prompt("Choose (1 for Rock) (2 for Paper) (3 for Scissors)");
        playerChoice = parseInt(playerChoice);
        if (playerChoice === 1) {
            rightChoice = true;
            return "rock"  
        }
        else if (playerChoice === 2) {
            return "paper"
            rightChoice = true;
        }
        else if (playerChoice === 3) {
            return "scissors"
            rightChoice = true;
        }
        else {
            alert("Pick Again")
        }
    }
}


