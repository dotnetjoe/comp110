import { Filter } from "./support/Filter";
import { Image } from "./support/Image";
import { Color } from "./support/Color";

export class InvertFilter extends Filter {
    
    constructor() {
        super();
        this.name = "Invert";
        this.amount = 1.0;
    }

    process(input: Image): Image {
        input = input.copy();
        for (let row: number = 0; row < input.height; row++) {
            for (let col: number = 0; col < input.width; col++) {
                let original: Color = input.pixels[row][col];

                let red: number = original.red;
                let green: number = original.green;
                let blue: number = original.blue;

                let redInverted: number = 1.0 - red;
                let greenInverted: number = 1.0 - green;
                let blueInverted: number = 1.0 - blue;

                let redDelta: number = (red - redInverted) * this.amount;
                let greenDelta: number = (green - greenInverted) * this.amount;
                let blueDelta: number = (blue - blueInverted) * this.amount;

                original.red = red - redDelta;
                original.green = green - greenDelta;
                original.blue = blue - blueDelta;
            }
        }
        return input;
    }

}

export class BrightnessFilter extends Filter {

    constructor() {
        super();
        this.name = "Brightness";
        this.amount = 0.5;
    }

    process(input: Image): Image {
        let output: Image = input.copy();
        for (let row: number = 0; row < input.height; row++) {
            for (let col: number = 0; col < input.width; col++) {
                let pixel: Color = output.pixels[row][col];
                let scale: number = (this.amount - 0.5) / 0.5;
                pixel.red = pixel.red + pixel.red * scale;
                pixel.green = pixel.green + pixel.green * scale;
                pixel.blue = pixel.blue + pixel.blue * scale;
            }
        }
        return output;
    }
    
}