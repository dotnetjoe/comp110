import "introcs";

interface Predicate<T> {
    (item: T): boolean;
}

function main(): void {
    
    let p: Predicate<number> = isOdd;

    // TODO #1: Filter an array of some numbers by predicate p.

    // TODO #2: Reassign p to be a an anonymous function.

    // TODO #3: Filter with an anonymous function directly.
    
}

// This is a regular, old function. It satisfies the
// Predicate<number> functional interface.
function isOdd(n: number): boolean {
    return n % 2 === 1;
}

main();