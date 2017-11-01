import "introcs";

import {
    SVG,
    Group,
    Rectangle,
    Circle,
    Stroke,
    Color
} from "introcs/graphics";

import { Body } from "./Body";

let svgTag: SVG = new SVG("artboard");
svgTag.autoScale = false;

let bodies: Body[] = [];

function main(): void {
    let scene: Group = new Group();
    window.onclick = (event: MouseEvent): void => {
        let body: Body = new Body(10, event.clientX, event.clientY);
        bodies.push(body);
        scene.add(body);
    };
    svgTag.render(scene);
    setInterval(tick, 20);
    tick();
}

function tick(): void {
    bodies.forEach((body: Body) => { body.update(bodies); });
}

main();