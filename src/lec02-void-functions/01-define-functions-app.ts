import "introcs";

function squareArea(length: number): void {
    let area: number = length * length;
    print("The area is " + area);
}

// TODO: define a squarePerimeter function

function squarePerimeter(squareLength: number): void {
    let perimeter: number = 4 * squareLength;
    print ("The perimeter is " + perimeter);
}
let squareLength: number = 5
print("With a square of length " + squareLength)
// This is a function call!
squareArea(squareLength);

// TODO: call squarePerimeter
squarePerimeter(squareLength);