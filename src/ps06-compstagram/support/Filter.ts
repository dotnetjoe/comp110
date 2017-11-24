import { Image } from "./Image";

export class Filter {

    name: string;
    amount: number;

    constructor() {
        this.name = "Filter";
        this.amount = 0.0;
    }

    process(input: Image): Image {
        return new Image(0, 0);
    }

}

export type FilterClass = typeof Filter;