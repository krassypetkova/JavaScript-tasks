/*
Write a script that propt the user to give two integer numbers (int) and
prints how many numbers between them exist,such that the remainder of their
division by 5 is 0. Example: in the range (14, 25) there are 3 such numbers:
15, 20 and 25.
-There are two approaches for solving the problem:
-First approach: Use mathematical tricks for optimized calculation based on the
fact that every fifth number is divisible by 5. Think how to implement this
correctly and about the borderline cases.
-The second approach is easier but it works slower. With a for-loop each number
 within the given range can be checked. You should read in Internet or in the
 chapter "Loops" how to use for-loops.
*/

var a = prompt("Enter the first number a:");
var b = prompt("Enter the second number b:");
var count = 0;

for (var i = a; i <= b; i++) {
    if (i % 5 === 0) {
        console.log(i);
        count ++;
    }
}

console.log("There are " + count + " such numbers.");
