/*4. Sort 3 real numbers in descending order. Use nested if statements. */

function numsDescendingOrder() {
    var args = [].slice.apply(arguments),
        sortedArray = (args.sort(function(a, b){return a-b}));

    console.log(sortedArray);
    return sortedArray;
}

numsDescendingOrder(4, 80, 100, 67, 63, 5, 1); // 1, 4, 5, 63, 67, 80, 100
numsDescendingOrder(1, 8, 87, 5, 500, 45, -2); // -2, 1, 5, 8, 45, 87, 500
numsDescendingOrder(-1, -20, -40, -2, -4, 30); // -40, -20, -4, -2, -1, 30