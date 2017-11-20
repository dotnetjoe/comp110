import { GameOfLife } from "./gol-model";
import { GameOfLifeView } from "./gol-view";
import { GameOfLifeController } from "./gol-controller";

const ROWS: number = 13;
const COLS: number = 13;

function main(): void {
    let model: GameOfLife = new GameOfLife(ROWS, COLS);
    let view: GameOfLifeView = new GameOfLifeView(model);
    let controller: GameOfLifeController = new GameOfLifeController(model, view);
    view.update();
}

main();