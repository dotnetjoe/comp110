import "introcs";

// TODO: Add Honor Pledge Here
/**   
 * Author:   
 * ONYEN:   
 * UNC Honor Pledge: I certify that no unauthorized assistance has been received   
 * or given in the completion of this work. I certify that I understand and 
 * could now rewrite on my own, without assistance from course staff,  
 * the problem set code I am submitting.
 */

import { Message } from "./Message";
import { byStarMessage } from "./predicates";
import { starCount } from "./transforms";
import { sum } from "./reducers";
import { byOldWell } from "./predicates";
import { by2ndLocation } from "./predicates";
import { by3rdLocation } from "./predicates";
import { by4thLocation } from "./predicates";
import { by11Stars } from "./predicates";
import { notAllStars } from "./predicates";
import { concatenate } from "./reducers";
import { toSentence } from "./reducers";
import { toText } from "./transforms";
import { extractLetter } from "./transforms";
import { decode } from "./transforms";

function main(): void {
    promptCSV("Enter the data file...", Message, process);
}

function process(data: Message[]): void {

    // Note: You should not need to change this process function.
    // Solve the mystery in the functions below.

    print("Bandit 0: " + findSuspect0(data));
    print("Clue 0: " + findClue0(data));

    print("Bandit 1: " + findSuspect1(data));
    print("Clue 1: " + findClue1(data));

    print("Bandit 2: " + findSuspect2(data));
    print("Clue 2: " + findClue2(data));

    print("Gang Boss: " + findBoss(data));
    print("Final Clue: " + solveMystery(data));

}

/**
 * This helper function will print out an array of messages when you call it.
 */
function show(data: Message[]): void {
    for (let i: number = 0; i < data.length; i++) {
        print(data[i].time + " " + data[i].who + ": " + data[i].text);
    }
}

export function findSuspect0(data: Message[]): string {
    // TODO
    let x: Message[] = data.filter(byOldWell);
    return x[0].who;
}

export function findClue0(data: Message[]): string {
    // TODO
    let x: Message[] = data.filter(byOldWell);
    return x[0].text;
}

export function findSuspect1(data: Message[]): string {
    // TODO
    let y: Message[] = data.filter(by2ndLocation);
    return y[0].who;    
}

export function findClue1(data: Message[]): string {
    // TODO
    let y: Message[] = data.filter(by2ndLocation);
    let z: string[] = y.map(toText);
    let c: string = z.reduce(concatenate);
    return c;
}

export function findSuspect2(data: Message[]): string {
    // TODO
    let e: Message[] = data.filter(by3rdLocation);
    return e[0].who;
}

export function findClue2(data: Message[]): string {
    // TODO
    let g: Message[] = data.filter(by3rdLocation);
    let h: string[] = g.map(toText);
    let j: string[] = h.map(extractLetter);
    let k: string = j.reduce(concatenate);
    return k;
}

export function findBoss(data: Message[]): string {
    // TODO
    let k: Message[] = data.filter(by4thLocation);
    return k[0].who;
}

export function solveMystery(data: Message[]): string {
    // TODO
    let s: Message[] = data.filter(by11Stars);
    let t: string[] = s[0].text.split(" ").filter(notAllStars);
    let u: string[] = t.map(decode);
    let v: string = u.reduce(toSentence);
    return v;
}

main();