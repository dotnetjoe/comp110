import "introcs";

import { Node } from "./Node";

import {
    link,
    toString,
    length,
    lengthLoop,
    get,
    copy,
    reverse
} from "./list-functions";

function main(): void {

    let list: Node = link("Jane", link("John", link("Sally", null)));
    list = link("Kit", list);

    print("Length: " + length(list));
    print("Length loop: " + lengthLoop(list));

    print(toString(list));

    print(get(list, 0));
    print(get(list, 2));
    print(get(list, 40));
}

main();