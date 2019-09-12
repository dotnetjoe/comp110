import {
    Group,
    Rectangle,
    Stroke,
    Color
} from "introcs/graphics";

export class Axes {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    getShapes(): Group {
        let group: Group = new Group();

        // TODO: Create Axes Rectangles
        let xAxis: Rectangle = new Rectangle(this.width, .01, -this.width / 2);
        group.add(xAxis);
    
        let yAxis: Rectangle = new Rectangle(.01, this.height, 0, -this.height / 2);
        group.add(yAxis);

        return group;
    }
}