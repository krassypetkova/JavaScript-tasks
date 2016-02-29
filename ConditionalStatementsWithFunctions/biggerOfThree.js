/*3. Write a program that finds the biggest of three integers,
 using nested if statements*/

function biggerOfThree (a, b, c) {
    if (a > b && a > c) {
        console.log("a = " + a + "." + " A is greater!");
    } else if (b > a && b > c) {
        console.log("b = " + b + "." + " B is greater!");
    } else if (c > a && c > b) {
        console.log("c = " + c + "." + " C is greater!");
    } else {
        console.error("a = b = c. The condition is not fulfilled!");
    }
}
biggerOfThree(10, 8, 2);
