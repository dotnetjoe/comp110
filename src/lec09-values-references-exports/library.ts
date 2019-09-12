/**
 * The Game class corresponds to a row in our game data CSV.
 */
export class Game {
    date: string = "";
    opponent: string = "";
    outcome: string = "";
    minutes: number = 0;
    points: number = 0;
    assists: number = 0;
    turnovers: number = 0;
    rebounds: number = 0;
    steals: number = 0;
    blocks: number = 0;
    fouls: number = 0;
}

/**
 * Given an array of Games, return an array of Games containing
 * only the games whose outcome matches the outcome parameter.
 * 
 * Valid values for the outcome parameter are "W" or "L".
 * 
 * For example, given an array of Games and an outcome of "W",
 * return a new array of Games containing only the wins (W)s.
 */
// TODO: Export this function.
export function filterByOutcome(games: Game[], outcome: string): Game[] {
    let matches: Game[] = [];
    let i: number = 0;
    while (i < games.length) {
        let game: Game = games[i];
        if (game.outcome[0] === outcome) {
        // TODO: Only copy a game to matches IF the first character
        // of a game's outcome is equal to the outcome parameter
            matches[matches.length] = games[i];
        }
        
        i++;
    }
    return matches;
}

/**
 * Given an array of Games, return an array of point values
 * scored in the games.
 */
export function mapPoints(games: Game[]): number[] {
    let points: number[] = [];
    let i: number = 0;
    while (i < games.length) {
        points[i] = games[i].points;
        i++;
    }
    return points;
}

/**
 * Given an array of games, return an array of assist
 * totals from the games.
 */
export function mapAssists(games: Game[]): number[] {
    let assists: number[] = [];
    let i: number = 0;
    while (i < games.length) {
        assists[i] = games[i].assists;
        i++;
    }
    // TODO: Implement Map Assists
    return assists;
}

/**
 * Given an array of numbers, return a sum of the numbers.
 */
export function reduceSum(a: number[]): number {
    let result: number = 0;
    let i: number = 0;
    while (i < a.length) {
        result = result + a[i];
        i++;
    }
    return result;
}

// export function reduceAvg(a: number[]): number {
//     return reduceSum(a) / a.length;
// }