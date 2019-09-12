import "introcs";

import { first, rest } from "./helpers";

function main(): void {

    let a: number[] = [1, 2, 3];
    print(a);

    // TODO: Print the first element of a
    print(first(a));
    // TODO: Print the rest of a using the rest function
    print(rest(a));
    print(rest(rest(a)));
    print(rest(rest(rest(a))));    
}

main();