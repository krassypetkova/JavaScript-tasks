/*
Write program that by given from the user type(number or string) to prompt the
user to write something from this type. If the type is number to increase the
number with 1 or if it is string to concatenate the symbol "*" at the end.
*/

var input = prompt("Enter number or string!");
debugger;
if (isNaN(parseInt(input))) {
    input += "*";
    console.log(input);
} else {
    var num = parseInt(input) + 1;
    console.log(num);
}
