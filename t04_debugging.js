/********************
 Debugging
 Written by Priya Silwal
 Written on 30/04/2025
 Purpose: Learning how to debug
*******************/

console.log("Task 4 - Debugging");

// Variables
let length = 8;
let width = 10;

// Calculate the area
var area = length * width;

// Calculate the perimeter
var perimeter = 2 * (length + width);

// Display the results
console.log("An area of a piece of paper with a length of " + length + ", and a width of " + width + " is " + area);
console.log("The same piece of paper has a perimeter of " + perimeter);

// Check, does this result look sensible
if (perimeter < area) {
    console.log("Yay, your area is larger, this is right for this example");
} else {
    console.log("Hmm, your perimeter is larger. It shouldn't be for this example");
}