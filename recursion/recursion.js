// function recursive(i) {
//   if (i === 5) {
//     return false;
//   }

//   console.log("called");
//   return recursive(i + 1);
// }
// let i = 0;
// recursive(i);

//!! multiplication in an array

// function multiply(arr) {
//   // base condiiton
//   if (arr.length <= 0) {
//     return 1;
//   }
//   return arr[arr.length - 1] * multiply(arr.slice(0, arr.length - 1));
// }

// console.log(multiply([1, 2, 3, 4, 5]));

//!! factorial question
///? n = 5 => 5 * 4 * 3*2 * 1

// function fact(n) {
//   if (n === 1) {
//     return 1;
//   }
//   return n * fact(n - 1);
// }

// console.log(fact(5));

//!! range of number
function range(startNum, endNum) {
  if (startNum > endNum) {
    return [];
  }
  return [startNum].concat(range(startNum + 1, endNum));
}

console.log(range(0, 5));
