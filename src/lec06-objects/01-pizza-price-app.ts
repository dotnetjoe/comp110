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
    pizza0.size = "medium";
    pizza0.toppings = 2;
    print("pizza0 costs..." + price(pizza0));
}

function price(input: Pizza): number {

    let cost: number = 0.0;

    // TODO: Implement the pricing logic
    if (input.size === "small") {
        cost = 7;
    }else if (input.size === "medium") {
        cost = 9;
    }else {
        cost = 11;
    }
    if (input.extraCheese) {
        cost = cost + 1;
    }
    if (input.toppings) {
        cost = cost + input.toppings * .75;
    }
    return cost;
}

main();