import "introcs";

function main(): void {
    whileLoopExample();
    forLoopExample();
}

function whileLoopExample(): void {
    print("While Loop Example");
    let i: number = 0;
    while (i < 10) {
        print(i);
        i++;
    }
    // Notice: i is defined outside of the loop and still accessible
    print("Final value of i..." + i);
}

function forLoopExample(): void {
    print("For Loop Examples");
    // TODO: Write a for loop equivalent to the while loop above
    for ( let i: number = 0; i < 10; i++) {
        print(i);
    }
}

main();