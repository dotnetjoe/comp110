import "introcs";
import { SVG, Group, Stroke, Color, Rectangle } from "introcs/graphics";
import { Grid } from "../ps05-emoji/Grid";

// Global Vars
let scene: Group;

function main(): void {
    scene = initScene();

    let grid: Grid = new Grid(0, 0, window.innerWidth, window.innerHeight);
    scene.add(grid.shapes());
    
    // TODO
}

/**
 * initScene establishes the connection to the HTML's
 * SVG tag with an id of artboard and returns a Group
 * that is rendered to the SVG tag.
 */
function initScene(): Group {
    let svgTag: SVG = new SVG("artboard");
    svgTag.autoScale = false;
    scene = new Group();
    svgTag.render(scene);
    return scene;
}

main();