/** 
 * Author: Adam Alston
 * ONYEN: aalston9
 * UNC Honor Pledge: I certify that no unauthorized assistance has been received 
 * or given in the completion of this work. I certify that I understand and 
 * could now rewrite on my own, without assistance from course staff,  
 * the problem set code I am submitting.
 */

 import "introcs";

 export function main(): void {
     image("https://media.giphy.com/media/l2R0dx8PJz0NyWoow/giphy.gif");
     print("How will Kris's path to his first comp exam effect his performance?");
     print("a. He spends 30 hours in Davis preparing for his first exam");
     print("b. He goes to a party every night during the week leading up to his first exam");
     promptString ("What does he do?", forkMain);
 }

 export function forkMain(choice: string): void {
    clear();
    if (choice === "a") {
        storyA();
    } else if (choice === "b") {
        storyB();
    } else {
        main(); 
    }
 }

 export function storyA(): void {
     image("https://media.giphy.com/media/3ornjKv4yWgPJdYT8A/giphy.gif");
     print("Kris pores over class related material for 30 hours in Davis.");
     print("How much sleep does he get the night before the exam?");
     print("1. A full nights rest");
     print("2. Only 4 hours of sleep");
     promptNumber("How much?", forkA);
 }

 export function forkA(choice: number): void {
    clear();
    if (choice === 1) {
        storyC();
    } else if (choice === 2) {
        storyD();
    } else {
        storyA(); 
    }
 }

 export function storyB(): void {
     image("https://media.giphy.com/media/3ornjKv8ySc9zKebza/giphy.gif");
     print("Kris is the party animal that you wanted him to be.");
     print("How will he study for the exam?");
     print("1. Wait until the last second and cram as much as possible");
     print("2. Use every spare second to study");
     promptNumber("What does he do?", forkB);
}

 export function forkB(choice: number): void {
    clear();
    if (choice === 1) {
        storyE();
    } else if (choice === 2) {
        storyF();
    } else {
        storyB();
    }
}

 export function storyC(): void {
     image("https://media.giphy.com/media/l2Sq6d153JjrBVgys/giphy.gif");
     print("Kris wakes up on exam morning well rested after a week of studying");
     print("He does excellent on his exam and earns an A!");
     promptString("Would you like to play with Kris's life again? Type 'yes' or 'no'.", playAgain);
    }

 export function storyD(): void {
     image("https://media.giphy.com/media/l2JJMBDbvWmVUy1G0/giphy.gif");
     print("Kris negated all of his studying by not getting enough sleep the night before his exam");
     print("He scores a C and his grade in the class plummets");
     promptString("Would you like to play with Kris's life again? Type 'yes' or 'no'.", playAgain);
    }

 export function storyE(): void {
     image("https://media.giphy.com/media/26FPzgftlRfgwkEw0/giphy.gif");
     print("Kris retained little knowledge from his cramming session while also losing sleep");
     print("He does poorly on his exam because of his lack of distributed studying and rest");
     promptString("Would you like to play with Kris's life again? Type 'yes' or 'no'.", playAgain);
    }

 export function storyF(): void {
     image("https://media.giphy.com/media/l0HlAOmz4YBTLZcTm/giphy.gif");
     print("Kris scores a C on his exam");
     print("His lack of overall preparedness will now put his scholarship into jeopardy");
     promptString("Would you like to play with Kris's life again? Type 'yes' or 'no'.", playAgain);
}

 export function playAgain(choice: string): void {
    if (choice === "yes") {
        clear();
        main();
    } else {
        clear();
        print("Thank you for changing Kris's life forever");
        image("https://media.giphy.com/media/3o7abltFRaBhTyvrmU/giphy.gif");
    }
 }

 main();