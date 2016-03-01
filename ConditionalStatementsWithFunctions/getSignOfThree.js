/*2. Write a program that shows the sign (+ or -) of the product of
 three real numbers, without calculating it.Use a sequence of if
 operators*/

function getSignOfThree (a, b, c) {
    var sum = a + b + c;

    if (sum > 0) {
        console.log("The sign is '+'");
        return "+";
    } else if (sum === 0)  {
        console.log("The result is 0. The number zero has no sign!");
        return 0;
    } else {
        console.log("The sign is '-'");
        return "-";
    }
}

getSignOfThree(0, 0, 0); // The result is 0. The number zero has no sign
getSignOfThree(1, 2, 3); // The sign is '+'
getSignOfThree(-4, -5, -6); // The sign is '-'
getSignOfThree(-7, 8, 9); // The sign is '+'
