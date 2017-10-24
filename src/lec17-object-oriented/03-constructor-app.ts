import "introcs";

class Point {

    x: number = 0;
    y: number = 0;

    // TODO: Define a Constructor

    toString(): string {
        return this.x + ", " + this.y;
    }

    shiftX(amount: number): void {
        this.x = this.x + amount;
    }

    distance(other: Point): number {
        let xDelta2: number = Math.pow(other.x - this.x, 2);
        let yDelta2: number = Math.pow(other.y - this.y, 2);
        return Math.sqrt(xDelta2 + yDelta2);
    }

}

function main(): void {
    
    // TODO: Fix the Construction

    let a: Point = new Point();
    a.x = 110;
    a.y = 110;
    print(a.toString());

    let b: Point = new Point();
    b.x = 401;
    b.y = 401;
    print(b.toString());
    
}

main();