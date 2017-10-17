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
    print("Length: " + length(list));

}

main();