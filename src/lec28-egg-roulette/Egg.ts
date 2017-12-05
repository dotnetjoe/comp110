export class Egg {

    isRaw: boolean;
    isCracked: boolean;

    constructor() {
        this.isRaw = true;
        this.isCracked = false;
    }

    boil(): void {
        this.isRaw = false;
    }

    crack(): void {
        this.isCracked = true;
    }

}