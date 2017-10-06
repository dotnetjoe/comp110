import "introcs";

interface Transform<T, U> {
    (element: T): U;
}

function main(): void {
    let strings: string[] = ["one", "two", "three"];
    print(map(strings, toLength));

    // TODO:
    // print(map(strings, yell));
}

function map(a: string[], transform: Transform<string, number>): number[] {
    let result: number[] = [];
    // TODO #1: Implement the logic here

    return result;
}

function toLength(s: string): number {
    return s.length;
}

function yell(s: string): string {
    return s.toUpperCase();
}

main();