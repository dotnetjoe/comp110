import "introcs";

/* Functional Interface */
interface Predicate {
    (element: number): boolean;
}

function main(): void {
    // 1. Declaring a Predicate variable
    let test: Predicate;
    // 2. Assigning a reference to a function
    test = isPositive;
    // 3. Calling the function variable, print the result
    print(test(10));
    print(test(-5));
}

function isPositive(n: number): boolean {
    return n > 0;
}

function isNegative(n: number): boolean {
    return n < 0;
}

main();