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
        this.boilEggs();

        // TODO #2.2: Call the shuffleEggs method
        this.shuffleEggs();
    }

    // TODO #1.1: Define the method boilEggs
    boilEggs(): void {
        for (let i: number = 0; i < this.carton.eggs.length - 4; i++) {
            let egg: Egg = this.carton.eggs[i];
            egg.boil(); 
        }
                }

    pick(index: number): void {
        // TODO #2: pick method - logic for picking an Egg
        let egg: Egg = this.carton.eggs[index];
        if (!egg.isCracked) {
            egg.crack();
            if (egg.isRaw) {
                this.scores[this.currentPlayer()]++;
            }
            this.turn++;
        }
    }

    winner(): number {
        // TODO #3: Logic for determining the winner
        if (this.scores[0] === 2) {
            return 1;
        } else if (this.scores[1] === 2) {
            return 2;
        } else {
            return -1;
        }
    }

    // TODO #4: Define the method shuffleEggs
    shuffleEggs(): void {
        for (let i: number = 0; i < this.carton.eggs.length; i++) {
            let random: number = Math.floor(this.carton.eggs.length * Math.random());
            let egg: Egg = this.carton.eggs[i];
            this.carton.eggs[i] = this.carton.eggs[random];
            this.carton.eggs[random] = egg;
        }
    }

    currentPlayer(): number {
        return this.turn % 2;
    }

}