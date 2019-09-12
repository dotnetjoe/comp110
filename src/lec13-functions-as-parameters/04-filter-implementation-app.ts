import "introcs";

interface Predicate<T> {
    (element: T): boolean;
}

function main(): void {
    let numbers: number[] = [-2, -1, 0, 1, 2];
    print(filter(numbers, isPositive));
    print(filter(numbers, isNegative));

    print(numbers.filter(isPositive));

    // TODO:
    let strings: string[] = ["one", "two", "three"];
    // print(filter(strings, isLength3));
}

function filter(a: number[], predicate: Predicate<number>): number[] {
    let result: number[] = [];
    // TODO #1: Implement the filter logic here
    for (let i: number = 0; i < a.length; i++) {
        if (predicate(a[i])) {
            result[result.length] = a[i]; // Append
        }
    }
    return result;
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