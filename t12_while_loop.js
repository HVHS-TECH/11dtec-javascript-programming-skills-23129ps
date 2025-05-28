/********************
 While loop
 Written by Priya Silwal
 Written in 08/05/2025
 Purpose: While loop
*******************/

let userName;
let userAge;
let userMoney;
let userResponse = "y";

/**********  
Functions  
***********/

function start() {
    // First While Loop using user input
while (userResponse.toLowerCase() === "y") {
    alert("Loop will repeat again.");
    userResponse = prompt("Would you like to continue the loop?\nTo continue, enter 'y'.");
}

alert("End of loop.");

// Second While Loop using confirm()
while (confirm("Would you like to continue the loop?")) {
    alert("Loop will repeat again.");
}

alert("End of loop.");

}

