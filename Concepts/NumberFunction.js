let str = "99.5";
let num = Number(str); // 99.5
console.log(num)

let strSpaces = "   100   ";
let numSpaces = Number(strSpaces); // 100
console.log(numSpaces)

let invalidStr = "apple";
let notANumber = Number(invalidStr); // NaN
console.log(notANumber)