/**
 * Write and export your Predicate<T> functions in this file.
 */

import { Message } from "./Message";

export function byStarMessage(message: Message): boolean {
    return byStarString(message.text);
}

export function byStarString(s: string): boolean {
    return s[0] === "*";
}