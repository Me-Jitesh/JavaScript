// Closure = A function that remembers variables from its outer scope even after the outer function has finished executing

function outer() {
    const message = "Hello";

    function inner() {
        console.log(message);  // Accesses outer's variable
    }

    return inner;  // Return the function
}

const myFunction = outer();  // outer() finishes executing
myFunction();  // "Hello" - but how does it still remember "message"?


/** Why Closures Exist
**Without closures:** Functions would only access their own variables and globals.
**With closures:** Functions can "carry" their environment with them!
*/

function createCounter() {
    let count = 0;  // Private variable

    return function() {
        count++;  // Accesses outer variable
        return count;
    };
}

const counter = createCounter();

console.log(counter());  // 1
console.log(counter());  // 2
console.log(counter());  // 3

// "count" is NEVER directly accessible!
console.log(count);  // ❌ ReferenceError
