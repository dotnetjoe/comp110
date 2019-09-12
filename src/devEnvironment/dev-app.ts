import "introcs";

// 3 part 1
// function foo(x: number, y: number): boolean {
//     if (x + y > 5 * (x - y)) {
//         return true;
//     } else if (x * y <= 20) {
//         return true;
//     } else {
//         return false;
//     }
// }

// // 3 part 2
// function bar(a: boolean, b: boolean): void {
//     if (a && b) {
//         print("1");
//     } else if (a || b) {
//         print("3");
//     } else {
//         print("2");
//     }
// }
// bar(true, false); 

// let i: number = 10;
// while (i > 0) {
//     print(i);
//     i = i - 4;
// }

// let a: number[] = [];

// let i: number = 0;
// while (i < 4) {
//     if (i <= 0) {
//         a[i] = i;
//     }else {
//         a[i] = a[i - 1] + i;
//     }
//     i = i + 1;
// }
// print(a);

// function abc (x: number): number {
//     return (x + 1);
// }
// print(abc(2));

// function foo(num1: number, num2:number): number {
//     return bar(num2, num2) - hoo(num1);
// }
// function bar(num1: number, num2:number): number {
//     return num1 * num2;
// }
// function hoo(num1: number): number {
//     return num1 + 2;
// }
// print(bar(hoo(2), hoo(8)));
// print(foo(bar(2, 3), 3));

// class Yopo {
//     flavor: string;
//     size: string;
//     toppings: boolean;
//     cost: number;
// }

// function toppingCounter(x: Yopo[]): number {
//     let i: number = 0;
//     let tCount: number = 0;
//     while (i < x.length) {
//         if (x[i].toppings) {
//             tCount++;
//         }
//         i++;
//     }
//     return tCount;
// }

// let arr: number[] = [1, 2, 3, 4, 5];
// function foo(): void {
//     arr[0] = arr[1];
//     arr[2] = 2 * arr[3];
//     arr[1] = arr[2] - arr[3] + 1;
//     arr[arr[0] + 2] = arr[arr[4] - 2];
//     print(arr[4]);
// }
// foo();

// function compare(x: number, y: number): number {
//     if (x < y) {
//         return -1;
//     } else if (x === y) {
//         return 0;
//     } else {
//         return 1;
//     }
// }

// print(compare(1, 3));

// let i:number = 0;
// while (i < 21) {
//     print(i);
//     i = i + 2;
// }

// function bar (a: boolean, b: boolean): number {
//     if (!a && !b) {
//         return 2;
//     } else if (a && b) {
//         return 1;
//     } else {
//         return 3;
//     }
// }

// interface Demo<T, U> {
//     (element: T): U;
// }
// function a (s: string): number {
//     return s.length + s.length - 2;
// }
// function b (s: string): number {
//     return s.length * s.length - 2;
// }
// function c (s: number): boolean {
//     return s < 5;
// }

// function main(): void {
//     let foo: Demo<string, number>;
//     let bar: Demo<string, number>;
//     let baz: Demo<number, boolean> = c;
//     foo = a;
//     bar = b;
//     bar = foo;
//     foo = bar;
//     print(foo("hack"));
//     print(bar("110"));
//     print(baz(bar("comp")));    
// }
// main();

// let arr: string[] = ["cat", "puppies", "horse", "lizard", "fish"];
// function foo(str: string): boolean {
//     return str.length > 4;
// }
// function baz(str: string): boolean {
//     for (let i: number = 0; i < str.length; i++) {
//         if (str[i] === "s") {
//             return true;
//         }
//     }
//     return false;
// }
// function bar(str: string): number {
//     return str.length;
// }
// function wow(memo: number, num: number): number {
//     return memo + num;
// }
// function fun(memo: number, num: number): number {
//     if (num < memo) {
//         memo = num;
//     }
//     return memo;
// }
// print(arr.filter(baz).map(bar).reduce(fun, Number.MAX_VALUE));
// print(arr.filter(foo).map(bar).reduce(fun, Number.MAX_VALUE));
// print(arr.filter(foo).map(bar).reduce(wow, 0));
// print(arr.filter(baz).map(bar).reduce(wow, 0));

// class Calculator {
//     owner: string;
//     constructor(owner?: string) {
//         if (owner !== undefined) {
//             this.owner = owner;
//         }
//     }
//     add(a: number, b:number): number {
//         return a + b;
//     }
//     multiply(a: number, b?: number): number {
//         if (b !== undefined) {
//             return a * b;
//         }
//         return a;
//     }
//     foo(a: number, b: number): number {
//         return a + b / 2;
//     }
// }

// function multiply(a: number, b: number): number {
//     return a * b;
// }
// function foo(a: number, b: number): number {
//     return (a + b) / 2;
// }

// function main(): void {
//     let c: Calculator = new Calculator();
//     let d: Calculator = new Calculator("kris");
//     print(d.multiply(2));
//     print(d.owner + c.add(100, 10));
//     print(c.foo(4, 4) + d.foo(4, 4));
//     print(foo(4, 4) + d.foo(4, 4));
// }

// main();

// class Circle {
//     radius: number;
//     color: string | undefined;
//     center: number = 0;
//     constructor(radius: number, center: number, color?: string) {
//         this.radius = radius, this.center = center, this.color = color;
//     }
// }

// let c1: Circle = new Circle();

// let counta: number = 0;
// let countb: number = 0;
// let countc: number = 0;
// let countd: number = 0;
// let counte: number = 0;

// function foo (num: number): number {
//     if (num === 1) {
//         return 1;
//     } else {
//         counta = counta + 1;
//         return num + foo(num - 2);
        
//     }
// }
// function bar (str: string): boolean {
//     print(str);
//     countb++;
//     if (str.length === 0) {
//         countc++;
//         return true;
//     }
//     if (str[0] !== str[str.length - 1]) {
//         return false;
//     }
//     countd++;
//     return bar(str.slice(1, str.length - 1));
// }

// function h(str: string, search: string): number {
//     print(str);
//     if (str.length === 0) {
//         return 0;
//     } else {
//         if (str.slice(0, 1) === search) {
//             return 1 + h(str.slice(1), search);
//         } else {
//             counte++;
//             return h(str.slice(1), search);
//         }
//     }
// }

// print(foo(9));
// print(bar("abcdba"));
// print(h("comp110", "1"));
// print(bar("101101"));
// print(counta);
// print(countb);
// print(countc);
// print(countd);
// print(counte);

// function baz(num: number): void {
//     for (let i: number = num; i > 0; i = i - 2) {
//         print(i);
//     }
// }

// function baz(num: number): void {
//     if (num <= 0) {
//         print(0);
//     } else {
//         print(num);
//         baz(num - 2);
//     }
// }

// function baz(num: number): void {
//     if (num > 0) {
//         print(num);
//         baz(num - 2);
//     }
// }

// baz(1);
// baz(-5);
// baz(10);
// baz(9);

// class Student {
//     name: string;
//     pid: number;
//     major: string;
//     minor: string | undefined = "N/A";
//     constructor(name: string, pid: number, major: string, minor?: string) {
//         this.name = name; this.pid = pid; this.major = major; this.minor = minor;
//     }
// }
// let adam: Student = new Student("Adam", 123456789, "CS", "BUSI");

// class Node {
//     data: string = "";
//     next: Node | null = null;
// }

// function recurse(head: Node, s: string): boolean {
//     if (head.next !== null) {
//         if (head.data === s) {
//             return true;
//         } else {
//             recurse(head.next, s);
//         }
//     }
//     return false;
// }

// let a: Node = new Node();
// a.data = "a";
// let b: Node = new Node();
// b.data = "b";
// a.next = b;
// let c: Node = new Node();
// c.data = "c";
// b.next = c;
// c.next = null;

// print(recurse(a, "b"));

// let count: number = 0;

// function f1(arr: number[], n: number): void { 
//     if (n === 1) { 
//         return; 
//     } 
//     for (let i: number = 0; i < n - 1; i++) { 
//         if (arr[i] > arr[i + 1]) {
//             count++; 
//             let a: number = arr[i]; 
//             arr[i] = arr[i + 1]; 
//             arr[i + 1] = a; 
//         } 
//     } 
//     f1(arr, n - 1); } 

// function main(): void { 
//     let arr: number[] = [12, 110, 99, 55, 43, 55]; 
//     f1(arr, arr.length);
//     print(arr); // part e 
//     print(count);
// }

// main();

// let a: string[][] = [["foo"], [""]];

// class Square {
//     symbol: string;

//     constructor() {
//         this.symbol = "";
//     }
// }

// class Board {
//     squares: Square[][];

//     constructor() {
//         this.squares = [
//             [new Square(), new Square(), new Square],
//             [new Square(), new Square(), new Square],
//             [new Square(), new Square(), new Square]
//         ];
//     }
// }

// class Player {
//     name: string;
//     symbol: string = "X" || "O";

//     constructor(name: string, symbol: string) {
//         this.name = name; 
//         this.symbol = symbol;
//     }
// }

// class Game {
//     board: Board;
//     p1: Player;
//     p2: Player;

//     constructor (board: boolean, p1: number, p2: number, markSquare: boolean) {
//         this.board = new Board; 
//         this.p1 = new Player("Adam", "X");
//         this.p2 = new Player("Loser", "O");
//     }

//     markSquare (player: Player, row: number, col: number): boolean {
//         if (row < 0 || row > 2 || col < 0 || col > 2) {
//             return false;
//         } else {
//             let square: Square = this.board.squares[row][col];
//             if (square.symbol !== "") {
//                 return false;
//             } else {
//                 square.symbol = player.symbol;
//                 // Check winner
//                 return true;
//             }
//         }
//     }
// }

// let arr: string[][] = [["a", "b", "c"], ["d", "e", "f"]];

// for (let row: number = 0; row < arr.length; row++) {
//     for (let col: number = 0; col < arr[0].length; col++) {
//         arr[row][col] = arr[row][col] + row + col;
//         // print(arr[row][col]);
//     }
// }

// let a: number = arr.length;
// let b: number = arr[0].length;
// let c: string[] = arr[1];
// let d: string = arr[1][1];
// print(a);
// print(b);
// print(c);
// print(d);

// class Television {
//     powerOn: boolean = false;
//     channel: number;
//     volume: number;

//     constructor(channel: number, volume: number) {
//         this.channel = channel;
//         this.volume = volume;
//     }

//     turn(): void {
//         this.powerOn = !this.powerOn;
//     }

//     switchTo(channel: number): void {
//         if (this.powerOn) {
//             this.channel = channel;
//         }
//     }

//     turnUpVolume(amount: number): void {
//         if (this.powerOn) {
//             this.volume = this.volume + amount;
//         }
//     }
// }

// function main(): void {
//     let tv: Television = new Television(1, 10);
//     print(tv.channel);
//     print(tv.volume);
//     tv.turn();
//     tv.switchTo(35);
//     tv.turnUpVolume(-8);
//     print(tv.channel);
//     print(tv.volume);
// }

// main();

// class Person {
//     name: string;
//     inchesTall: number;
//     hairy: boolean;

//     constructor(name: string, inch: number, hair: boolean) {
//         this.name = name;
//         this.inchesTall = inch;
//         this.hairy = hair;
//     }
// }

// let people: Person[] = [
//     new Person("Jim", 75.2, false),
//     new Person("Michael", 68.3, true),
//     new Person("Dwight", 74.4, true),
//     new Person("Pam", 66.2, false),
//     new Person("Angela", 60.1, true),
//     new Person("Kelly", 64.7, false),
//     new Person("Kevin", 72.8, true),
//     new Person("Andy", 72, false),
//     new Person("Stanley", 70, false),
//     new Person("Phyllis", 68.6, false),
//     new Person("Oscar", 68.9, false)
// ];

// print(people[4][2]);
// people[4][2] = false;
// people[4].hairy = false;
// print(people[4].hairy);

// function findAngela(): Person {
//     let howShort: number = people[0].inchesTall;
//     // let newName: string = people[0].name;
//     let newSoul: Person = people[0];
//     for (let row: number = 0; row < people.length; row++) {
//         if (people[row].inchesTall < howShort) {
//             howShort = people[row].inchesTall;
//             // newName = people[row].name;
//             newSoul = people[row];
//         }
//     }
//     return newSoul;
// }

// print(findAngela().name);

// function getHeight(person: Person): number {
//     return person.inchesTall;
// }

// function add(a: number, b: number): number {
//     return a + b;
// }

// let leaningTower: number[] = people.map(getHeight);
// let sidewaysTower: number = leaningTower.reduce(add, 0);
// let highTower: number = sidewaysTower / 12;
// print(leaningTower);
// print(sidewaysTower);
// print(highTower);

// class Node {
//     data: number;
//     next: Node | null = null;
// }

// function oddEvenDiff(head: Node | null): number {
//     if (head === null) {
//         return odd - even;
//     } else if (head.data % 2 === 1) {
//         odd++;
//         // print(odd);
//         return oddEvenDiff(head.next);
//     } else {
//         even++;
//         // print(even);
//         return oddEvenDiff(head.next);
//     }
// }

// function oddEvenDiff(head: Node | null): number {
//     let dif: number = 0;
//     if (head === null) {
//         return 0;
//     } else if (head.next === null) {
//         return 0;
//     } else if (head.next.data % 2 === 0) {
//         dif--;
//         return dif + oddEvenDiff(head.next);
//     } else if (head.next.data % 2 !== 0) {
//         dif++;
//         return dif + oddEvenDiff(head.next);
//     }
//     return dif;
// }

// let start: Node = new Node();
// let a: Node = new Node();
// a.data = 1;
// let b: Node = new Node();
// b.data = 2;
// let c: Node = new Node();
// c.data = 4;
// let d: Node = new Node();
// d.data = 8;

// start.next = a;
// a.next = b;
// b.next = c;
// c.next = d;
// d.next = null;

// print(oddEvenDiff(start));