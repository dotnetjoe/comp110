import "introcs";

import { first, rest } from "./helpers";
import { Reducer } from "../lec13-functions-as-parameters/filter-map-reduce";

function main(): void {
    print(reduce([1, 2, 3, 4], sum, 0));
}

function reduce(a: number[], f: Reducer<number, number>, memo: number): number {
    if (a.length === 0) {
        return memo;
    } else {
        return reduce(rest(a), f, f(memo, first(a)));
    }
}

function sum(memo: number, element: number): number {
    return memo + element;
}

function product(memo: number, element: number): number {
    return memo * element;
}

main();