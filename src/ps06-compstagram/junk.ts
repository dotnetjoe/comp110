
// interface PixelTransform {
//     (color: Color, row: number, col: number, image: Image): Color;
// }

// function imageMap(image: Image, transform: PixelTransform): Image {
//     let clone: Image = image.copy();
//     for (let row: number = 0; row < image.height; row++) {
//         for (let col: number = 0; col < image.width; col++) {
//             clone.pixels[row][col] = transform(image.pixels[row][col].copy(), row, col, image);
//         }
//     }
//     return clone;
// }

// function bw(color: Color, row: number, col: number, image: Image): Color {
//     let avg: number = (color.red + color.green + color.blue) / 3;
//     color.red = avg;
//     color.blue = avg;
//     color.green = avg;
//     return color;
// }

// function blur(color: Color, row: number, col: number, image: Image): Color {

//     let radius: number = 4;
//     let count: number = 0;
//     let red: number = 0;
//     let green: number = 0;
//     let blue: number = 0;

//     for (let i: number = row - radius; i <= row + radius && i < image.height; i++) {

//         if (i < 0) {
//             i = 0;
//         }

//         for (let h: number = col - radius; h <= col + radius && h < image.width; h++)  {
//             if (h < 0) {
//                 h = 0;
//             }

//             red += image.pixels[i][h].red;
//             green += image.pixels[i][h].green;
//             blue += image.pixels[i][h].blue;
//             count++;
//         }
//     }

//     color.red = red / count;
//     color.green = green / count;
//     color.blue = blue / count;

//     return color;

// }