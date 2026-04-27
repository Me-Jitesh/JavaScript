const numbers = [5, 2, 1, 4, 3];

secondLargest(numbers);

function secondLargest(arr) {
  //   const sorted = arr.sort();
  const sorted = arr.sort((a, b) => b - a);

  let res = sorted[1];

  console.log(res);
}
