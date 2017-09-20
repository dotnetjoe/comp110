import "introcs";

function main(): void {
    promptString("What is your name?", respond);
}

function respond(name: string): void {
    print("The first letter of your name is: ");

    print("The last letter of your name is: ");

}

main();