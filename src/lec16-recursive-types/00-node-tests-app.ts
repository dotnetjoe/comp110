import "introcs";

import { Node } from "./Node";
import { toString, append } from "./list-functions";

function main(): void {

    let a: Node = new Node();
    a.data = "Link A";
    a.next = null;

    let b: Node = new Node();
    b.data = "Link B";
    b.next = a;

    let c: Node = new Node();
    c.data = "Link C";
    c.next = b;

    append("World", c);
    
    print(toString(c));

}

main();