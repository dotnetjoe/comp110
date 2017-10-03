import "introcs";

/* Functional Interface */
interface Predicate {
    (element: number): boolean;
}

function main(): void {
    // 1. Declaring a Predicate variable

    // 2. Assigning a reference to a function

    // 3. Calling the function variable, print the result
    
}

function isPositive(n: number): boolean {
    return n > 0;
}

function isNegative(n: number): boolean {
    return n < 0;
}

main();