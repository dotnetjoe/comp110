import "introcs";

import { Entry } from "./Entry";
import { Comparator, A_BEFORE_B, A_SAME_AS_B, A_AFTER_B } from "./Comparator";
import { alphabetical } from "./comparators";

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
    print("Word Found: " + binarySearch(words, input, alphabetical));
    print("Comparisons: " + comparisons);
    promptSearch();
}

function binarySearch(haystack: string[], needle: string, compare: Comparator<string>): boolean {
    let low: number = 0;
    let high: number = haystack.length - 1;

    while (low <= high) {

        let middle: number = Math.floor((low + high) / 2);

        let comparison: number = compare(needle, haystack[middle]);
        comparisons++; // Count this call to comparator

        // TODO: Implement Correct Logic
        if (comparison <= A_BEFORE_B) {
            // lower
            high = middle - 1;
        } else if (comparison >= A_AFTER_B) {
            // higher
            low = middle + 1;
        } else {
            return true;
        }
        
    }
    // Needle was not found!
    return false;
}

main();