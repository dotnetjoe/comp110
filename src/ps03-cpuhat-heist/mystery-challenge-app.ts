import "introcs";

// TODO: Add Honor Pledge Here

import { Message } from "./Message";

function main(): void {
    promptCSV("Enter the data file...", Message, process);
}

function process(data: Message[]): void {
    
    show(data);

}

/**
 * This helper function will print out an array of messages when you call it.
 */
function show(data: Message[]): void {
    for (let i: number = 0; i < data.length; i++) {
        print(data[i].time + " " + data[i].who + ": " + data[i].text);
    }
}


main();