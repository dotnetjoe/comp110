import "introcs";
import { SVG, Group } from "introcs/graphics";

// Global Vars
let scene: Group;

function main(): void {
    scene = initScene();
    


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