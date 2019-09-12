import "introcs";

function main(): void {
    promptString("What is your name?", respond);
}

function respond(name: string): void {
    print("The first letter of your name is: ");
    print(name[0]);
    print("The last letter of your name is: ");
    print(name[name.length - 1]);
}

main();