/*
Write script that shows the chars "+" or "-" from multiplication of tree integers.
*/
var n1 = 1,
    n2 = -4,
    n3 = -7,
    multiplication = n1 * n2 * n3;

if (multiplication < 0) {
    console.log("-");
} else if (multiplication > 0) {
    console.log("+");
} else if (multiplication === 0) {
    console.log("0");
}
