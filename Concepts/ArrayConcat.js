const arr = [10, 7, 21, 96, 3, 487, 0]
const arr2 = ["Vandu", "Jitu", { locale: "Delhi", home: "Bilaspur" }, true]
const arr3 = [100, 700, 201, 906, 300, 487, 500]

// arr.push(arr2)
// console.log(arr)

// let merged = [arr, arr2, arr3]
// console.log(merged)

// let spread = [...arr, ...arr2, ...arr3]
// console.log(spread)

let concated = arr.concat(arr2, arr3);
console.log(concated)