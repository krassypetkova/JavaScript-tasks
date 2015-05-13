/*
Write an expression that checks for a given point {x, y} if it is within the
circle K[{0, 0}, R=5]. Explanation: the point {0, 0} is the center of the circle
and 5 is the radius.
  -Use the Pythagorean Theorem a2 + b2 = c2. The point is inside the circle when
(x*x) + (y*y) < = 5*5.
*/
var x = prompt("Enter a value for 'x': ");
var y = prompt("Enter a value for 'y': ");
var radius = 5;

if ((x * x + y * y) <= radius * radius) {
    console.log("The point is inside the Circle");
} else {
    console.log("The point is outside the Circle");
}
