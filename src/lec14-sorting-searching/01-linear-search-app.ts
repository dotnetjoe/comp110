import "introcs";

import { Entry } from "./Entry";
import { Comparator, A_SAME_AS_B } from "./Comparator";
import { alphabetical } from "./comparators";

/* Global Variables to hold Dictionary and # of Steps */
let words: string[];
let comparisons: number;

function main(): void {
    print("Linear Search Example");
    promptCSV("Select words.csv", Entry, process);
}

function process(entries: Entry[]): void {
    words = entries.map(getWord);
    print("Loaded " + words.length + " words!");
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
    comparisons = 0;
    print("Word Found: " + linearSearch(words, input, alphabetical));
    print("Comparisons: " + comparisons);
    promptSearch();
}

/**
 * Notice we are walking our array element-by-element and comparing each element
 * with the needle we are searching for.
 */
function linearSearch(haystack: string[], needle: string, compare: Comparator<string>): boolean {

    for (let i: number = 0; i < haystack.length; i++) {

        let comparison: number = compare(needle, haystack[i]);
        comparisons++; // Count this as a comparison

        // TODO: If comparison result is A_SAME_AS_B, then return true.
        if (comparison === A_SAME_AS_B) {
            return true;
        }
    }

    return false;

}

main();