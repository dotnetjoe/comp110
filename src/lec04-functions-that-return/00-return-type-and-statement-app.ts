import "introcs";

function main(): void {
    // Given the length of 3 square rooms in a house.
    let bathroom: number = 5;
    let kitchen: number = 10;
    let bedroom: number = 12;

    // Compute the total area of the house.
    let sum: number = 0;
    
    // TODO #2: Compute the sum of the area of the three rooms
    sum = area(bathroom) + area(kitchen) + area(bedroom);

    print("The area is " + sum);
}

// TODO #1: Define a function named area
function area(length: number): number {
    return length * length;
}

main();