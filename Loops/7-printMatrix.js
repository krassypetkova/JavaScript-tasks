/*
Write script that prints matrix  by given number N like the examples above.

N = 3
1 2 3
4 5 6
7 8 9

N = 4
1 2 3 4
5 6 7 8
9 10 11 12
13 14 15 16

*/

function printMatrix(n) {
    var row = "";
        counter = 1;

    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            row += counter + " ";
            counter++;
        }
        console.log(row);
        row = "";
    }
}

printMatrix(3);
