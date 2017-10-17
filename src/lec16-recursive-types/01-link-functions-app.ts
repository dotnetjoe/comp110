import "introcs";

import { Node } from "./Node";

import {
    push,
    toString,
    length,
    lengthLoop,
    get,
    copy,
    reverse
} from "./list-functions";

function main(): void {

    let list: Node;
    list = push("a", null);
    list = push("b", list);
    list = push("c", list);

    print(toString(list));

}

main();