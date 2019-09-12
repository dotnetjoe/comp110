import "introcs";

class Point {

    x: number = 0;
    y: number = 0;

    // Todo #1: Define the sayHello method
    sayHello(): void {
        print("Hello, world");
    }

}

function main(): void {
    
    let a: Point = new Point();

    // Todo #2: Call the sayHello method
    a.sayHello();
}

main();