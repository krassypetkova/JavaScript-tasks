/*4. Sort 3 real numbers in descending order. Use nested if statements. */

function numsDescendingOrder() {
    var args = [].slice.apply(arguments);

    console.log(args.sort(function(a, b){return a-b}));
}

numsDescendingOrder(4, 80, 100, 67, 63, 5, 1);