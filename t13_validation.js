/********************
 Activation via button
 Written on 29/05/2025 by Priya Silwal
 Purpose: Activation via button
 *******************/

// Declare variables for user details
let userName;
let userAge;
let money;
let choice = [
    "Mars bar", 
    "Moro bar", 
    "King Size Crunchy", 
    "Dairy Milk Block", 
    "Lindt Block"
];

// Start the process
start();

/********************************************/
// Main function to begin execution
/********************************************/

function start() {
    getUserDetails();
    getPocketMoney();
}

function getUserDetails() {
    userName = prompt("What's your name?");
    
    // Validate name input
    while (userName == null || userName.trim() === "" || !isNaN(userName)) {
        userName = prompt("Invalid input. Please enter a valid name.");
    }
    
    userAge = prompt("What's your age?");
    // Validate age input
    while (userAge == null || userAge.trim() === "" || isNaN(userAge)) {
        userAge = prompt("Invalid input. Please enter a valid age.");
    }
    
    alert("Your name is: " + userName);
    alert("Your age is: " + userAge);
}

function getPocketMoney() {
    money = prompt("How much pocket money do you have? (Enter a number from 1 to 5)");
    
    alert("You have $" + money + ".\nYou can buy a " + choice[money] + ".");
}