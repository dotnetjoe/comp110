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