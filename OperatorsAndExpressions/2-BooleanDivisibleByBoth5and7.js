/*
Write a Boolean expression that checks whether a given integer is divisible by
both 5 and 7.
  -Use a logical "AND" (&& operator) and the remainder operation % in division.
   You can also solve the problem by only one test: the division of 35 (think why).
*/
var number = prompt("What is your number:");

if (number % 5 === 0 && number % 7 === 0) {
    console.log("The statement is true.");
} else {
    console.log("The statement is false.");
}
