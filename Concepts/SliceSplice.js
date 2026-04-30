const arr = [10, 20, "Vandu", 10.5, true];

console.log("Array :: ", arr);

const subArr1 = arr.slice(1, 3);
console.log("Slice Sub Array :: ", subArr1);

const subArr2 = arr.splice(1, 3);
console.log("Splice Sub Array :: ", subArr2);
console.log("Array After Splice :: ", arr);
