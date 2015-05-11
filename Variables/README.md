# VARIABLES

1. Declare a variable isMale of type bool and assign a value to it depending on your gender.

2. Declare two variables of type string with values "Hello" and "World". Declare third variable and assign to this variable the value obtained of concatenation of the two string variables (add space if necessary). Print the third variable.

3. Declare variable of type string and assign them a value вЂњThe "use" of quotations causes difficulties.вЂќ (without the outer quotes).Print the variable.

4. Write a script to print a figure in the shape of a heart by the word "Love".

5. Write a script that prints on the console isosceles triangle which sides consist of the copyright character "©".

6. A company dealing with marketing wants to keep a data record of its employees. Each record should have the following characteristic – first name, last name, age, gender (‘m’ or ‘f’) and unique employee number 27560000.

7. Declare two variables of type int. Assign to them values 5 and 10 respectively. Exchange (swap) their values and print them.

# SOLUTIONS

1.  var isMale = false;

2.  var firstVar = "Hello";  
    var secondVar = "World";  
    var thirdVar = firstVar + " " + secondVar;  
    console.log(thirdVar);  

3.  var variable = "The \"use\" of quotations causes difficulties.";  
    console.log(variable);

4.  Solution in 4-HeartFromWords.js

5.  Solution in 5-TriangleWithCopyrightCharacter.js

6.  var firstName = "Krasimira";  
    var lastName = "Petkova";  
    var age = 24;  
    var gender = "f";  
    var uniqueNumber = 27560000;  

7.  I Without third variable.  
    var a = 5;  
    var b = 10;  
    a = a + b;  
    b = a - b;  
    a = a - b;  

    II With a third variable.  
    var a = 5;  
    var b = 10;  
    var c;  
    c = a;  
    a = b;  
    b = c;  
