import { Node } from "./Node";
import { link } from "./list-functions";

interface Predicate<T> {
    (e: T): boolean;
}

export function filter(node: Node | null, predicate: Predicate<string>): Node | null {
    if (node === null) {
        return null;
    } else {
        if (predicate(node.data)) {
            return link(node.data, filter(node.next, predicate));
        } else {
            return filter(node.next, predicate);
        }
    }
}

interface Transform<T, U> {
    (e: T): U;
}

export function map(node: Node | null, transform: Transform<string, string>): Node | null {
    if (node === null) {
        return null;
    } else {
        return link(transform(node.data), map(node.next, transform));
    }
}

interface Reducer<T, U> {
    (memo: U, e: T): U;
}

export function reduce<U>(node: Node | null, reducer: Reducer<string, U>, memo: U): U {
    if (node === null) {
        return memo;
    } else {
        return reduce(node.next, reducer, reducer(memo, node.data));
    }
}