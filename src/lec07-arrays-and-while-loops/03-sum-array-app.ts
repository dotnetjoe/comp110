import "introcs";

function main(): void {
    let points: number[] = [10, 20, 30];
    print("The sum of...");
    print(points);
    print("is... ");
    print(sum(points));
}

function sum(a: number[]): number {
    let result: number = 0;

    let i: number = 0;
    // TODO: Write a while loop
    // It should:
    // 1. Loop while i is less than parameter a's length
    // 2. Inside the loop:
    //    2.1. Increase the result variable by a[i]
    //    2.2. Increment i by 1
    
    while (i < a.length) {
        result = result + a[1];
        i = i + 1;
    }
    return result;
}

main();