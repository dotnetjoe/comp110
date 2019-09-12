import "introcs";

function palindrome(s: string): string {
    if (s === "") {
        return s;
    } else {
         return s[0] + palindrome(s.slice(1, s.length)) + s[0];
    }
}

let p: string = "hello";
let output: string = "hellolleh";

print(palindrome("hello"));