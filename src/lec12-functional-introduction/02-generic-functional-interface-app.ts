import "introcs";

/* Functional Interface */
interface Predicate<T> {
    (element: T): boolean;
}

function main(): void {
    // Declaring a Predicate of type number
    let numberTest: Predicate<number>;
    numberTest = isPositive;
    print(numberTest(3));
    print(numberTest(-1));

    // TODO: Declare a Predicate of type string
    
}

function isPositive(n: number): boolean {
    return n > 0;
}

function isNegative(n: number): boolean {
    return n < 0;
}

function isLength3(s: string): boolean {
    return s.length === 3;
}

main();