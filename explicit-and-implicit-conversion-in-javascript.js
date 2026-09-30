/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/

// Part 1: Debugging Challenge
let result = Number("5") - 2; //use Number() to ensure the string is converted to a number
console.log("The result is: " + result);

let isValid = Boolean("false"); //use Boolean() to ensure the string is converted to a boolean
if (isValid) {
    console.log("This is valid!");
}

let age = "25";
let totalAge = Number(age) + 5; //use Number() to ensure the string is converted to a number
console.log("Total Age: " + totalAge);

// Part 2: Write Your Own Examples
let implicitConversion = "5" + 2; // concatenates as strings
console.log("Implicit conversion result: " + implicitConversion);

let explicitConversion = Number("5") + 2; // adds as numbers
console.log("Explicit conversion result: " + explicitConversion);

let edgeCaseConversion = Number("not_a_number"); // results in NaN
console.log("Edge case conversion result: " + edgeCaseConversion);