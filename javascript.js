function computerPlay() {
    const computerChoice = ["rock","paper","scissors"];
    num = Math.floor(Math.random() * 3);
    return computerChoice[num];
}
console.log(computerPlay());