function computerPlay() {
    const computerChoice = ["rock","paper","scissors"];
    num = Math.floor(Math.random() * 3);
    return computerChoice[num];
}
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
function game(usrInput) {
    playRound(usrInput,computerPlay())
    div.innerHTML = `Your Score = ${playerScore}   PC Score = ${computerScore}`;
    if (playerScore === 3 || computerScore === 3) {
        if (playerScore > computerScore) {
            h1.innerHTML = "GAME FINISHED!!! YOU WON"
            playerScore = 0;
            computerScore = 0;
        }
        else if (playerScore < computerScore){
            console.log("GAME FINISHED!!! YOU LOST");
            playerScore = 0;
            computerScore = 0;
        }
        else {
            console.log("GAME FINISHED!!! ITS A TIE");
            playerScore = 0;
            computerScore = 0;
        }
        }
    }
    if (playerScore === 0 && computerScore ===0) {
        h1.innerHTML = "playing";
    }












var playerScore = 0;
var computerScore = 0;
const btnRock = document.getElementById("btnRock");
const btnPaper = document.getElementById("btnPaper");
const btnScissors = document.getElementById("btnScissors");
const body = document.querySelector('body');
const h1 = document.createElement('h1')
const div = document.createElement('div')
h1.innerHTML = "playing"

body.appendChild(div);
body.appendChild(h1)


btnRock.addEventListener('click',function () {
    game("rock")
})
btnPaper.addEventListener('click',function () {
    game("paper")
})
btnScissors.addEventListener('click',function () {
    game("scissors")
})
