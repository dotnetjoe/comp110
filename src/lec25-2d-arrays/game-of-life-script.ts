import { array2d, arrayToTable, safeX, safeY } from "./helpers";

const COLS: number = 10;
const ROWS: number = 10;
const MS_PER_UPDATE: number = 250;

let board: HTMLElement = document.getElementById("board") as HTMLElement;
let world: number[][] = array2d(COLS, ROWS);
let stepButton: HTMLButtonElement = document.getElementById("step") as HTMLButtonElement;
let startButton: HTMLButtonElement = document.getElementById("start") as HTMLButtonElement;
let stopButton: HTMLButtonElement = document.getElementById("stop") as HTMLButtonElement;
let clearButton: HTMLButtonElement = document.getElementById("clear") as HTMLButtonElement;
let interval: number = -1;

function main(): void {
    render(world);
    
    stepButton.onclick = tick;

    startButton.onclick = function(event: MouseEvent): void {
        if (interval === -1) {
            tick();
            interval = setInterval(tick, MS_PER_UPDATE);
        }
    };
    
    stopButton.onclick = function(event: MouseEvent): void {
        if (interval !== -1) {
            clearInterval(interval);
            interval = -1;
        }
    };

    clearButton.onclick = function(): void {
        world = array2d(COLS, ROWS);
        render(world);
        if (interval !== -1) {
            clearInterval(interval);
            interval = -1;
        }
    };
}

function tick(): void {
    world = step(world);
    render(world);
}

function render(state: number[][]): void {
    while (board.firstChild !== null) {
        board.removeChild(board.firstChild);
    }
    board.appendChild(arrayToTable(state));
}

function countNeighbors(state: number[][], x: number, y: number): number {
    let count: number = 0;
    for (let col: number = x - 1; col <= x + 1; col++) {
        for (let row: number = y - 1; row <= y + 1; row++) {
            if (!(col === x && row === y)) {
                if (state[safeX(state, col)][safeY(state, row)] > 0) {
                    count++;
                }
            }
        }
    }
    return count;
}

function step(state: number[][]): number[][] {
    let next: number[][] = array2d(COLS, ROWS);
    for (let x: number = 0; x < state.length; x++) {
        for (let y: number = 0; y < state[0].length; y++) {
            let neighbors: number = countNeighbors(state, x, y);
            if (state[x][y] === 1) {
                if (neighbors < 2 || neighbors > 3) {
                    next[x][y] = 0;
                } else {
                    next[x][y] = 1;
                }
            } else {
                if (neighbors === 3) {
                    next[x][y] = 1;
                }
            }
        }
    }
    return next;
}

main();