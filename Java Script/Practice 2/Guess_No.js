let userInput = 0;
while (!userInput) {
    userInput = parseInt(prompt("Enter The Number Upto You Can Guess The Number!"));
}

let randomIntegerForGuess = Math.floor(Math.random() * userInput) + 1;
console.log(randomIntegerForGuess);

let noOfTurns = 1;
let GuessedNumber = prompt("Enter The Number");

while (+GuessedNumber !== randomIntegerForGuess) {
    if (GuessedNumber === "quit") {
        break;
    }
    noOfTurns++;
    if (GuessedNumber > randomIntegerForGuess) {
        GuessedNumber = prompt("Number Too High!");
    }
    else {
        GuessedNumber = prompt("Number Too Low!");
    }
}
if (+GuessedNumber === randomIntegerForGuess)
    alert(`You Got The Number In ${noOfTurns} Turns!`)
else {
    alert("Game Exited");
}