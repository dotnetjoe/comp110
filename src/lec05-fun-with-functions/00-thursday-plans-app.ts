import "introcs";

function main(): void {
    promptNumber("How old are you?", ageGate);
}

function ageGate(input: number): void {
    print("It's THURSDAY!");
    print("Tonight you should...");
    print("Have Dinner");

    // TODO: Improve this app...

    print("... and then work on COMP110 assignments.");
}

function canGoToBars(age: number): boolean {
    // TODO: Fix this logic
    return false;
}

main();