import { Color } from "./Color";
import { Image } from "./Image";
import { Filter } from "./Filter";

// TODO: Insert Honor Pledge Here

export class InvertFilter extends Filter {
    
    constructor() {
        super();
        this.name = "Invert";
        this.amount = 1.0;
    }

    process(input: Image): Image {
        let output: Image = input.copy();
        for (let row: number = 0; row < output.height; row++) {
            for (let col: number = 0; col < output.width; col++) {
                let original: Color = output.pixels[row][col];

                let red: number = original.red;
                let green: number = original.green;
                let blue: number = original.blue;

                let redInverted: number = 1.0 - red;
                let greenInverted: number = 1.0 - green;
                let blueInverted: number = 1.0 - blue;

                let redDelta: number = (redInverted - red) * this.amount;
                let greenDelta: number = (greenInverted - green) * this.amount;
                let blueDelta: number = (blueInverted - blue) * this.amount;

                original.red = red + redDelta;
                original.green = green + greenDelta;
                original.blue = blue + blueDelta;
            }
        }
        return output;
    }

}