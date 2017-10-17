import { Node } from "./Node";
import { push } from "./list-functions";

interface Predicate<T> {
    (e: T): boolean;
}

export function filter(head: Node | null, predicate: Predicate<string>): Node | null {
    if (head === null) {
        return null;
    } else {
        if (predicate(head.data)) {
            return push(head.data, filter(head.next, predicate));
        } else {
            return filter(head.next, predicate);
        }
    }
}

interface Transform<T, U> {
    (e: T): U;
}

export function map(head: Node | null, transform: Transform<string, string>): Node | null {
    if (head === null) {
        return null;
    } else {
        return push(transform(head.data), map(head.next, transform));
    }
}

interface Reducer<T, U> {
    (memo: U, e: T): U;
}

export function reduce<U>(head: Node | null, reducer: Reducer<string, U>, memo: U): U {
    if (head === null) {
        return memo;
    } else {
        return reduce(head.next, reducer, reducer(memo, head.data));
    }
}