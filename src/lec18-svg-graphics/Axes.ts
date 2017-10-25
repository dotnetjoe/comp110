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

        return group;
    }
}