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

function missy(s: string): string {
    let reversed: string = "";
    let i: number = 0;
    while (i < s.length) {
        reversed = s[i] + reversed;
        i++;
    }
    return reversed;
}

function main(): void {

    let sentence: string = "the quick brown fox named jinx";
    let words: string[] = sentence.split(" ");
    print(words);
    print(words.map(missy));

    let stringToNumber: Transform<string, number>;
    
    // TODO: assign a function to stringToNumber
    stringToNumber = toLength;
    // TODO: declare a variable and call stringToNumber
    print(stringToNumber("hello"));
    // TODO: map words array using stringToNumber Transform
    print(words.map(stringToNumber));
    // TODO: map words array using the yell function
    print(words.map(yell));

    let yelled: string[] = words.map(yell);
    print(yelled);
}

main();