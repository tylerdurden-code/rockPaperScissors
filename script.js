function computerPlay() {
    const computerChoice = ["rock","paper","scissors"];
    num = Math.floor(Math.random() * 3);
    return computerChoice[num];
}
function playRound(p,c) {
    if (p === c) {
        h3.innerHTML = "Its a tie";
        computerScore += 1;
        playerScore += 1
    }
    else if (p === "rock" && c === "paper") {
        h3.innerHTML =  "You lost! Paper wins Rock!";
        computerScore += 1;
    }
    else if (p === "rock" && c === "scissors") {
        h3.innerHTML =  "You won! Rock beats Scissors";
        playerScore += 1;
    }
    else if (p === "paper" && c === "rock") {
        h3.innerHTML =  "You won! Paper beats Rock";
        playerScore += 1;
    }
    else if (p === "paper" && c ==="scissors") {
        h3.innerHTML = "You lost! Paper loses to Scissors";
        computerScore += 1;
    }
    else if (p === "scissors" && c === "rock") {
        h3.innerHTML = "You lost! Scissors loses to Rock";
        computerScore += 1;
    }
    else if (p === "scissors" && c === "paper") {
        h3.innerHTML = "You won! Scissors beats paper";
        playerScore += 1;
    }
}
function game(usrInput) {
    h1.innerHTML = "Playing....";
    playRound(usrInput,computerPlay())
    div.innerHTML = `Your Score = ${playerScore}   PC Score = ${computerScore}`;   
    if (playerScore === 3 || computerScore === 3) {
        if (playerScore > computerScore) {
            h1.innerHTML = "GAME FINISHED!!! YOU WON"
            playerScore = 0;
            computerScore = 0;
            generalPlayerScore++;
        }
        else if (playerScore < computerScore){
            h1.innerHTML = "GAME FINISHED!!! YOU LOST";
            playerScore = 0;
            computerScore = 0;
            generalComputerScore++;
        }
        else {
            h1.innerHTML = "GAME FINISHED!!! ITS A TIE";
            playerScore = 0;
            computerScore = 0;
            generalPlayerScore++;
            generalPlayerScore++;
        
        }
    }
    h1_0.innerHTML = `Your total score = ${generalPlayerScore} <br> PC total score = ${generalComputerScore}`;
}












var playerScore = 0;
var computerScore = 0;
var generalPlayerScore = 0;
var generalComputerScore = 0;
const btnRock = document.getElementById("btnRock");
const btnPaper = document.getElementById("btnPaper");
const btnScissors = document.getElementById("btnScissors");
const body = document.querySelector('body');
const h3 = document.createElement('h3')
const h1 = document.createElement('h1')
const div = document.createElement('div')
const h1_0 = document.createElement('h1')
h1.innerHTML = "playing"

body.appendChild(div);
body.appendChild(h3);
body.appendChild(h1);
body.appendChild(h1_0);


btnRock.addEventListener('click',function () {
    game("rock")
})
btnPaper.addEventListener('click',function () {
    game("paper")
})
btnScissors.addEventListener('click',function () {
    game("scissors")
})
