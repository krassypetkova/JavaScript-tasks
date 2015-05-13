/*
Write script that prompts the user to write integer number between 0 and 9 and
prints the name(string representation) of the number.
-You can use switch or if else statement
*/

var number = prompt("Choose a number from 0 to 9:");

switch (number) {
  case '0':
    console.log("Zero");
    break;
  case '1':
    console.log("One");
    break;
  case '2':
    console.log("Two");
    break;
  case '3':
    console.log("Three");
    break;
  case '4':
    console.log("Four");
    break;
  case '5':
    console.log("Five");
    break;
  case '6':
    console.log("Six");
    break;
  case '7':
    console.log("Seven");
    break;
  case '8':
    console.log("Eight");
    break;
  case '9':
    console.log("Nine");
    break;
  default:
    console.log("Your number is not from 0 to 9!");
}
