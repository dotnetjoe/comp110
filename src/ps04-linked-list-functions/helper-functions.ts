/**
 * This file contains helper functions. You should not need to modify anything in this file.
 */

import "introcs";

import { Node } from "./Node";

/**
 * Test whether some actual value (produced by calling your code) matches an expected (hardcoded) result.
 * When a test fails, this function prints what your code actually responded with and what was expected.
 */
export function test(description: string, actual: Node | string | boolean | null, expected: Node | string | boolean | null): void {
    if (actual instanceof Node) {
        actual = toString(actual);
    }

    if (expected instanceof Node) {
        expected = toString(expected);
    }
    
    let pass: boolean = actual === expected;

    if (pass) {
        print("OK: " + description);
    } else {
        print("Failed: " + description);
        print("=> Actual: " + actual);
        print("=> Expected: " + expected);
    }
}

/**
 * Given an array of strings, return the head Node of a linked list with each
 * string as a Node at the same corresponding index.
 */
export function list(a: string[]): Node {
    if (a.length === 0) {
        throw new Error("The list function requires a non-empty array.");
    }

    let head: Node = link(a[a.length - 1], null);
    for (let i: number = a.length - 2; i >= 0; i--) {
        head = link(a[i], head);
    }

    return head;
}

/**
 * Given a string and a head node, pushes a new node in front
 * of the previous head node and returns the new head node.
 */
export function link(data: string, rest: Node | null): Node {
    let head: Node = new Node();
    head.data = data;
    head.next = rest;
    return head;
}

/**
 * Given a head Node, this function will return a string
 * representation of the list in the form of:
 * 
 * Single Node: A -> null
 * Many Nodes:  C -> B -> A -> null
 */
export function toString(node: Node | null): string {
    if (node === null) {
        return "null";
    } else {
        return node.data + " -> " + toString(node.next);
    }
}