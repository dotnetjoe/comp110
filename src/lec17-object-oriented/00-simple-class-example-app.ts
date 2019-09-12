import "introcs";

class Point {
    x: number = 0;
    y: number = 0;
}

function main(): void {

    let a: Point;

    // TODO: 
    // 1. Initialize a to be a new Point object
    a = new Point();
    // 2. Assign new values to its x and y properties
    a.x = 1;
    a.y = 2;
    // 3. Print its x and y properties
    print(a.x + ", " + a.y);

}

main();