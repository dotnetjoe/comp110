import "introcs";

function main(): void {
    print("Enter main()");
    f(10);
    print("Leave main()");
}

function f(n: number): void {
    print("Enter f(" + n + ")");
    // TODO: Fix the infinite recursion with a base case
    if (n <= 0) {
        print("Base case!");
    } else {
        f(n - 1);
    }
    print("Leave f(" + n + ")");
}

main();