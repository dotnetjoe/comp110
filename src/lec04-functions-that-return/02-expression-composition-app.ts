import "introcs";

function main(): void {
    let fireRoll: number = 15;
    let tsunamiRoll: number = 12;
    let californiaRoll: number = 10;

    print("The highest price of the 3 rolls is: ");
    let highest: number = max3(fireRoll, tsunamiRoll, californiaRoll);
    print(highest);
}

/**
 * max2 - given any two numbers, return the greater of the two
 */
function max2(a: number, b: number): number {
    if (a > b) {
        return a;
    }
    return b;
}

/**
 * max3 - given any three numbers, return the greatest of the three
 */
function max3(a: number, b: number, c: number): number {

    // TODO: Implement max3 WITHOUT using any if-then statements

    // Strategy:
    // 1. Declare and initialize a variable that holds the max of a, b
    let maxAB: number = max2(a, b);
    // 2. Return the max of the variable from step 1 and c
    return max2(maxAB, c);
}

main();