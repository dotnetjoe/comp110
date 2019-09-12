import "introcs";

import { array2d } from "./2d-arrays-helpers";

// Declare
let a: number [][];
// Initialize using Literals
a = [
    [1, 2],
    [3, 4],
    [5, 6],
];
// Initialize using array2d helper function
a = array2d (5, 6);
// Assigning to an element
a[2][3] = 1;
// Print 2d arra using console, viewable via Right Click > Inspect
console.log(a);
// Read the # of rows
print(a.length);
// Read the # of cols
print(a[0].length);
// Read from an element
print(a[1][0]); // first [] to row and second [] column
// Read from a top-level element