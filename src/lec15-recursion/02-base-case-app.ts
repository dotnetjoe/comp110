import "introcs";

function main(): void {
    print("Enter main()");
    f(10);
    print("Leave main()");
}

function f(n: number): void {
    print("Enter f(" + n + ")");
    if (n <= 0) {
        print("Base Case!");
    } else {
        f(n - 1);
    }
    print("Leave f(" + n + ")");
}

main();