import "introcs";

interface Transform<T, U> {
    (element: T): U;
}

function toLength(s: string): number {
    return s.length;
}

function yell(s: string): string {
    return s.toUpperCase();
}

function main(): void {

    let sentence: string = "the quick brown fox named jinx";
    let words: string[] = sentence.split(" ");
    print(words);

    let stringToNumber: Transform<string, number>;
    
    // TODO: assign a function to stringToNumber

    // TODO: declare a variable and call stringToNumber

    // TODO: map words array using stringToNumber Transform

    // TODO: map words array using the yell function

}

main();