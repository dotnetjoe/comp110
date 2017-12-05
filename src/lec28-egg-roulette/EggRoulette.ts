import { Carton } from "./Carton";
import { Egg } from "./Egg";

export class EggRoulette {

    carton: Carton;
    scores: number[];
    turn: number;

    constructor() {
        this.scores = [0, 0];
        this.turn = 0;
        
        this.carton = new Carton();
        
        // TODO #1.2: Call the boilEggs method

        // TODO #2.2: Call the shuffleEggs method

    }

    // TODO #1.1: Define the method boilEggs

    pick(index: number): void {
        // TODO #2: pick method - logic for picking an Egg
    }

    winner(): number {
        // TODO #3: Logic for determining the winner
        return -1;
    }

    // TODO #4: Define the method shuffleEggs

    currentPlayer(): number {
        return this.turn % 2;
    }

}