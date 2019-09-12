import "introcs";

class Point {

    x: number = 0;
    y: number = 0;

    // TODO #1: Define a toString method
    toString(): string {
        return this.x + ", " + this.y;
    }
    // TODO #4: Define a shiftX method
    shiftX(amount: number): void {
        this.x = this.x + amount;
    }

    distance(other: Point): number {
        let xDelta2: number = Math.pow(other.x - this.x, 2);
        let yDelta2: number = Math.pow(other.y - this.y, 2);
        return Math.sqrt(xDelta2 + yDelta2);
    }
}

function toString(p: Point): string {
    return p.x + ", " + p.y;
}

function main(): void {
    
    let a: Point = new Point();
    a.x = 110;
    a.y = 110;

    // TODO #2: call toString method on Point a
    a.shiftX(10);
    print(a.toString());

    let b: Point = new Point();
    b.x = 401;
    b.y = 401;

    // TODO #3: call toString method on Point b
    b.shiftX(20);
    print(b.toString());

    // What is the distance between the 2 points
    print(a.distance(b));
}

main();