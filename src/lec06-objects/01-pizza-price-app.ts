import "introcs";

// Classes
class Pizza {
    size: string = "small";
    extraCheese: boolean = false;
    toppings: number = 0;
}

// Functions
function main(): void {
    let pizza0: Pizza = new Pizza();
    print("pizza0 costs..." + price(pizza0));
}

function price(input: Pizza): number {

    let cost: number = 0.0;

    // TODO: Implement the pricing logic

    return cost;
}

main();