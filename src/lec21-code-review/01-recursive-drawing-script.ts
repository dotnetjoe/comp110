import "introcs";
import { SVG, Group, Stroke, Color, Rectangle, Path } from "introcs/graphics";
import { Grid } from "../ps05-emoji/Grid";

// Global Vars
let scene: Group;

function main(): void {
    scene = initScene();

    let grid: Grid = new Grid(0, 0, 100, 100);
    scene.add(grid.shapes());
    
    // TODO
    scene.add(spiral(10, 10, 80));
}

const NARROW: number = 0.1;
const SCALE: number = 0.8;

function spiral(startX: number, startY: number, width: number): Group {
    let g: Group = new Group();

    let rightX: number = startX + width;
    let topY: number = startY;
    let bottomY: number = startY + width;
    let newLeftX: number = startX + width * NARROW;
    let newTopY: number = startY + width * NARROW;

    let p: Path = new Path(startX, startY);
    p.lineTo(rightX, topY);
    p.lineTo(rightX, bottomY);
    p.lineTo(newLeftX, bottomY);
    p.lineTo(newLeftX, newTopY);

    g.add(p);

    if (width < 5) {
        return g;
    } else {
        g.add(spiral(newLeftX, newTopY, width * SCALE));
        return g;
    }
}

/**
 * initScene establishes the connection to the HTML's
 * SVG tag with an id of artboard and returns a Group
 * that is rendered to the SVG tag.
 */
function initScene(): Group {
    let svgTag: SVG = new SVG("artboard");
    svgTag.autoScale = true;
    scene = new Group();
    svgTag.render(scene);
    return scene;
}

main();