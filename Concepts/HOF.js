/**
* Higher-order function is a function that either
1. Takes a function as an argument, OR
2. Returns a function as a result
*/

const numbers = [1, 2, 3, 4, 5];

// map is a higher-order function// It takes a function as an argument
const doubled = numbers.map(function (num) {
    return num * 2;
});

console.log(doubled); // [2, 4, 6, 8, 10]