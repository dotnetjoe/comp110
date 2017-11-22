import { Color } from "./Color";

export class Image {
    pixels: Color[][];
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
        this.pixels = [];
        for (let row: number = 0; row < height; row++) {
            this.pixels[row] = [];
            for (let col: number = 0; col < width; col++) {
                this.pixels[row][col] = new Color(1, 1, 1);
            }
        }
    }

    copy(): Image {
        let clone: Image = new Image(this.width, this.height);
        for (let row: number = 0; row < this.height; row++) {
            for (let col: number = 0; col < this.width; col++) {
                clone.pixels[row][col] = this.pixels[row][col].copy();
            }
        }
        return clone;
    }
}