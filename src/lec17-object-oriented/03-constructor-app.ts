import "introcs";

class Point {

    x: number = 0;
    y: number = 0;

    // TODO: Define a Constructor
    constructor(x:number, y: number) {
        this.x = x;
        this.y = y;
    }

    toString(): string {
        return this.x + ", " + this.y;
    }

    shiftX(amount: number): void {
        this.x += amount;
        // This is the same as
        // this.x = this.x + amount;
    }

    distance(other: Point): number {
        let xDelta2: number = Math.pow(other.x - this.x, 2);
        let yDelta2: number = Math.pow(other.y - this.y, 2);
        return Math.sqrt(xDelta2 + yDelta2);
    }

}

class Line {
    a: Point;
    b: Point;

    constructor(a: Point, b: Point) {
        this.a = a;
        this.b = b;
    }

    length(): number {
        return this.a.distance(this.b);
    }
}

function main(): void {
    
    // TODO: Fix the Construction

    let a: Point = new Point(110, 110);
    print(a.toString());

    let b: Point = new Point(401, 401);
    print(b.toString());

    let line: Line = new Line(a, b);
    print(line.length());
}

main();