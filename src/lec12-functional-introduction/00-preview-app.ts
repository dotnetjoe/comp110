import "introcs";

function main(): void {
    
    // Question: Of words that end with the letter x
    //           how many letters are in those words
    //           in total?
    let words: string[] = ["the", "quick", "brown", "fox", "named", "jinx"];

    print(words.filter(endsWithX).map(toLength).reduce(sum));

}

function endsWithX(s: string): boolean {
    return s[s.length - 1] === "x";
}

function toLength(s: string): number {
    return s.length;
}

function sum(memo: number, n: number): number {
    return memo + n;
}

main();