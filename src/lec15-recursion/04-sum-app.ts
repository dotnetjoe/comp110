import "introcs";

import { first, rest } from "./helpers";

function main(): void {
    let numbers: number[] = [2, 3, 4];
    print(sum(numbers));
}

function sum(a: number[]): number {
    // TODO: Implement sum Recursively
    print(a);
    if (a.length === 0) {
        return 0;
    } else {
        return first(a) + sum(rest(a)); 
    }
}

main();