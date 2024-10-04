// function Reverse a String 
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("hello"));
// function Count Characters
function countCharacters(str) {
    return str.replace(/\s/g, '').length; // Removes spaces and returns the length
}
console.log(countCharacters("hello world"));
// function  Capitalize Words
function capitalizeWords(sentence) {
    return sentence
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}
console.log(capitalizeWords("hello world"));
// function Find Maximum and Minimum
function findMaximum(arr) {
    return Math.max(...arr);
}

function findMinimum(arr) {
    return Math.min(...arr);
}
console.log(findMaximum([1, 2, 3, 4, 5])); 
console.log(findMinimum([1, 2, 3, 4, 5])); 
// function Sum of Array 
function sumOfArray(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}
console.log(sumOfArray([1, 2, 3, 4, 5]));
// function Filter Array
function filterArray(arr, condition) {
    return arr.filter(condition);
}
const isEven = (num) => num % 2 === 0;
console.log(filterArray([1, 2, 3, 4, 5], isEven));
// function Factorial
function factorial(n) {
    if (n < 0) return undefined; // Factorial is not defined for negative numbers
    if (n === 0 || n === 1) return 1; // Base case
    return n * factorial(n - 1); // Recursive case
}
console.log(factorial(5)); 
// function Prime Number Check
function isPrime(num) {
    if (num <= 1) return false; // 0 and 1 are not prime numbers
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // Found a factor, not prime
    }
    return true; // No factors found, it is prime
}
console.log(isPrime(11));
console.log(isPrime(4));
// function Fibonacci Sequence
function fibonacci(n) {
    const fib = [0, 1]; // Starting values
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]; // Next term is the sum of the last two
    }
    return fib.slice(0, n); // Return only the requested number of terms
}
console.log(fibonacci(10));

