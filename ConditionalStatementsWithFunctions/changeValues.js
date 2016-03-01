/*1. Write an if-statement that takes two integer variables and
 exchanges their values if the first one is greater than the
 second one. */

function changeValues(a, b) {
    var c, exchangedResult;

    if (a > b) {
        c = a;
        a = b;
        b = c;

        //console.log("a = " + a);
        //console.log("b = " + b);
        exchangedResult = {
            a: a,
            b: b
        }
        console.log(exchangedResult);
        return exchangedResult;
    } else if (a === b) {
        console.error("Sorry a = b. The condition is not fulfilled!")
    } else {
        console.error("Sorry a < b. The condition is not fulfilled!")
    }
}
changeValues(20, 2); // Object {a: 2, b: 20}
changeValues(3, -40); // Object {a: -40, b: 3}
changeValues(-3, -5); // Object {a: -5, b: -3}
changeValues(6, 9); // Sorry a < b. The condition is not fulfilled!
