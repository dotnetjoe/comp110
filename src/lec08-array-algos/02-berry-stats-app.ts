import "introcs";

class Game {
    date: string = "";
    opponent: string = "";
    outcome: string = "";
    points: number = 0;
    fouls: number = 0;
}

function main(): void {
    promptCSV("Select player data CSV", Game, process);
}

function process(games: Game[]): void {
    // TODO
    print("Total points: ");
    print("Total games fouled out: ");
}

function gamesFouledOut(games: Game[]): number {
    return 0;
}

function totalPoints(games: Game[]): number {
    return 0;
}

main();