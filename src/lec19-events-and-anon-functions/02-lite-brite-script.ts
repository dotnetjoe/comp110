import "introcs";

import {
    SVG,
    Group,
    Rectangle,
    Circle,
    Stroke,
    Color
} from "introcs/graphics";

let svgTag: SVG = new SVG("artboard");
function main(): void {
    let scene: Group = new Group();
    
    // TODO
    let unlit: Color = new Color(.2, .2, .2);
    let lit: Color = new Color(1, 1, 1);

    for (let row: number = 0; row < 20; row++) {
        for (let column: number = 0; column < 20; column++) {
            let light: Circle = new Circle(5, column * 10, row * 10);
            light.fill = unlit;
            light.onclick = function(event: MouseEvent): void {
                light.fill = lit;
            };
            scene.add(light);
        }
    }
    let greenSwatch: Rectangle = new Rectangle(20, 20, -5, -25);
    greenSwatch.fill = new Color(0, 1, 0);
    greenSwatch.onclick = function(e: MouseEvent): void {
        lit = greenSwatch.fill;
    };
    scene.add(greenSwatch);

    window.onkeydown = function(e: KeyboardEvent): void {
        lit = new Color(1, 0 , 0);
    };

    svgTag.render(scene);
}

main();