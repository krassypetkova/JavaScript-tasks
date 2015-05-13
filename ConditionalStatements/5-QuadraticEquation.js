/*
Write script that prompts the user to write number and the script prints the
numbers between 1 and this number.
*/
var a = 3, b = -1, c = 5,
    disc = Math.sqrt(Math.pow(b, 2) - 4*a*c),
    x, x1, x2;


if (disc === 0) {
    x = -b / (2 * a);
    console.log("Your quadratic equation has one double real root. x =  " + x);
} else if (disc > 0) {
    x1 = -b + Math.sqrt(Math.pow(b, 2) - 4*a*c) / (2 * a);
    x2 = -b - Math.sqrt(Math.pow(b, 2) - 4*a*c) / (2 * a);
    console.log("Your quadratic equation has two double real roots. x1 = " + x1 + ", x2 = " + x2);
} else {
    console.log("Your quadratic equation does not have a double real root!");
}
