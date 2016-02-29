/*
Write script that iterate array with numbers and prints the biggest and smallest
number
*/

var array  = [2, 3, 5, 7, 8, 11, 14, 18],
    max = 0,
    min = 0;

for (var i = 0; i < array.length; i++) {
     if (array[i] > max) {
         max = array[i];
     }
     // try to insert here the min condition
}

for (var i = array.length; i >= 0; i--) {
    if (array[i] < max) { // mistake here
        min = array[i];
    }
}

console.log("The max number is"+" "+max,"and the minimum number is"+" "+min);
