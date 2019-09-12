// TODO
let text: HTMLInputElement = document.getElementById("text") as HTMLInputElement;
let characters: HTMLElement = document.getElementById("characters") as HTMLElement;
let form: HTMLFormElement = document.getElementById("form") as HTMLFormElement;
let tweets: HTMLElement = document.getElementById("tweets") as HTMLElement;

export function main(): void {
    // TODO
    let body: HTMLElement = document.body;
    body.style.background = "gray";
    text.onkeyup = updateLength;
    form.onsubmit = postTweet;

    // text.value = "HELLO, WORLD";
    // characters.innerText = "HELLO WORLD";
}

function updateLength(event?: KeyboardEvent): void {
    characters.innerText = text.value.length + " characters";
    characters.style.fontSize = text.value.length + "px";
}

function postTweet(event: Event): void {
    event.preventDefault();

    let tweet: HTMLParagraphElement = document.createElement("p");
    tweet.innerText = text.value;
    tweets.appendChild(tweet);

    text.value = "";
    updateLength();
}

main();