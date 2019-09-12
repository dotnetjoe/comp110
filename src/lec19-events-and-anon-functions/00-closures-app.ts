import "introcs";

interface VoidFunction {
    (): void;
}

function main(): void {
    
    // The f function is declared in main's block
    let f: VoidFunction;

    // Notice: We are establishing a new block!
    {
        // The variable a is defined inside the new block.
        let a: number = 110;

        // f is assigned an anonymous function. It is a closure
        // because it refers to variable a, defined outside its
        // own body block.
        f = function(): void {
            print(a);
        };
    }

    // TODO: Call f and _try_ printing a
    f();
}

main();