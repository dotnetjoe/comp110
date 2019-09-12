import "introcs";

// VALUE TYPE EXAMPLE

let a: number = 0;
let b: number = a;
// TODO: Reassign a


print(b);

// **********************
// REFERENCE TYPE EXAMPLE

class Person {
    name: string = "";
}

let seanCombs: Person = new Person();
seanCombs.name = "Sean Combs";

let puffDaddy: Person = seanCombs;
// TODO: Reassign seanCombs' name property to "Diddy"
seanCombs.name = "Diddy";
print(puffDaddy.name);