import { Group, Rectangle, Line, Text, Color, Stroke, Font } from "introcs/graphics";

/**
 * You do not need to modify this file in any way (though you're free to, if you'd like).
 * 
 * This class generates a coordinate grid to assist with designing graphics elements.
 * 
 * You can use it in your emoji-script.ts class to help get a sense of orientation for the
 * coordinates you choose to draw your shapes with.
 */
export class Grid {

    width: number;
    height: number;

    xMin: number = -100;
    xMax: number = 100;
    yMin: number = -100;
    yMax: number = 100;

    ticks: number = 10;

    /**
     * @param xMin The minimum x-coordinate of the grid.
     * @param yMin The minimum y-coordinate of the grid.
     * @param xMax The maximum x-coordinate of the grid.
     * @param yMax The maximum y-coordinate of the grid.
     * @param ticks The number of grid marks on each axis.
     */
    constructor(xMin?: number, yMin?: number, xMax?: number, yMax?: number, ticks?: number) {
        if (xMin !== undefined) {
            this.xMin = xMin;
        }

        if (yMin !== undefined) {
            this.yMin = yMin;
        }

        if (xMax !== undefined) {
            this.xMax = xMax;
        }

        if (yMax !== undefined) {
            this.yMax = yMax;
        }

        this.width = this.xMax - this.xMin;
        this.height = this.yMax - this.yMin;

        if (ticks !== undefined) {
            this.ticks = ticks;
        }
    }

    /**
     * Generates the grid and returns it as a Group of shapes.
     */
    shapes(): Group {
        let shapes: Group = new Group();
        shapes.add(this.getBackground());
        shapes.add(this.getTickMarks());
        shapes.add(this.getLabels());
        shapes.add(this.getBorder());
        return shapes;
    }

    getBackground(): Rectangle {
        let background: Rectangle = new Rectangle(this.width, this.height, this.xMin, this.yMin);
        background.fill = new Color(0.9, 0.9, 0.9);
        return background;
    }

    getTickMarks(): Group {
        let tickGroup: Group = new Group();
        
        let xTickSpace: number = this.width / this.ticks;
        let yTickSpace: number = this.height / this.ticks;

        let xTick: Line;
        let yTick: Line;
        let tickStroke: Stroke = new Stroke(new Color(0.8, 0.8, 0.8), 0.5);
        for (let i: number = 1; i < this.ticks; i++) {
            xTick = new Line(this.xMin + xTickSpace * i, this.yMin, this.xMin + xTickSpace * i, this.yMax);
            xTick.stroke = tickStroke;
            tickGroup.add(xTick);

            yTick = new Line(this.xMin, this.yMin + yTickSpace * i, this.xMax, this.yMin + yTickSpace * i);
            yTick.stroke = tickStroke;
            tickGroup.add(yTick);
        }

        return tickGroup;
    }

    getLabels(): Group {
        let xTickSpace: number = this.width / this.ticks;
        let yTickSpace: number = this.height / this.ticks;

        let yOffset: number = yTickSpace / 20;
        let xOffset: number = xTickSpace / 20;

        let labels: Group = new Group();
        for (let row: number = 1; row <= this.ticks; row++) {
            for (let column: number = 0; column < this.ticks; column++) {
                let x: number = this.xMin + column * xTickSpace;
                let y: number = this.yMin + row * yTickSpace;
                let label: Text = new Text(Math.round(x) + "," + Math.round(y));
                label.x = x + xOffset;
                label.y = y - yOffset;
                label.font = new Font("sans-serif", yTickSpace / 8);
                label.textAnchor = "start";
                label.fill = new Color(0.7, 0.7, 0.7);
                labels.add(label);
            }
        }
        return labels;
    }

    getBorder(): Rectangle {
        let border: Rectangle = new Rectangle(this.width, this.height, this.xMin, this.yMin);
        border.fillOpacity = 0;
        border.stroke = new Stroke(Color.BLACK);
        return border;
    }

}