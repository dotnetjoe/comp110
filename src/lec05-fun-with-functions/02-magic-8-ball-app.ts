import "introcs";

function main(): void {
    promptString("What is your question for the 8 ball?", respond);
}

function respond(question: string): void {
    clear();
    print("You asked: " + question);
    print(getAnswer());
    main();
}

function getAnswer(): string {
    // TODO #1 - use the random function
    let answer: number = random(1, 6);

    // TODO #2 - clean up this statement
    if (answer === 1) {
        return "Ask again later";
    } else if (answer === 2) {
            return "Maybe";
    } else if (answer === 3) {
            return "I'm not sure";
    } else if (answer === 4) {
            return "It is decidedly so.";
    } else if (answer === 5) {
            return "As I see it, yes";
    } else {
        return "Outlook not so good";
    }  
}
main();