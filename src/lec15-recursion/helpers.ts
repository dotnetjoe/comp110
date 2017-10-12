/**
 * Returns the first element of an array.
 */
export function first<T>(a: T[]): T {
    return a[0];
}

/**
 * Given an array, returns a new array without its first element.
 */
export function rest<T>(a: T[]): T[] {
    return a.slice(1, a.length);
}