import "introcs";

import { Comparator, A_BEFORE_B } from "./Comparator";
import { numerical } from "./comparators";

function main(): void {
    let numbers: number[] = [3, 9, 4, 2, 1];
    
    print("Unsorted:");
    print(numbers);

    print("Sorting!");
    sort(numbers, numerical);

    print("Sorted:");
    print(numbers);
}

function sort(a: number[], compare: Comparator<number>): number[] {
    for (let i: number = 0; i < a.length; i++) {
        let hat: number = i;
        // TODO: Implement the logic to move a[hat] backward to its correct position
        while (hat > 0 && compare(a[hat], a[hat - 1]) <= A_BEFORE_B) {
            moveBackward(a, hat);
            hat--;
        }
        print(a);
    }
    return a;
}

function moveBackward(a: number[], i: number): void {
    let temp: number = a[i];
    a[i] = a[i - 1];
    a[i - 1] = temp;
}

main();