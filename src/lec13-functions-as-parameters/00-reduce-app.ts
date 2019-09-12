import "introcs";

function main(): void {

    let numbers: number[] = [1, 2, 3, 4];
    // TODO: call reduce method on numbers and print results
    print(numbers.reduce(sum, 0));
    print(numbers.reduce(min, Number.MAX_VALUE));
    let strings: string[] = ["one", "two", "three"];
    // TODO: call reduce method on strings and print results
    print(strings.reduce(append, ""));
    print(strings.reduce(commaSeparate, ""));
}

// The following functions are all Reducers
interface Reducer<T, U> {
    (memo: U, element: T): U;
}

function sum(memo: number, n: number): number {
    return memo + n;
}

function min(memo: number, n: number): number {
    if (memo < n) {
        return memo;
    } else {
        return n;
    }
}

function append(memo: string, s: string): string {
    return memo + s;
}

function commaSeparate(memo: string, s: string): string {
    if (memo === "") {
        return s;
    } else {
        return memo + ", " + s;
    }
}

function sumLengths(memo: number, s: string): number {
    return memo + s.length;
}

main();