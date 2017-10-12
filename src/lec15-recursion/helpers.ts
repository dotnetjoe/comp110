export function first(a: number[]): number {
    return a[0];
}

export function rest(a: number[]): number[] {
    return a.slice(1, a.length);
}