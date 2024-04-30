// Q1)Rewrite the following function as an arrow function:
/******************************
	function greet(name) {
	  return `Hello, ${name}!`;
	}
********************************/

let user1 = "Shahad";
let greet = (firstName) => "Hello, " + firstName;

console.log(greet(user1));

// side example

let sumThenDouble = (x, y) => {
  let sum = x + y;
  return sum * 2;
};

// console.log(sumThenDouble(2, 4));

// let isGreaterThan20 = (x, y) => {
//   let sum = x + y;
//   if (sum > 20) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(isGreaterThan20(20, 4));

// Q2) Write a simple arrow function that takes two parameters and returns their sum.

let meal1 = 100;
let meal2 = 200;
let calories = (x, y) => x + y;

console.log(calories(meal1, meal2));

// Q3) Write a simple arrow function that squares a number.

let squredNumber = (num) => num ** 2;

console.log(squredNumber(5));

// Q4) [🌶️🌶️] Create an arrow function that takes an array of numbers and
// returns a new array with each number squared.
