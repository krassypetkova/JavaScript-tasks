/*
Write a script that takes as input a four-digit number in format abcd (e.g. 2011)
and performs the following actions:
  -Calculates the sum of the digits (in our example 2+0+1+1 = 4).
  -Prints on the console the number in reversed order: dcba (in our example 1102).
  -Puts the last digit in the first position: dabc (in our example 1201).
  -Exchanges the second and the third digits: acbd (in our example 2101).
To get the individual digits of the number you can divide by 10 and take the
remainder of the division by 10:
a = num % 10;
b = (num / 10) % 10;
c = (num / 100) % 10;
d = (num / 1000) % 10;
*/
var num = 1234;

var a = num % 10;
var b = (num / 10) % 10;
var c = (num / 100) % 10;
var d = (num / 1000) % 10;

var sum = a + b + c + d;
var reverseOrder = a,b,c,d;
var theLastIsFirst = a,d,c,b;
var theThreeIsTwo = d,b,c,a;

console.log(sum);
console.log(reverseOrder);
console.log(theLastIsFirst);
console.log(theThreeIsTwo);
