/*problem1 Insert element in array.*/

function pushElement (index, value, array){
    var i ;

    for(i = array.length-1;i >= index; i-=1) {
        array[i + 1] = array[i];
    }

    array[index] = value;
    return array;
}
console.log(pushElement(2, 'X', ['a', 'b', 'c', 'd', 'e'])); // ["a", "b", "X", "c", "d", "e"]
console.log(pushElement(5, 'Y', ['a', 'b', 'c', 'd', 'e'])); // ["a", "b", "c", "d", "e", "Y"]
console.log(pushElement(1, 100, [1, 2, 3, 4, 5, 6, 7, 8, 9])); // [1, 100, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(pushElement(0, 'dog', ['cat', 'mouse'])); // ["dog", "cat", "mouse"]
console.log(pushElement(4, 'Xxx', ['aaa', 'bbb', 'ccc'])); // ["aaa", "bbb", "ccc", undefined ,"Xxx"]
