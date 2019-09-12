import "introcs";

function squareArea(length: number): void {
    let area: number = length * length;
    print("The area is " + area);
}

function squarePerimeter(length: number): void {
    let perimeter: number = length * 4;
    print("The perimeter is " + perimeter);
}

function squareStats(length: number): void {
    print("With a square of length " + length);
    squareArea(length);
    squarePerimeter(length);
}

function main(): void {
    print("main called!");
    // TODO #2: call squareStats with any value you'd like
    promptNumber ("What is the length?" , squareStats);
}

// TODO #1: call the main function
// main();

let i: number = 10;
while (i > 0) {
    print(i);
    i = i - 4;
}