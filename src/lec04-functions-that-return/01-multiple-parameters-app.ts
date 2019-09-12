import "introcs";

function main(): void {
    let fireRoll: number = 15;
    let tsunamiRoll: number = 12;

    print("The highest price of the 2 rolls is: ");
    let highest: number = max2(fireRoll, tsunamiRoll);
    print(highest);
}

function max2(a: number, b: number): number {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

main();