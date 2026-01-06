// Lexical scope = Scope is determined by where you write the code, not where you call it.

const name = "Global";

function outer() {
    const name = "Outer";

    function inner() {
        const name = "Inner";
        console.log(name);  // Which "name" will this print?
    }

    inner();
}

outer();  // "Inner"
