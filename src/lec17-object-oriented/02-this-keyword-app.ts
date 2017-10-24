import "introcs";

class Point {

    x: number = 0;
    y: number = 0;

    // TODO #1: Define a toString method

    // TODO #4: Define a shiftX method

}

function toString(p: Point): string {
    return p.x + ", " + p.y;
}

function main(): void {
    
    let a: Point = new Point();
    a.x = 110;
    a.y = 110;
    print(toString(a));
    // TODO #2: call toString method on Point a

    let b: Point = new Point();
    b.x = 401;
    b.y = 401;
    print(toString(b));
    // TODO #3: call toString method on Point b
    
}

main();