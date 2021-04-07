'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(`Secret number is ${secretNumber}. And it's datatype is ${typeof secretNumber}`);

let scoreVariable = 10;
let highScoreVariable = 0;

function toCheckWhetherTheGuessIsRight() {
    const numberGuessedByUser = Number(document.querySelector('.guess').value);

    if (numberGuessedByUser === 0) {
        document.querySelector('.message').textContent = "Enter a non-zero number you fool";
        document.querySelector(".message").style.color = "red";
        scoreVariable = scoreVariable - 1;
        document.querySelector('.score').textContent = scoreVariable;
    }

    else if (numberGuessedByUser === secretNumber) {
        document.querySelector('.message').textContent = "Congratulations. . . . . You win!";
        document.querySelector('.message').style.color = "green";
        document.querySelector(".number").textContent = secretNumber;
        alert(`You win`);
        highScoreVariable = scoreVariable
        document.querySelector('.highscore').textContent = highScoreVariable
    }

    else if (Math.abs(numberGuessedByUser - secretNumber) <= 3) {
        document.querySelector('.message').textContent =
            "Your guess was wrong. . . . . But you are very close to guessing it right";
        document.querySelector(".message").style.color = "orange";
        scoreVariable = scoreVariable - 1;
        document.querySelector('.score').textContent = scoreVariable;
    }

    else {
        document.querySelector('.message').textContent =
            `The number you guessed is nowhere close to the secret number`;
        document.querySelector('.message').style.color = "cyan";
        scoreVariable = scoreVariable - 1;
        document.querySelector('.score').textContent = scoreVariable;
    }

    if (scoreVariable === 0) {
        document.querySelector('.message').textContent = `You lose`;
        document.querySelector("body").style.backgroundColor = "red";
        document.querySelector(".number").textContent = secretNumber;
        alert(`You lose`);
    }
}

function playAgain() {
    alert(`Are you sure that you want to begin again?`)
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(`Secret number is ${secretNumber}. And it's datatype is ${typeof secretNumber}`);
    scoreVariable = 10;
    document.querySelector('.message').textContent = `Start guessing. . . `;
    document.querySelector("body").style.color = "white";
    document.querySelector(".number").textContent = '?';
    document.querySelector('.guess').value = ''
    document.querySelector('.score').textContent = scoreVariable;
    document.querySelector('.highscore').textContent = highScoreVariable;
}



document.querySelector('.check').addEventListener('click', toCheckWhetherTheGuessIsRight)

document.querySelector(".again").addEventListener('click', playAgain)