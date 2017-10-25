import "introcs";

import {
    SVG,
    Transform,
    Color,
    Stroke,
    Rectangle,
    Group
} from "introcs/graphics";

let svg: SVG = new SVG("display");
let t: number = 0;

function main(): void {
    t += 1;
    
    let g: Group = new Group();
    let fill: Color = new Color(0.2, 0.3, 0.2);
    let stroke: Stroke = new Stroke(new Color(0.4, 0.8, 0.4), 0.2);
    for (let i: number = 0; i < 50; i++) {
        let transform: Transform = (new Transform()).translate(i * 10 + 50, 100 + 50 * Math.sin(t * Transform.RADIANS + (i / 10))).rotate(Math.sin( (t * Transform.RADIANS) / 10 + (i / 1000)) * 180);
        let r: Rectangle = new Rectangle(50, 50, -25, -25);
        r.fill = fill;
        r.stroke = stroke;
        r.transform = transform;
        g.add(r);
    }

    svg.render(g);
    
}

setInterval(main, 1000 / 60);