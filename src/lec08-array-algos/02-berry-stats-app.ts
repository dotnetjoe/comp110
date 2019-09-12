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
    print("Total points: " + totalPoints(games));
    print("Total games fouled out: " + gamesFouledOut(games));
}

function gamesFouledOut(games: Game[]): number {
    let count: number = 0;
    let i:number = 0;
    while (i < games.length) {
        if (games[i].fouls === 5) {
            count++;
        }
        i++;
    }
    return count;
}

function totalPoints(games: Game[]): number {
    let sum: number = 0;
    let i: number = 0;
    while (i < games.length) {
        sum = sum + games[i].points;
        i++;
    }
    return sum;
}

main();