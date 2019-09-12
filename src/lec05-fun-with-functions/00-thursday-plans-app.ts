import "introcs";

function main(): void {
    promptNumber("How old are you?", ageGate);
}

function ageGate(input: number): void {
    print("It's THURSDAY!");
    print("Tonight you should...");
    print("Have Dinner");

    // TODO: Improve this app...
    if (canGoToBars(input)){
        print("Drink water!");
    } else {
        print("Walk back to CMike");
    }

    print("... and then work on COMP110 assignments.");
}

function canGoToBars(age: number): boolean {
    // TODO: Fix this logic
    print("Checking ID");
    return age >= 21;
}

main();