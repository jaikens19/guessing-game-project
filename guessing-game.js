const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let secretNumber = 0
let numAttempts = 0

const askLimit = () => {
    rl.question('Enter max amount of attempts: ', (num) => {
        numAttempts = Number(num)
        askRange()
    });
}
askLimit()
const askRange = () => {
    rl.question('Enter a min number: ', (answerMin) => {
        rl.question('Enter a max number: ', (answerMax) => {
            console.log('**************************')
                console.log(`I'm thinking of a number between ${answerMin} and ${answerMax}`)
                    console.log(`You have: ${numAttempts} attempts total`)
                        console.log('**************************')
                            randomInRange(Number(answerMin), Number(answerMax))
                                askGuess()           
        });
    });
}

const randomInRange = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return secretNumber = Math.floor(Math.random() * (max - min + 1) + min); 
}

const askGuess = () => {
    rl.question('Enter a guess: ', (answer) => {
        if(checkGuess(Number(answer))){
            console.log('You Win!')
            rl.close()
        } else if(numAttempts === 1){
            console.log('You lose, try again?')
            rl.close()
        } else {
            numAttempts--
            console.log(`You have: ${numAttempts} attempts remaining`)
            console.log('**************************')
            askGuess()
        } 
    });
}

const checkGuess = (number) => {
    if(number > secretNumber){
        console.log('Answer too high, try again.')
        return false
    } else if(number < secretNumber){
        console.log('Answer too low, try again.')
        return false
    } else if(number === secretNumber) {
        console.log('Correct!')
        return true
    }
}

