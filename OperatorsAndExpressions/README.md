OPERATORS AND EXPRESSIONS

1. Write an expression that checks whether an integer is odd or even.

2. Write a Boolean expression that checks whether a given integer is divisible by both 5 and 7.  
*Use a logical "AND" (&& operator) and the remainder operation % in division. You can also solve the problem by only one test: the division of 35 (think why).*

3. Write an expression that checks for a given integer if its third digit (right to left) is 7.  
*Divide the number by 100 and save it in a new variable, which then divide by 10 and take the remainder. The remainder of the division by 10 is the third digit of the original number. Check if it is equal to 7.*

4. Write an expression that calculates the area of a trapezoid by given sides a, b and height h.  
*The formula for trapezoid surface is: S = (a + b) * h / 2.*

5. Write a script that prints on the console the perimeter and the area of a rectangle by given side and height.

6. Write an expression that checks for a given point {x, y} if it is within the circle K[{0, 0}, R=5]. Explanation: the point {0, 0} is the center of the circle and 5 is the radius.  
*Use the Pythagorean Theorem a2 + b2 = c2. The point is inside the circle when (x*x) + (y*y) < = 5*5.*

7. Write an expression that checks for given point {x, y} if it is within the circle K[{0, 0}, R=5] and out of the rectangle [{-1, 1}, {5, 5}]. Clarification: for the rectangle the lower left and the upper right corners are given.  
*Use the code from the previous task and add a check for the rectangle. A point is inside a rectangle with walls parallel to the axes, when in the same time it is right of the left wall, left of the right wall, down from the top wall and above the bottom wall.*

8. Write a script that takes as input a four-digit number in format abcd (e.g. 2011) and performs the following actions:  
*Calculates the sum of the digits (in our example 2+0+1+1 = 4).  
Prints on the console the number in reversed order: dcba (in our example 1102).  
Puts the last digit in the first position: dabc (in our example 1201).  
Exchanges the second and the third digits: acbd (in our example 2101).
To get the individual digits of the number you can divide by 10 and take the remainder of the division by 10:  
a = num % 10;  
b = (num / 10) % 10;  
c = (num / 100) % 10;  
d = (num / 1000) % 10;*

9. Write a script that checks if a given number n (1 < n < 100) is a prime number (i.e. it is divisible without remainder only to itself and 1).  
*Read about loops in the Internet or in the chapter вЂњLoopsвЂќ. Use a loop and check the number for divisibility by all integers from 1 to the square root of the number. Since n < 100, you can find in advance all prime numbers from 1 to 100 and checks the input over them. The prime numbers in the range [1вЂ¦100] are: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89 and 97.*
