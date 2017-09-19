import "introcs";

class Game {
    date: string = "";
    opponent: string = "";
    outcome: string = "";
    points: number = 0;
    fouls: number = 0;
}

function main(): void {
    print("Joel Berry II's 2016-2017 Stats");
    // TODO: Call promptCSV
}

function process(games: Game[]): void {
    print("Processing CSV...");
}

function statLine(game: Game): string {
    let line: string = game.date + " - ";
    line = line + "Points: " + game.points + " - ";
    line = line + "Fouls: " + game.fouls + " - ";
    line = line + "VS: " + game.opponent;
    return line;
}

main();