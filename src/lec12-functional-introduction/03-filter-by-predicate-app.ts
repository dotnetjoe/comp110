import "introcs";

export interface Predicate<T> {
    (element: T): boolean;
}

export function isLength3(s: string): boolean {
    return s.length === 3;
}

export function endsWithX(s: string): boolean {
    let lastIndex: number = s.length - 1;
    return s[lastIndex] === "x";
}

function main(): void {

    let sentence: string = "the quick brown fox named jinx";
    print(sentence);

    // Let's call the split method of the sentence string.
    let words: string[] = sentence.split(" ");
    print(words);

    // TODO: declare a test predicate we can use with the words array
    let test: Predicate<string> = isLength3;
    // TODO: print words filtered by test predicate
    print(words.filter(test));
    // TODO: print words that end with x
    print(words.filter(endsWithX));
}

main();