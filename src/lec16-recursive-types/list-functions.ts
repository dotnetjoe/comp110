import { Node } from "./Node";

export function length(head: Node): number {
    if (head.next === null) {
        return 1;
    } else {
        return 1 + length(head.next);
    }
}

export function lengthLoop(head: Node): number {
    let count: number = 0;
    let current: Node | null = head;
    while (current !== null) {
        current = current.next;
        count++;
    }
    return count;
}

export function toString(head: Node): string {
    if (head.next === null) {
        return head.data + " -> null";
    } else {
        return head.data + " -> " + toString(head.next);
    }
}

export function push(data: string, tail: Node | null): Node {
    let head: Node = new Node();
    head.data = data;
    head.next = tail;
    return head;
}

export function copy(head: Node | null): Node | null {
    if (head === null) {
        return null;
    } else {
        return push(head.data, copy(head.next));
    }
}

export function append(data: string, head: Node): void {
    if (head.next === null) {
        let tail: Node = new Node();
        tail.data = data;
        head.next = tail;
    } else {
        append(data, head.next);
    }
}

export function get(head: Node | null, i: number): string | null {
    if (head === null) {
        return null;
    } else if (i === 0) {
        return head.data;
    } else {
        return get(head.next, i - 1);
    }
}

export function reverse(head: Node): Node {
    if (head.next === null) {
        return head;
    } else {
        let rest: Node = reverse(head.next);
        head.next.next = head;
        head.next = null;
        return rest;
    }
}