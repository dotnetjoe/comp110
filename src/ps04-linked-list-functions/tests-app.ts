// TODO: Place Honor Code Pledge Here

import "introcs";

import { Node } from "./Node";
import { list, test, link, toString } from "./helper-functions";
import { last, equals, remove, splice, swapBack } from "./linked-list-functions";

function main(): void {

    print("Linked List Function Tests");

    // Requirement 0 - last
    let tail: Node = new Node();
    tail.data = "c";
    test("0.0 last", last(tail), tail);

    let head: Node = new Node();
    head.data = "b";
    head.next = tail;
    test("0.1 last", last(head), tail);

    test("0.2 last", last(link("a", head)), tail);

    // Requirement 1 - remove
    // TODO: Uncomment tests when you begin working on req 1.
    // test("1.0 remove", remove(list(["a"]), 0), null);
    // test("1.1 remove", remove(list(["a"]), 1), list(["a"]));
    // test("1.2 remove", remove(list(["a", "b"]), 0), list(["b"]));
    // test("1.3 remove", remove(list(["a", "b"]), 1), list(["a"]));
    // test("1.4 remove", remove(list(["a", "b"]), 2), list(["a", "b"]));

    // Requirement 2 - equals
    // TODO: Uncomment tests when you begin working on req 2.
    // test("2.0 equals", equals(list(["a"]), list(["b"])), false);
    // test("2.1 equals", equals(list(["a"]), list(["a"])), true);
    // test("2.2 equals", equals(list(["a", "b"]), list(["a"])), false);
    // test("2.3 equals", equals(list(["a"]), list(["a", "b"])), false);
    // test("2.4 equals", equals(list(["a", "b"]), list(["a", "b"])), true);

    // Requirement 3 - splice
    // TODO: Come up with your own tests for the splice function.

    // Requirement 4 - swapBack
    // TODO: Come up with your own tests for the swapBack function.

}

main();