import { GameOfLife } from "./gol-model";

export interface SelectEventHandler {
    (x: number, y: number): void;
}

/**
 * The purpose of the view is to draw a representation of
 * the model on the page using a table. Each time the view
 * updates, it completely erases the table that came before it,
 * and generates a new table.
 */
export class GameOfLifeView {

    model: GameOfLife;
    board: HTMLElement;
    onselect: SelectEventHandler | null = null;

    constructor(model: GameOfLife) {
        this.model = model;
        this.board = document.getElementById("board") as HTMLElement;
    }

    update(): void {
        // Clear Table
        while (this.board.firstChild !== null) {
            this.board.removeChild(this.board.firstChild);
        }
        
        let cells: number[][] = this.model.cells;
        let table: HTMLTableElement = document.createElement("table");
        for (let row: number = 0; row < cells.length; row++) {
            let tr: HTMLTableRowElement = document.createElement("tr");
            for (let col: number = 0; col < cells[row].length; col++) {
                let td: HTMLTableDataCellElement = document.createElement("td");
                if (cells[row][col] === 0) {
                    td.setAttribute("class", "dead");
                } else {
                    td.setAttribute("class", "alive");
                }
                td.onclick = () => {
                    if (this.onselect !== null) {
                        this.onselect(row, col);
                    }
                };
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        this.board.appendChild(table);

    }

}