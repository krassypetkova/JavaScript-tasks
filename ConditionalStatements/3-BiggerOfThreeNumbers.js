/*
Write script that find the bigger of three numbers.
*/

var a = 2;
var b = 6;
var c = 10;

if(a > b && a > c) {
    console.log("a = " + a + "." + " A is greater!");
} else if(b > a && b > c) {
    console.log("b = " + b + "." + " B is greater!");
} else if(c > a && c > b) {
    console.log("c = " + c + "." + " C is greater!");
}  else {
    console.log("a = b = c. The condition is not fulfilled!");
}
