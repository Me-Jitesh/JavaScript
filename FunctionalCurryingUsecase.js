function multiplyByN(x) {

    return function (y) {

        return x * y

    }
}

const multiplyBy4 = multiplyByN(4)(8);
const multiplyBy5 = multiplyByN(5)(12);

console.log(multiplyBy4)
console.log(multiplyBy5)