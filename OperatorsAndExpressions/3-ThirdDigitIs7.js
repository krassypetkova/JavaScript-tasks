/*
Write an expression that checks for a given integer if its third digit (right to
 left) is 7.
  -Divide the number by 100 and save it in a new variable, which then divide by 10
 and take the remainder. The remainder of the division by 10 is the third digit
 of the original number. Check if it is equal to 7
*/
var number = prompt("What is your number:");
var newNumber = number / 100;

if (newNumber % 10 === 7) {
    console.log("The third digits is 7!");
} else {
    console.log("The third digits is not 7!");
}
