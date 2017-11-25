import { Image } from "./Image";

export class Filter {

    name: string;
    amount: number;

    constructor() {
        this.name = "";
        this.amount = 0.0;
    }

    process(input: Image): Image {
        return input;
    }

}

export type FilterClass = typeof Filter;