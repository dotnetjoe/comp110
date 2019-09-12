import { array2d } from "./2d-arrays-helpers";

/**
 * The "model" of GameOfLife contains the data about the cells
 * and all of the logic for updating each cell at each step of the game.
 */
export class GameOfLife {

    rows: number;
    cols: number;
    cells: number[][];

    constructor(rows: number, cols: number) {
        this.rows = rows;
        this.cols = cols;
        this.reset();
    }

    /**
     * The get function should return true when a row, cell is live (1)
     * and false when it is dead (0).
     * 
     * There is an important edge case to consider!
     * 
     * When row or column is < 0 or >= rows / cols, then we should "wrap"
     * the row or column around to the other side of the cells. Think of
     * this like pacman exiting one side of the screen and coming out of
     * the opposite.
     * 
     * The specific edge cases we must handle for row are when:
     * 
     *  - row is -1
     *  - row is rows
     *  - col is -1
     *  - col is cols
     */
    isLive(row: number, col: number): boolean {
        // TODO
        if (row === -1) {
            row = this.rows - 1;
        } else if (row === this.rows) {
            row = 0;
        }

        if (col === -1) {
            col = this.cols - 1;
        } else if (col === this.cols) {
            col = 0;
        }
        // TODO Handle the cases above
        return this.cells[row][col] === 1;
    }

    /**
     * Given a row and column, check the surrounding 8 cells and count
     * the number which are live.
     */
    countLiveNeighbors(row: number, col: number): number {
        // TODO
        let count: number = 0;
        for (let i:number = 0; i <= row; i++) {
            for (let h: number = col - 1; h <= col + 1; h++) {
                if (!(i === row && h === col)) {
                    // do nothing
                    if (this.isLive (i, h)) {
                        count++;
                    }
                }
            }
        }
        return count;
    }

    /**
     * Given the state of all cells currently, compute the next state of
     * all cells and replace the cells property with the next state.
     * 
     * The rules in conway's game of life are:
     * 
     * 1. Underpopulation: A live cell with fewer than 2 live neighbors dies.
     * 2. Stasis: A live cell with 2 or 3 live neighbors lives.
     * 3. Overpopulation: A live cell with more than 3 live neighbors dies.
     * 4. Reproduction: A dead cell with 3 live neighbors comes to life.
     * 
     * This method is called by the controller once when the "Step" button
     * is pressed. It is called continuously every quarter second when the
     * "Start" button is pressed.
     */
    step(): void {
        let next: number[][] = array2d(this.rows, this.cols);
        let cells: number[][] = this.cells;
        
        // TODO
        for (let row:number = 0; row < this.rows; row++) {
            for (let col:number = 0; col < this.cols; col++) {
                next[row][col] = this.rules(row, col);
            }
        }
    
        this.cells = next;
    }

    rules (row: number, col: number): number {
        let live: boolean = this.isLive(row, col);
        let neighbors: number = this.countLiveNeighbors(row, col);
        if (live) {
            if (neighbors < 2) {
                // underpopulation
                return 0;
            } else if ( neighbors > 3) {
                // overpopulation rule
                return 0;
            } else {
                return 1;
            }
        } else {
            if (neighbors === 3) {
                return 1;
            } else {
                return 0;
            }
        }
    }
    /**
     * This method is called by the controller when the game is stopped
     * and the user clicks on a particular cell.
     */
    toggle(row: number, col: number): void {
        if (this.cells[row][col] > 0) {
            this.cells[row][col] = 0;
        } else {
            this.cells[row][col] = 1;
        }
    }

    /**
     * This method is called by the controller when the user resets the game.
     */
    reset(): void {
        this.cells = array2d(this.rows, this.cols);
    }

}