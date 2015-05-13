/*
Write a script that checks if a given number n (1 < n < 100) is a prime number
(i.e. it is divisible without remainder only to itself and 1).
  -Read about loops in the Internet or in the chapter вЂњLoopsвЂќ. Use a loop and
 check the number for divisibility by all integers from 1 to the square root of
 the number. Since n < 100, you can find in advance all prime numbers from 1 to
 100 and checks the input over them. The prime numbers in the range [1вЂ¦100]
 are: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67,
 71, 73, 79, 83, 89 and 97.
*/

var i = prompt("Enter a number between 1 and 100: ");

for (int i = 2; i <= Math.Sqrt(number); i++) {
    if ((number % i) == 0) {
      console.log("The number is not prime");
    } else {
      console.log("The number is prime");
    }
