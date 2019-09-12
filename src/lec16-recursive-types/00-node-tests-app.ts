import "introcs";

import { Node } from "./Node";
import { toString, append } from "./list-functions";

function main(): void {

    let a: Node = new Node();
    a.data = "Linked";
    a.next = null;

    let b: Node = new Node();
    b.data = "Lists";
    b.next = a;

    let c: Node = new Node();
    c.data = "are Awesome";
    c.next = b;

    let head: Node = c;
    print(head.data);

    if (head.next !== null) {
        print(head.next.data);

        if (head.next.next !== null) {
            print(head.next.next.data);
            print(head.next.next.next);
        }
    }
}

main();