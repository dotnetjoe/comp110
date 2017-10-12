import "introcs";

/*
 * For comparison purposes, compare this implementation of binary search 
 * to the imperative (looping) version in lec14. We will not cover this one
 * in class.
 */

import { Entry } from "../lec14-sorting-searching/Entry";
import { Comparator, A_BEFORE_B, A_SAME_AS_B, A_AFTER_B } from "../lec14-sorting-searching/Comparator";
import { alphabetical } from "../lec14-sorting-searching/comparators";

/* Global Variables to hold Dictionary and # of Steps */
let words: string[];
let comparisons: number = 0;

function main(): void {
    print("Binary Search Example");
    promptCSV("Select words.csv", Entry, process);
}

function process(entries: Entry[]): void {
    words = entries.map(getWord);
    print("Loaded " + words.length + " words!");

    words.sort(alphabetical);
    print("Sorted!");

    promptSearch();
}

function getWord(entry: Entry): string {
    return entry.word;
}

function promptSearch(): void {
    promptString("Search for a word...", handleSearch);
}

function handleSearch(input: string): void {
    clear();
    // Reset the count of comparisons needed each search
    comparisons = 0;
    print("Word Found: " + binarySearch(words, input, alphabetical, 0, words.length - 1));
    print("Comparisons: " + comparisons);
    promptSearch();
}

function binarySearch(a: string[], needle: string, compare: Comparator<string>, low: number, high: number): boolean {
    let middle: number = Math.floor((low + high) / 2);
    let comparison: number = compare(needle, a[middle]);
    comparisons++;
    if (low > high) {
        return false;
    } else if (comparison <= A_BEFORE_B) {
        return binarySearch(a, needle, compare, low, middle - 1);
    } else if (comparison >= A_AFTER_B) {
        return binarySearch(a, needle, compare, middle + 1, high);
    } else {
        return true;
    }
}

main();