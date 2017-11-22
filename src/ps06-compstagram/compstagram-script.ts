export class Color {
    red: number;
    green: number;
    blue: number;

    constructor(red: number, green: number, blue: number) {
        this.red = red;
        this.green = green;
        this.blue = blue;
    }

    copy(): Color {
        return new Color(this.red, this.green, this.blue);
    }
}

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
                clone[row][col] = clone[row][col].copy();
            }
        }
        return clone;
    }
}

export interface ImageEventHandler {
    (image: Image): void;
}

export class ImageLoader {
    input: HTMLInputElement;
    reader: FileReader;
    img: HTMLImageElement;
    canvas: HTMLCanvasElement;
    onload: ImageEventHandler;

    constructor(input: HTMLInputElement, width: number, height: number) {
        this.input = input;
        this.reader = new FileReader();
        this.img = document.createElement("img");
        this.canvas = document.createElement("canvas");
        this.canvas.width = width;
        this.canvas.height = height;

        this.input.onchange = this.readFile.bind(this);
        this.reader.onload = this.createImage.bind(this);
        this.img.onload = this.loadImage.bind(this);
    }

    readFile(): void {
        let files: FileList | null = this.input.files;
        if (files === null) {
            return;
        }
        let file: File = files[0];
        this.reader.readAsDataURL(file);
    }

    createImage(): void {
        this.img.src = this.reader.result;
    }

    loadImage(): void {
        let srcX: number = 0;
        let srcY: number = 0;
        let constraint: number;
        if (this.img.height > this.img.width) {
            constraint = this.img.width;
            srcY = (this.img.height - this.img.width) / 2;
        } else {
            constraint = this.img.height;
            srcX = (this.img.width - this.img.height) / 2;
        }
        let ctx: CanvasRenderingContext2D = this.canvas.getContext("2d") as CanvasRenderingContext2D;
        ctx.drawImage(this.img, srcX, srcY, constraint, constraint, 0, 0, this.canvas.width, this.canvas.height);
        let raw: ImageData = ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);

        let image: Image = new Image(this.canvas.width, this.canvas.height);
        for (let i: number = 0; i < raw.data.length; i += 4) {
            let row: number = Math.floor(i / 4 / raw.width);
            let col: number = i / 4 % raw.width;
            let red: number = raw.data[i] / 255;
            let green: number = raw.data[i + 1] / 255;
            let blue: number = raw.data[i + 2] / 255;
            image.pixels[row][col] = new Color(red, green, blue);
        }

        if (this.onload !== undefined) {
            this.onload(image);
        }
    }

}

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

function main(): void {

    let imageSelect: HTMLInputElement = document.getElementById("imageSelect") as HTMLInputElement;
    let loader: ImageLoader = new ImageLoader(imageSelect, 500, 500);
    let viewport: HTMLCanvasElement = document.getElementById("viewport") as HTMLCanvasElement;
    viewport.width = 500;
    viewport.height = 500;
    loader.onload = (image: Image) => toCanvas(viewport, image);

}

main();