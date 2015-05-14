/*
Write a script that prints on the console the first 100 numbers in the
Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233;
-More about the Fibonacci sequence can be found in Wikipedia at:
http://en.wikipedia.org/wiki/Fibonacci_sequence.
-For the solution of the problem use 2 temporary variables in which store the
last 2 calculated values and with a loop calculate the rest (each subsequent
number in the sequence is a sum of the last two). Use a for-loop to implement
the repeating logic (see the chapter "Loops").
*/
var a = 0;
var b = 1;
console.log(a + b);
var c

for(var i = 0; i < 100 ; i++) {
    c = a + b;
    console.log(c);

    a = b;
    b = c;
}

number
