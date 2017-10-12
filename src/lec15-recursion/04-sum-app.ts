import "introcs";

import { first, rest } from "./helpers";

function main(): void {
    let numbers: number[] = [1, 2, 3];
    print(sum(numbers));
}

function sum(a: number[]): number {
    if (a.length === 0) {
        return 0;
    } else {
        return first(a) + sum(rest(a));
    }
}

main();