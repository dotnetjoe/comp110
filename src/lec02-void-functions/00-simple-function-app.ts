import "introcs";

function squareArea(length: number): void {
    print("squareArea called! The length of the square is " + length);
    let area: number = length * length;
    print("The area is " + area);
}

print("Let's call squareArea...");
// TODO: Call the squareArea function!