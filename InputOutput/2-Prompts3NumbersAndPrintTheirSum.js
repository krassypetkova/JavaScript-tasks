/*
Write a script that prompts the user to write an integer number n. After 
that prompts n numbers from the console and prints their sum.
-You can use prompt()
*/
 var number = prompt("Enter how numbers you want to sum:");
 var sum = 0;

 for(i = 1; i <= number; i++) {
     sum += parseInt(prompt("Enter number " + i + ":"));
 }
 console.log(sum);
