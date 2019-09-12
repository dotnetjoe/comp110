/**
 * Write your Transform<T, U> functions in this file.
 */

import { Message } from "./Message";

import { byStarString } from "./predicates";

export function starCount(message: Message): number {
    // Using the split method with an empty string returns an array of single characters
    let letters: string[] = message.text.split("");
    let stars: string[] = letters.filter(byStarString);
    return stars.length;
}

export function toText(b: Message): string {
    return b.text;
}

export function extractLetter(f: string): string {
    let i: number = 0;
    while (i < f.length) {
        if (f[i] === "[") {
            if (f[i + 1] === "[") {
                return f[i + 2];            
            }
        }
        i++;
    } 
    return "";
}

export function decode(p: string): string {
    let i: number = 0;
    let empty: string = "";
    while (p.length / 2 > i) {
        if (i === p.length - (i + 1)) {
            empty = empty + p[i];
        } else {
            empty = empty + p[i] + p[p.length - (1 + i)];
        }
        i++;
    }
    return empty;
}