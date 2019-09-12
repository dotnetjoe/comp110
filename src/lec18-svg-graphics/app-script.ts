import "introcs";

import {
    SVG,
    Group,
    Rectangle,
    Circle,
    Stroke,
    Color
} from "introcs/graphics";

import { Axes } from "./Axes";

let svgTag: SVG = new SVG("artboard");
const RADIANS: number = Math.PI * 2;
const PERIOD: number = 5;
const MS_IN_S: number = 1000;

function main(): void {

    // TODO
    let group: Group = new Group();
    let axes: Axes = new Axes(200, 200);
    group.add(axes.getShapes());

    let time: number = Date.now() / MS_IN_S;
    let periodPercent: number = time % PERIOD / PERIOD;

    let count: number = 10;
    for (let i: number = 0; i < count; i++) {
        let percent: number = i / (count - 1);

        let angle: number = percent * RADIANS;
        let angleT: number = periodPercent * RADIANS;
        let cx: number = i * 20 - 90;
        let cy: number = Math.sin(angle + angleT) * 20;
        let c: Circle = new Circle(10, cx, cy);

        let red: number = percent;
        let green: number = 1 - percent;
        let blue: number = 0;
        c.fill = new Color(red, green, blue);

        group.add(c);
    }

    svgTag.render(group);
}

setInterval(main, 20);