function computerPlay() {
    const computerChoice = ["rock","paper","scissors"];
    num = Math.floor(Math.random() * 3);
    return computerChoice[num];
}
// function playerSelection() {
//     let rightChoice = false;
//     while (rightChoice === false) {
//         playerChoice = prompt("Choose (1 for Rock) (2 for Paper) (3 for Scissors)");
//         playerChoice = parseInt(playerChoice);
//         if (playerChoice === 1) {
//             rightChoice = true;
//             return "rock"  
//         }
//         else if (playerChoice === 2) {
//             return "paper"
//             rightChoice = true;
//         }
//         else if (playerChoice === 3) {
//             return "scissors"
//             rightChoice = true;
//         }
//         else {
//             console.log("Pick Again")
//             break;
//         }
//     }
    
// }

function playRound(p,c) {
    if (p === c) {
        console.log("Its a tie");
        computerScore += 1;
        playerScore += 1
    }
    else if (p === "rock" && c === "paper") {
        console.log("You lost! Paper wins Rock!");
        computerScore += 1;
    }
    else if (p === "rock" && c === "scissors") {
        console.log("You won! Rock beats Scissors");
        playerScore += 1;
    }
    else if (p === "paper" && c === "rock") {
        console.log("You won! Paper beats Rock");
        playerScore += 1;
    }
    else if (p === "paper" && c ==="scissors") {
        console.log("You lost! Paper loses to Scissors");
        computerScore += 1;
    }
    else if (p === "scissors" && c === "rock") {
        console.log("You lost! Scissors loses to Rock");
        computerScore += 1;
    }
    else if (p === "scissors" && c === "paper") {
        console.log("You won! Scissors beats paper");
        playerScore += 1;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        if (playerScore === 3 || computerScore === 3) {
            break;
        }
        let p = playerSelection();
        let c = computerPlay()
        playRound(p,c);
    }
    console.log(playerScore,computerScore)
}

var playerScore = 0;
var computerScore = 0;
// game();
// if (playerScore === computerScore) {
//     console.log("Game finished. ITS A TIE!");
// }
// else if (playerScore > computerScore) {
//     console.log("Game finished. YOU WON!");
// }
// else {
//     console.log("Game finished. YOU LOST");
// }


function playerSelection() {
    const btnRock = document.getElementById("btnRock");
    const btnPaper = document.getElementById("btnPaper");
    const btnScissors = document.getElementById("btnScissors");

    btnRock.addEventListener('click',function () {
        playRound("rock",computerPlay())
    })
    btnPaper.addEventListener('click',function () {
        playRound("paper",computerPlay())
    })
    btnScissors.addEventListener('click',function () {
        playRound("scissors",computerPlay())
    })
}