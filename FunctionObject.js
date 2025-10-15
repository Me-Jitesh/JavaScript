var expect = function (val) {
    return {
        toBe: function (val2) {
            if (val === val2) return true;
            throw new Error("Not Equal");
        },
        notToBe: function (val2) {
            if (val !== val2) return true;
            throw new Error("Equal");
        }
    };
};

let toBe = expect(5).toBe(5);
let notToBe = expect(5).notToBe(null);

console.log(toBe)
console.log(notToBe)

