//!! Linear traversal of array

// function printArray(a, size) {
//   if (size == 0) {
//     return;
//   }
//   console.log(a);
//   printArray(a + 1, size - 1);
// }

// printArray(6, 6);

//!! factorial

// function factorial(n) {
//   if (n === 1) {
//     return 1;
//   }
//   return n * factorial(n - 1)
// }

// const ans = factorial(6);
// console.log(ans);

//!! fibonacci
// function fibonacci(n) {
//   if (n <= 1) {
//     return n;
//   }
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }
// const ans = fibonacci(5);
// console.log(ans);

//!! maximum in array

// function findMax(arr, size) {
//   if (size === 1) {
//     return arr[0];
//   }
//   return Math.max(arr[size], findMax(arr, size - 1));
// }

// let arr = [1, 4, 45, 6, -50, 10, 2];
// let size = arr.length - 1;

// const ansd = findMax(arr, size);
// console.log(ansd);

//!! climb stair

function climbStairs(n) {
  // base class
  if (n === 0 || n === 1) {
    return 1;
  }
  return climbStairs(n - 1) + climbStairs(n - 2);
}
const ans = climbStairs(3);
console.log(ans);
