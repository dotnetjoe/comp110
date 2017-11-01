export class Vector {
    
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    magnitude(): number {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }

    unit(): Vector {
        let m: number = this.magnitude();
        return this.scale(1 / m);
    }

    scale(factor: number): Vector {
        return new Vector(this.x * factor, this.y * factor);
    }

    add(b: Vector): Vector {
        return new Vector(this.x + b.x, this.y + b.y);
    }

    subtract(b: Vector): Vector {
        return new Vector(this.x - b.x, this.y - b.y);
    }

    toString(): string {
        return "[" + this.x + ", " + this.y + "]";
    }
}