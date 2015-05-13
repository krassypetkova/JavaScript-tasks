/*
Write script that apply bonus points by given points. The points must be between 1 and 9 and there are several rules for applying:
 - If the points are between 1 and 3, multiply the points by 10.
 - If the points are between 4 and 6, multiply them by 100.
 - If the points are between 7 and 9, multiply them by 1000.
 - If the points are 0 or 9 print error message.
*/

var number = prompt("Enter a number:");

if (number >= 1 && number <= 3) {
    number *= 10;
    console.log(number);
} else if (number >= 4 && number <=6) {
    number *= 100;
    console.log(number);
} else if (number >= 7 && number <= 9) {
    number *= 1000;
    console.log(number);
} else if (number == 0 || number > 9) {
    console.log("The number is equal to zero or is greater than nine. Enter the number between 1 and 9!");
} else {
    console.log("The number is less than zero. Enter the number between 1 and 9!");
}
