/* initilize readline interface, creates input and output */
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/* global variable for secrectNumber and numAttempts. */
let secretNumber = 0
let numAttempts = 0

/* calls askLimit to start the game */
askLimit()

/* asks user to enter max amount of attempts to guess the number, then calls the askRange function */
const askLimit = () => {
    rl.question('Enter max amount of attempts: ', (num) => {
        numAttempts = Number(num)
        askRange()
    });
}

/* asks user to enter a min/max num, confirms users num range, logs numberOfAttempts left, and calls askGuess() */
const askRange = () => {
    rl.question('Enter a min number: ', (answerMin) => {
        rl.question('Enter a max number: ', (answerMax) => {
            console.log('**************************')
            console.log(`I'm thinking of a number between ${answerMin} and ${answerMax}`)
            console.log(`You have: ${numAttempts} attempts left.`)
            console.log('**************************')
            randomInRange(Number(answerMin), Number(answerMax))
            askGuess()
        });
    });
}

/* Generates a random number and sets it to the global var secretNumber */
const randomInRange = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return secretNumber = Math.floor(Math.random() * (max - min + 1) + min);
}

/* Asks to enter a number between specified min max set by user as well as decrements numAttempts */
const askGuess = () => {
    rl.question('Enter a guess: ', (answer) => {
        if (checkGuess(Number(answer))) {
            console.log('You Win!')
            rl.close()
        } else if (numAttempts === 1) {
            console.log('You lose, try again?')
            rl.close()
        } else {
            numAttempts--
            console.log(`You have ${numAttempts} attempts left.`)
            console.log('**************************')
            askGuess()
        }
    });
}

/* checks users guess and compares it to numAttempts variable, determines if users is correct or not (returns true/false) */
const checkGuess = (number) => {
    if (number > secretNumber) {
        console.log('Answer too high, try again.')
        return false
    } else if (number < secretNumber) {
        console.log('Answer too low, try again.')
        return false
    } else if (number === secretNumber) {
        console.log('Correct!')
        return true
    }
}

