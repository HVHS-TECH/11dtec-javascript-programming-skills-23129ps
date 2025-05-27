/********************
 While loop
 Written by Priya Silwal
 Written in 08/05/2025
 Purpose: While loop
*******************/

/**********
 Variables 
***********/
let userName; 
let userAge;
let userMoney;

/**********
 Functions
***********/

function start() {
    userName = askUserName();
    userAge = askUserAge();
    userMoney = askUserMoney();
    restart();
}

function askUserName() {
    alert("Welcome to my website!");
    userName = prompt("What is your name?");
    alert("Hi " + userName + "!");
}

function askUserAge() {
    let currentYear = 2025;
    userAge = Number(prompt("What is your age?"));
    if (userAge<0 || userAge>130){
        userAge = Number(prompt("Invalid! You must enter a valid age between 0-130"));
   
    alert("I predict you were born in " + (currentYear - userAge) + ".");
    }
}

function askUserMoney() {
    let array = ["You loathe chocolate", "Chocolate is meh", "Chocolate is pretty good", "Chocolate is the best thing EVER!!!!"];
    let choice = prompt("On a scale of 0-3 how much do you like chocolate?");
    alert(array[choice]);
    userMoney = Number(prompt("How much pocket money do you have?"));
    alert("You have " + userMoney + " dollars.");
    
    if (userMoney >= 20) {
        alert("You can afford a chocolate bar!");
    } else {
        alert("You can't afford a chocolate bar.");
    }
}

// First while loop using user input
function restart() {
    let ask = prompt("Do you want to restart? (y/n)");
    
    while (ask === "y") {
        alert("Loop will repeat again");
        ask = prompt("Do you want to restart? (y/n)");
    }
    
    alert("End of loop");
}

// Second while loop using a boolean variable and confirm
function restartWithConfirm() {
    let continueLoop = confirm("Do you want to restart?");
    
    while (continueLoop) {
        alert("Loop will repeat again");
        continueLoop = confirm("Do you want to restart?");
    }
    
    alert("End of loop");
}

// Call the functions
start();
restart();
restartWithConfirm();