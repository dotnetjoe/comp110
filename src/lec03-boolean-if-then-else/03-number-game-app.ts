import "introcs";

function main(): void {
    promptNumber("I'm thinking of a number, what is it?", handleGuess);
}

function handleGuess(guess: number): void {
    clear(); // This function clears the screen.
    
    // TODO: think of a number that's your answer
    // IF the user guesses your answer,
    //   THEN call the function named correct
    // ELSE
    //   call the function named incorrect
    
    if (guess === 1) {
        correct();
        print ("You're right!");
    } else {
        incorrect();
        print ("You're wrong. Did you think you were right?")
    }
    incorrect(); // You can delete this line (or reuse it).
    
    main(); // Start the game over again
}

function incorrect(): void {
    image("https://media.giphy.com/media/l44QkVjrTiBgettq8/giphy.gif");
    print("Nope :(");
}

function correct(): void {
    image("https://media.giphy.com/media/r1fDuPIcs18d2/giphy.gif");
    print("You win!!!");
}

function higher(): void {
    image("https://media.giphy.com/media/4UMgC1X6SX7AA/giphy.gif");
    print("Higher!");
}

function lower(): void {
    image("https://media.giphy.com/media/3o7TKNV6C9L58Idabm/giphy.gif");
    print("Lower!");
}

main(); // Start the program by calling main()