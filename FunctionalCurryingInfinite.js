function multiplyN(x) {

    return function (y) {

        if (y) return multiplyN(x * y)

        return x;
    }
}

console.log(multiplyN(2)(4)(8)())