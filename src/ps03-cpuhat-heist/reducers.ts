/**
 * Write and export your Reducer<T, U> functions in this file.
 */

export function sum(memo: number, n: number): number {
    return memo + n;
}

export function concatenate(c:string, d:string):string {
    return c + d;
}

export function toSentence(q:string, r: string): string {
    if (q === "") {
        return r;
    } else {
        return q + " " + r;
    } 
}