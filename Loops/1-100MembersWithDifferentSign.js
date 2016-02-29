/*
Write a script that prints the first 100 members of the sequence
2, -3, 4, -5, 6, -7, 8 ... 100;
*/

for (i = 2; i <= 100; i++) {
    if(i % 2 === 0) {
        console.log(i);
    } else {
        console.log("-" + i);
    }
}
