/*3. Write a program that finds the biggest of three integers,
 using nested if statements*/

function biggerOfThree (a, b, c) {
    if (a > b && a > c) {
        console.log("a = " + a + "." + " A is greater!");
        return a;
    } else if (b > a && b > c) {
        console.log("b = " + b + "." + " B is greater!");
        return b;
    } else if (c > a && c > b) {
        console.log("c = " + c + "." + " C is greater!");
        return c;
    } else {
        console.error("a = b = c. The condition is not fulfilled!");
    }
}
biggerOfThree(10, 8, 2); // 10
biggerOfThree(-5, 3, 20); // 20
biggerOfThree(-5, -3, -20); // -3
biggerOfThree(43786234, 8848484, 9999999999999); // 9999999999999
