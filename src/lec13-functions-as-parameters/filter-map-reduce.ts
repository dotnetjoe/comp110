// Following are generic implementations of the higher-order functions 
// filter, map, and reduce. These 38 lines of code are dense and 
// worth the time to study and understand how each function works.

export interface Predicate<T> {
    (element: T): boolean;
}

export function filter<T>(a: T[], predicate: Predicate<T>): T[] {
    let result: T[] = [];
    for (let i: number = 0; i < a.length; i++) {
        if (predicate(a[i])) {
            result[result.length] = a[i];
        }
    }
    return result;
}

export interface Transform<T, U> {
    (element: T): U;
}

export function map<T, U>(a: T[], transform: Transform<T, U>): U[] {
    let result: U[] = [];
    for (let i: number = 0; i < a.length; i++) {
        result[i] = transform(a[i]);
    }
    return result;
}

export interface Reducer<T, U> {
    (memo: U, element: T): U;
}

export function reduce<T, U>(a: T[], reducer: Reducer<T, U>, memo: U): U {
    for (let i: number = 0; i < a.length; i++) {
        memo = reducer(memo, a[i]);
    }
    return memo;
}