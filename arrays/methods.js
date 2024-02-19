//!! map method (creates a new array)
// const number = [1, 2, 3, 4, 5];
// number.map((item, index, array) => {
//   console.log(item, index, array);
// });

//!! filter method (create new array)
// const number = [1, 2, 3, 4, 5];
// const newNums = number.filter((item, index, array) => {
//   return item > 4;
// });
// console.log(newNums);
// console.log(number);

//!! reduce (no new array created)
// const numbers = [1, 2, 3, 4, 5];
// const resu = numbers.reduce((prev, curr) => {
//   return prev + curr;
// }, 0);

// console.log(resu);

//!! some
// const number = [1, 2, 3, 4, 5, 6];
// const result = number.some((element) => {
//   return element > 5;
// });
// console.log(result);

//!! every
// const number = [1, 2, 3, 4, 5, 6];
// const result = number.every((element) => {
//   return element > 0;
// });
// console.log(result);

//!! Find

// const numbers = [1, 100, 20, -30];
// const result = numbers.findIndex((num) => {
//   return num < 0;
// });

// console.log(result);

//!! spread and rest (creates a new array)
//?? sread
// const num1 = [1, 2, 3, 4];
// const num2 = [2, 3, 4, 5, 67, 7];

// const ans = [...num1, ...num2]; // spread
// console.log(ans);

//?? rest
// function add(...numbers) {
//   console.log(numbers);
// }
// num1 = [1, 2, 3, 34, 4, 45];
// num2 = [7, 8, 8, 5, 3];

// add(...num1, ...num2, "3", "sagar");

//!! concat (creates a new array)
// const num1 = [1, 2, 3, 4, 5];
// const num2 = [2, 3, 54, 56];
// const newArray = num1.concat(num2);
// console.log(newArray);

//!! slice (creates a new array with shalllow copy )
// const num = [1, 2, 3, 4, 5, 6];
// const newName = num.slice(2, 5);
// console.log(newName);
// console.log(num);

//!! splice()

// const num = ["sgaar", "reddy", 5, 3, 2, "wassup"];
// num.splice(2, 5);
// console.log(num);

//!! fill

// const num = [1, 2, 3, 4, 5, 6];
// num.fill(0, 3);
// console.log(num);

//!! flat method

// const num = [
//   [1, 2, 3],
//   [23, 45],
// ];
// const newAt = num.flat();
// console.log(newAt);

//!! reverse
// const num = [1, 2, 3, 4, 5];
// num.reverse();
// console.log(num);

//!! sort
// const unsorted = [3, 4, 5, 6, 1, 2];
// unsorted.sort((a, b) => {
//   return b - a;
// });
// console.log(unsorted);
