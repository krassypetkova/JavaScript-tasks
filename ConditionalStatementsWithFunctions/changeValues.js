/*1. Write an if-statement that takes two integer variables and
 exchanges their values if the first one is greater than the
 second one. */

function changeValues(a, b) {
    var c;

    if (a > b) {
        c = a;
        a = b;
        b = c;

        console.log("a = " + a);
        console.log("b = " + b);
    } else if (a === b) {
        console.error("Sorry a = b. The condition is not fulfilled!")
    } else {
        console.error("Sorry a < b. The condition is not fulfilled!")
    }
}
changeValues(20, 2);