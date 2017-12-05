import { Egg } from "./Egg";

export class Carton {

    eggs: Egg[];

    constructor() {
        this.eggs = [];
        for (let i: number = 0; i < 12; i++) {
            this.eggs[i] = new Egg();
        }
    }

    size(): number {
        return this.eggs.length;
    }

}