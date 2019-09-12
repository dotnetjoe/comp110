/**
 * Given the number of rows and columns, this function will
 * initialize a new 2d array of the specified size and assign
 * a value of 0 to each element.
 */
export function array2d(rows: number, cols: number): number[][] {
    let a: number[][] = [];

    // TODO
    for (let row: number = 0; row < rows; row++) {
        // Initialize an empty row
        a[row] = [];
        for (let col: number = 0; col < cols; col++) {
            a[row][col] = 0;
        }
    }
    return a;
}