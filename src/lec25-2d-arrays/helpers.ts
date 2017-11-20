export function array2d(width: number, height: number): number[][] {
    let a: number[][] = [];
    for (let column: number = 0; column < width; column++) {
        a[column] = [];
        for (let row: number = 0; row < height; row++) {
            a[column][row] = 0;
        }
    }
    return a;
}

export function arrayToTable(a: number[][]): HTMLTableElement {
    let table: HTMLTableElement = document.createElement("table");
    for (let y: number = 0; y < a[0].length; y++) {
        let row: HTMLTableRowElement = document.createElement("tr");
        for (let x: number = 0; x < a.length; x++) {
            let col: HTMLTableDataCellElement = document.createElement("td");
            col.innerText = String(a[x][y]);
            if (a[x][y] === 0) {
                col.setAttribute("class", "dead");
            } else {
                col.setAttribute("class", "alive");
            }
            col.onclick = function(event: MouseEvent): void {
                if (a[x][y] === 0) {
                    col.innerText = "1";
                    col.setAttribute("class", "alive");
                    a[x][y] = 1;
                } else {
                    col.innerText = "0";
                    col.setAttribute("class", "dead");
                    a[x][y] = 0;
                }
            };
            row.appendChild(col);
        }
        table.appendChild(row);
    }
    return table;
}

export function safeX(a: number[][], x: number): number {
    return (x + a.length) % a.length;
}

export function safeY(a: number[][], y: number): number {
    return (y + a[0].length) % a[0].length;
}