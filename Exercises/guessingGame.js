    // guess the number

    const prompt = require("prompt-sync")({sigint:true});

    const randomNumber = Math.floor(Math.random() * 100) + 1;

    let guess, count = 0;

    do {

        guess = prompt("Guess the number : ");
        guess = Number.parseInt(guess);
        count++;

        if (guess < randomNumber) {
            console.log("Guess Higher");
        }
        else if (guess > randomNumber) {
            console.log("Guess Lower");
        }
        else {
            console.log("Congrats, you have guessed the right number in " + count + " attempts");
        }

    }while(guess != randomNumber);