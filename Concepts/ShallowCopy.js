console.error("Array Shallow Copy with 1D")

let arr = [1, 2, 3, 5, 8]

let shallow_1D_spread = [...arr]
let shallow_1D_slice = arr.slice()
let shallow_1D_Array = Array.from(arr)
let shallow_1D_concat = [].concat(arr)

console.log(arr)
console.log(shallow_1D_spread)

shallow_1D_spread.push(2)

console.log(arr)
console.log(shallow_1D_spread)


console.error("Array Shallow Copy with 2D")

let arr_2d = [1, [2, 3], 5, 8]

let shallow_2D_spread = [...arr_2d]
let shallow_2D_slice = arr_2d.slice()
let shallow_2D_Array = Array.from(arr_2d)
let shallow_2D_concat = [].concat(arr_2d)

console.log(arr_2d)
console.log(shallow_2D_spread)

shallow_2D_spread[4] = 'A'
shallow_2D_spread[1][0] = 'B'

console.log(arr_2d)
console.log(shallow_2D_spread)


// Object Shallow Copy Without Nesting and With Nesting