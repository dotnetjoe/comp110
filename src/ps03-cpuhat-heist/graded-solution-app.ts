import "introcs";

// TODO: Add Honor Pledge Here

import { Message } from "./Message";
import { byStarMessage } from "./predicates";
import { starCount } from "./transforms";
import { sum } from "./reducers";

function main(): void {
    promptCSV("Enter the data file...", Message, process);
}

function process(data: Message[]): void {

    // TODO: Delete this comment and the demos call once you're ready to begin.
    demoFunction(data); 

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

export function demoFunction(data: Message[]): void {
    let filtered: Message[] = data.filter(byStarMessage);
    let stars: number[] = filtered.map(starCount);
    let total: number = stars.reduce(sum, 0);
    print("Total Stars: " + total);
    print("Messages with Stars:");
    show(filtered);

}

export function findSuspect0(data: Message[]): string {
    // TODO
    return "?";
}

export function findClue0(data: Message[]): string {
    // TODO
    return "?";
}

export function findSuspect1(data: Message[]): string {
    // TODO
    return "?";
}

export function findClue1(data: Message[]): string {
    // TODO
    return "?";
}

export function findSuspect2(data: Message[]): string {
    // TODO
    return "?";
}

export function findClue2(data: Message[]): string {
    // TODO
    return "?";
}

export function findBoss(data: Message[]): string {
    // TODO
    return "?";
}

export function solveMystery(data: Message[]): string {
    // TODO
    return "?";
}

main();