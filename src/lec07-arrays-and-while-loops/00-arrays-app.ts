import "introcs";

print("Array usage examples");

// 1. Declare an array of strings named words
let words: string[];

// 2. Initialize the array to an empty array
words = [];

// 3. Assign values to elements by index
words[0] = "Hello";
words[1] = "world";

// 4. Print elements
print(words[0]);
print(words[1]);

// 5. Print the array
print(words);

// 6. Print the array's length property
print("The length of words is " + words.length);

// 7. Declare and initialize an array of numbers, prefilled
let primes: number[] = [2, 3, 5];
print(primes);

// 8. Declare a sum variable and add up the elements of primes
let sum: number;
sum = primes[0] + primes[1] + primes[2];
print(sum);