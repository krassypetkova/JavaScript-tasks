/*2. Write a program that shows the sign (+ or -) of the product of
 three real numbers, without calculating it.Use a sequence of if
 operators*/

function getSignOfThree (a, b, c) {
    var sum = a + b + c;

    if (sum > 0) {
        console.log("The sign is '+'");
    } else if (sum === 0)  {
        console.log("The result is 0. The number zero has no sign!");
    } else {
        console.log("The sign is '-'");
    }
}
getSignOfThree(0, 0, 0);
