/*
Write script with conditional statement that checks the values of two integer
variables and exchange their values if the value of first variable is bigger than
the value of the second variable
*/

var a = 6;
var b = 4;
var c;

if(a > b) {
    c = a;
    a = b;
    b = c;
    console.log("a = " + a);
    console.log("b = " + b);
}  else if(a === b) {
     console.log("Sorry, a = b. The condition is not fulfilled!");
 } else {
    console.log("Sorry, a < b. The condition is not fulfilled!");
}
