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

export function byOldWell(a: Message): boolean {
    if (a.latitude > 35.9120 && a.latitude < 35.9122 && a.longitude > -79.0513 && a.longitude < -79.0511) {
        return true;
    } else {
        return false;
    }
}

export function by2ndLocation(a: Message): boolean {
    if (a.latitude > 35.9128 && a.latitude < 35.9130 && a.longitude > -79.0518 && a.longitude < -79.0516) {
        return true;
    } else {
        return false;
    }
}

export function by3rdLocation(a: Message): boolean {
    if (a.latitude > 35.9109 && a.latitude < 35.9111 && a.longitude > -79.0482 && a.longitude < -79.0480) {
        return true;
    } else {
        return false;
    }
}

export function by4thLocation(a: Message): boolean {
    if (a.latitude > 35.9085 && a.latitude < 35.9087 && a.longitude > -79.0493 && a.longitude < -79.0491) {
        return true;
    } else {
        return false;
    }
}

export function by11Stars(l: Message): boolean {
    for (let i: number = 0; i < 11; i++) {
        let m: string = l.text;
        if (m[i] !== "*") {
            return false;
        }
    }
    return true;
}

export function notAllStars(n: string): boolean {
    for (let i: number = 0; i < n.length; i++) {
        if (n[i] !== "*") {
            return true;
        }
    }
    return false;
}