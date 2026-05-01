let str1 = "vandita";
let str2 = "cbbc";

function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}

let res1 = isPalindrome(str1);
let res2 = isPalindrome(str2);

console.log(res1);
console.log(res2);
