import "introcs";

// Blocks are groups of statements surrounded by curly braces.

// There are 2 blocks below. 
// The second block is nested inside the first.

{
    let x: number = 110;
    print(x); // OK
    {
        print(x); // OK
    }
}

// Try printing x here! Hint: you can't!
