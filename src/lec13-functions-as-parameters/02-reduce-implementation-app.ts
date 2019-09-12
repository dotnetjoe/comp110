import "introcs";

interface Reducer<T, U> {
    (memo: U, element: T): U;
}

function main(): void {
    let strings: string[] = ["one", "two", "three"];
    print(reduce(strings, sumLengths, 0));

    // TODO #2:
    // print(reduce(strings, commaSeparate, ""));
}

function reduce(a: string[], reducer: Reducer<string, number>, memo: number): number {
    // TODO #1 - Implement reduce using a for loop
    for (let i: number = 0; i < a.length; i++) {
        memo = reducer(memo, a[i]);
    }
    return memo;
}

function sumLengths(memo: number, s: string): number {
    return memo + s.length;
}

function commaSeparate(memo: string, s: string): string {
    if (memo === "") {
        return s;
    } else {
        return memo + ", " + s;
    }
}

main();