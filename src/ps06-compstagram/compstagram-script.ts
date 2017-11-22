import { ImageLoader } from "./support/ImageLoader";
import { Image } from "./support/Image";
import { Color } from "./support/Color";

function toCanvas(canvas: HTMLCanvasElement, image: Image): void {
    let ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;
    let target: ImageData = ctx.createImageData(image.width, image.height);
    for (let i: number = 0; i < target.data.length; i += 4) {
        let row: number = Math.floor(i / 4 / target.width);
        let col: number = i / 4 % target.width;
        target.data[i] = Math.floor(image.pixels[row][col].red * 255);
        target.data[i + 1] = Math.floor(image.pixels[row][col].green * 255);
        target.data[i + 2] = Math.floor(image.pixels[row][col].blue * 255);
        target.data[i + 3] = 255;
    }
    ctx.putImageData(target, 0, 0, 0, 0, target.width, target.height);
    console.log("done");
}

interface PixelTransform {
    (color: Color, row: number, col: number, image: Image): Color;
}

function imageMap(image: Image, transform: PixelTransform): Image {
    let clone: Image = image.copy();
    for (let row: number = 0; row < image.height; row++) {
        for (let col: number = 0; col < image.width; col++) {
            clone.pixels[row][col] = transform(image.pixels[row][col].copy(), row, col, image);
        }
    }
    return clone;
}

function bw(color: Color, row: number, col: number, image: Image): Color {
    let avg: number = (color.red + color.green + color.blue) / 3;
    color.red = avg;
    color.blue = avg;
    color.green = avg;
    return color;
}

function blur(color: Color, row: number, col: number, image: Image): Color {

    let radius: number = 4;
    let count: number = 0;
    let red: number = 0;
    let green: number = 0;
    let blue: number = 0;

    for (let i: number = row - radius; i <= row + radius && i < image.height; i++) {

        if (i < 0) {
            i = 0;
        }

        for (let h: number = col - radius; h <= col + radius && h < image.width; h++)  {
            if (h < 0) {
                h = 0;
            }

            red += image.pixels[i][h].red;
            green += image.pixels[i][h].green;
            blue += image.pixels[i][h].blue;
            count++;
        }
    }

    color.red = red / count;
    color.green = green / count;
    color.blue = blue / count;

    return color;

}

function main(): void {

    let imageSelect: HTMLInputElement = document.getElementById("imageSelect") as HTMLInputElement;
    let loader: ImageLoader = new ImageLoader(imageSelect, 500, 500);
    let viewport: HTMLCanvasElement = document.getElementById("viewport") as HTMLCanvasElement;
    viewport.width = 500;
    viewport.height = 500;
    loader.onload = (image: Image) => {
        toCanvas(viewport, imageMap(imageMap(image, blur), bw));
    };

}

main();