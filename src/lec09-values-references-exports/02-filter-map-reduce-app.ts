import "introcs";

import {
    Game,
    mapPoints,
    mapAssists,
    reduceSum,
    // reduceAvg,
    filterByOutcome
} from "./library";

function main(): void {
    promptCSV("Select a CSV", Game, process);
}

function process(games: Game[]): void {
    print("Games: " + games.length);

    let filtered: Game[] = filterByOutcome(games, "W");
    print("Filtered: " + filtered.length);

    let mapped: number[] = mapPoints(filtered);
    print(mapped);

    let reduced: number = reduceSum(mapped);
    print(reduced);
}

main();