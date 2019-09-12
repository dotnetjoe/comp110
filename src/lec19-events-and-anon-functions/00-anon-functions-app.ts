import "introcs";

interface Predicate<T> {
    (item: T): boolean;
}

function main(): void {
    
    let p: Predicate<number> = isOdd;

    let a: number[] = [1, 2, 3, 4, 5]

    // TODO #1: Filter an array of some numbers by predicate p.
    print(a.filter(p));

    // TODO #2: Reassign p to be a an anonymous function.
    p = function(n: number): boolean {
        return n % 2 === 0;
    };
    print(a.filter(p));

    // TODO #3: Filter with an anonymous function directly.
    print(a.filter(function(n: number): boolean {
        return n > 2;
    }));
}

// This is a regular, old function. It satisfies the
// Predicate<number> functional interface.
function isOdd(n: number): boolean {
    return n % 2 === 1;
}

main();