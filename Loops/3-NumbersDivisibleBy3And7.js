/*
Write script that print on the console the number from 1 to N that can be divided
simultaneously by 3 and 7.
*/

var n = 25;

for(var i = 1; i <= n; i++){
    if(i % 21) {
        console.log(i);
    }
}
