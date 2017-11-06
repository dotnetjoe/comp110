import "introcs";
import { SVG, Group, Stroke, Rectangle, Color, Circle, Text, Path } from "introcs/graphics";
import { Grid } from "../ps05-emoji/Grid";
import { WeatherRow } from "../lec14-sorting-searching/WeatherRow";

function main(): void {
    promptCSV("Please Upload Weather Data", WeatherRow, plotData);
}

function plotData(data: WeatherRow[]): void {
    let scene: Group = initScene();
    // TODO

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