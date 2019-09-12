import { Node } from "./Node";

// TODO: Place Honor Code Pledge Here
/**    
 * Author: Adam Alston  
 * ONYEN: aalston9
 * UNC Honor Pledge: I certify that no unauthorized assistance has been received   
 * or given in the completion of this work. I certify that I understand and 
 * could now rewrite on my own, without assistance from course staff,  
 * the problem set code I am submitting.
 */

/**
 * Given a head Node of a linked list, last returns the last Node of the list.
 */
export function last(head: Node): Node {
    if (head.next === null) {
        return head;
    } else {
        return last(head.next);
    }
}

/**
 * Given a linked list and an index, remove returns the head Node of the list
 * that does not contain the Node previously at the index.
 */
export function remove(head: Node, index: number): Node | null {
    let i: number = 0;
    let j: Node = head;
    if (index === 0) {
        if (j.next !== null) {
            return j.next;
        }
        return null;
    }
    while (i < index) {
        if (j.next !== null) {
            j = j.next;
        } else {
            return head;
        }
        i++;
    }
    let k: Node = head;
    for (let m: number = 0; m < index - 1; m++) {
        if (k.next !== null) {
            k = k.next;
        }
    }
    if (k.next !== null) {
        if (k.next.next !== null) {
            k.next = k.next.next;
        } else {
            k.next = null;
        }
    }
    return head;
}

/**
 * Given two linked lists, equals returns true if both lists are equal in 
 * Node data property contents and length.
 */

export function equals(a: Node, b: Node): boolean {

    // if (a.data === b.data) {
    //     if (a.next === b.next) {
    //         if (a.data.length === b.data.length) {
    //             return true;
    //         }
    //     }
    // }
    // return false;

    while (a.next !== null && b.next !== null) {
        if (a.data !== b.data) {
            return false;
        }
        a = a.next;
        b = b.next;
    }
    if (a.next === null && b.next === null) {
        if (a.data === b.data) {
            return true;
        } else {
            return false;
        }
    }
    return false;
}

/**
 * Given the head Node of linked list named target, an index, and the head node of 
 * another linked list named strand, splice inserts the strand list into the target
 * list at index index. The function must return the head node of the spliced list.
 */

export function splice(target: Node, index: number, strand: Node): Node {
    if (index === 0) {
        last(strand).next = target;
        return strand;
    } else if (target.next === null) {
        target.next = strand;
        return target;
    } else {
        target.next = splice(target.next, index - 1, strand);
        return target;
    }
}

/**
 * Given the head node of a linked list and an index, swapBack swaps the Node at 
 * the given index (node "A") with the next Node ("B"), 
 * so A's new index is (index + 1) and B's is (index).
 */

export function swapBack(head: Node, index: number): Node {
    let nextNode: Node = new Node();
    nextNode.data = head.data;
    if (index === 0 && head.next !== null) {
        head = head.next;
        splice(head, 1, nextNode);
        return head;
    } else if (head.next !== null) {
        head.next = swapBack(head.next, index - 1);
        return head;
    } else {
        return head;
    } 

}

//     let first: Node = head;
//     let second: Node = head;
//     let swapped: Node;
//     for (let i: number = 0; i < index; i++) {
//         if (first.next !== null) {
//             if (i === index - 1) {
//                 second = first.next;
//                 return head;
//             }
//         }
//     } 
//     if (first.next !== null) {
//         swapped = first.next;
//         second.next = swapped;
//         if (swapped.next !== null) {
//             first.next = swapped.next;
//             swapped.next = first;
//         } else {
//             swapped.next = first;
//             first.next = null;
//         }
//     } else {
//         return head;
//     }
//     if (index === 0) {
//         return swapped;
//     }
//     return head;
// }

//     let nextNode: Node = new Node();
//     nextNode.data = head.data;
//     if (index === 0 && head.next !== null) {
//         // head.next = nextNode;
//         // head.next.next = head.next;
//         // nextNode = head.next.next;
//         // nextNode.next = head.next.next.next;

//         head.next = nextNode;
//         head.next.next = head.next;
//         nextNode = head.next.next;
//         nextNode.next = head.next.next.next;

//         // head.next.next = nextNode;
//         // splice(head, index, nextNode);
//         // head.next = head.next.next;
//         // nextNode.next = head.next;

//         // head = head.next;
//         // head.next = nextNode;
//         // last(head).next = nextNode;
//         return head;
//     } else if (head.next !== null) {
//         head.next = swapBack(head.next, index - 1);
//         return head;
//     } else {
//         return head;
//     } 

// }

    //     if (newHead.next !== null) {
    //         nextNode = newHead.next;
    //     } else {
    //         nextNode.next = null;
    //     }
    //     head.next = nextNode;
    //     return newHead;
    // } else if (head.next === null) {
    //     return head;
    // } else {
    //     head.next = swapBack(head.next, index - 1);
    //     return head;
    // }


    // } else if (index === 1) {
    //     head.next = swapBack(head.next, index - 1);
    //     return head;
    // }

    // if (head.next === null && index === 0) {
    //     return head;
    // }
    // while (head.next !== null && head.next.next !== null) {
    //     let newHead: Node = head.next;
    //     let next: Node = head.next.next;
    //     newHead.next = head;
    //     head.next = next;
    //     return newHead;
    // } 
    // if (index === 1 && head.next !== null) {
    //     swapBack(head.next, index - 1);
    // }

    // } else if (index === 0) {
    //     head.next = head;
    //     return head;
    // } else if (head.next === null) {
    //     return head;
    // } else {
    //     let swapper: Node = swapBack(head, index - 1);
    // head.next.next = head;
    //     head.next = null;
    //     return swapper;