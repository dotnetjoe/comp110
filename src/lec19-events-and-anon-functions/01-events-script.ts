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
// The following setting turns off auto-scaling of graphics.
svgTag.autoScale = false;

function main(): void {
    let scene: Group = new Group();

    svgTag.render(scene);

    // TODO: Register window Events
}

// TODO: Add a MouseEvent Handler

// TODO: Add a KeyboardEvent Handler

main();