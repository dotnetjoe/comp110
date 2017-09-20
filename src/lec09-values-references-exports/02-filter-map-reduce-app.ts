import "introcs";

import {
    Game,
    mapPoints,
    reduceSum
} from "./library";

function main(): void {
    promptCSV("Select a CSV", Game, process);
}

function process(games: Game[]): void {
    print("Games: " + games.length);
}

main();