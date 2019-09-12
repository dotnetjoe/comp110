import "introcs";
import { SVG, Group, Stroke, Rectangle, Color, Circle, Text, Path } from "introcs/graphics";
import { Grid } from "../ps05-emoji/Grid";
import { WeatherRow } from "../lec14-sorting-searching/WeatherRow";

// Declare Bar class here
class Bar {
    amount: number;

    constructor(amount: number) {
        this.amount = amount;
    }

    shape(): Rectangle {
        return new Rectangle(10, this.amount, 0, -this.amount);
    }
}

function main(): void {
    promptCSV("Please Upload Weather Data", WeatherRow, plotData);
}

function hasRain(rainy: WeatherRow):boolean {
    return rainy.precipitation > 0;
}

function toTempHighBar(rainy: WeatherRow): Bar {
    return new Bar(rainy.tempHigh);
}

function toRectangle(bar: Bar, index: number): Rectangle {
    let r: Rectangle = bar.shape();
    r.transform = r.transform.translate(10 * index, 0);
    return r;
}

function intoGroup(memo: Group, item: Rectangle): Group {
    memo.add(item);
    return memo;
}

function plotData(data: WeatherRow[]): void {
    let scene: Group = initScene();
    // TODO
    let rain: WeatherRow[] = data.filter(hasRain);
    print(rain.length);
    let bars: Bar[] = rain.map(toTempHighBar);
    let rects: Rectangle[] = bars.map(toRectangle);
    let chart: Group = rects.reduce(intoGroup, new Group());
    scene.add(chart);
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