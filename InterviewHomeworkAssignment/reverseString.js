/*problem2 Reverse string.*/

function reverse(stringName) {
    var i,
        emptyString = '';

    for (i = stringName.length - 1; i >= 0; i-= 1) {
        emptyString += stringName[i];
    }
    return emptyString;
}

console.log(reverse("Krasimira")); // arimisarK
console.log(reverse("123456")); // 654321