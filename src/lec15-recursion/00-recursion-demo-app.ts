import "introcs";

function main(): void {
    print("Enter main()");
    f(3);
    print("Leave main()");
}

function f(n: number): void {
    print("Enter f(" + n + ")");
    if (n >= 3) {
        print("Base case!");
    } else {
        print("Recur!");
    }
    print("Leave f(" + n + ")");
}

main();