import { Circle, Color } from "introcs/graphics";

import { Vector } from "./Vector";

export class Body extends Circle {

    update(bodies: Body[]): void {
        let notMe: Body[] = bodies.filter((b: Body): boolean => {
            return b !== this;
        });
        let vectorsToBodies: Vector[] = notMe.map((b: Body): Vector => {
            return new Vector(this.cx - b.cx, this.cy - b.cy);
        });
        let forcesToBodies: Vector[] = vectorsToBodies.map((v: Vector): Vector => {
            let inverseSquare: number = 10000 / (4 * Math.PI * Math.pow(v.magnitude(), 2));
            return v.unit().scale(inverseSquare);
        });
        let totalMagnitude: Vector = forcesToBodies.reduce(
            (memo: Vector, f: Vector): Vector => {
                return memo.add(f);
            }, 
            new Vector(0, 0));
        this.cx += totalMagnitude.x;
        this.cy += totalMagnitude.y;
    }

}