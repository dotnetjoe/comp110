import { SVG, Group, Circle } from "introcs/graphics";

let canvas: SVG = new SVG("canvas");
canvas.autoScale = false;

export function main(): void {
    canvas.render(new Circle(50, 150, 150));
}

main();