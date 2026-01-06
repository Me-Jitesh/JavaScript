/**
 * Why "Inner"? JavaScript looks for variables in this order:
1. **Current scope** (inner function) → Found `name = "Inner"` 
2. If not found, check **outer scope** (outer function)
3. If not found, check **global scope**
4. If still not found → ReferenceError

This is called the **Scope Chain**.
 */

const level1 = "Global";

function outer() {
    const level2 = "Outer";

    function middle() {
        const level3 = "Middle";

        function inner() {
            const level4 = "Inner";

            // Can access ALL outer scopes!
            console.log(level4);  // "Inner"
            console.log(level3);  // "Middle"
            console.log(level2);  // "Outer"
            console.log(level1);  // "Global"
        }

        inner();
    }

    middle();
}

outer();
