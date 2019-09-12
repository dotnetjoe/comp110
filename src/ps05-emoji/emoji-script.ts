import "introcs";
import { SVG, Group, Color, Rectangle } from "introcs/graphics";

import { Grid } from "./Grid";

// TODO: Import additional classes
import { FaceShape, Eye, Mouth, Emoji } from "./Emoji";

function main(): void {
    let scene: Group = initScene();

    // The following line sets up a coordinate grid to help you orient your designs.
    let grid: Grid = new Grid(-100, -100, 100, 100, 10);
    scene.add(grid.shapes());

    // TODO: Change the following code when you work on other pieces (Eye, Mouth, Emoji)
    let piece: Emoji = new Emoji();
    scene.add(piece.shapes());
}

/**
 * initScene establishes the connection to the HTML's
 * SVG tag with an id of artboard and returns a Group
 * that is rendered to the SVG tag.
 */
function initScene(): Group {
    let svgTag: SVG = new SVG("artboard");
    svgTag.autoScale = true;
    let scene: Group = new Group();
    svgTag.render(scene);
    return scene;
}

main();