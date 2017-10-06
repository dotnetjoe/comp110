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