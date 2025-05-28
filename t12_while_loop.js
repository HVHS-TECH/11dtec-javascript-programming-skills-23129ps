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
    userName = askUserName();
    userAge = askUserAge();
    userMoney = askUserMoney();
    end();
}

function askUserName() {
    alert("Welcome to my website!");
    let name = prompt("What is your name?");
   
    // Validate input
    while (!name) {
        name = prompt("Please enter a valid name.");
    }

    alert("Hi " + name + "!");
    return name;
}

function askUserAge() {
    const currentYear = 2025;
    let age = Number(prompt("What is your age?"));
   
    // Validate input
    while (isNaN(age) || age <= 0) {
        age = Number(prompt("Please enter a valid age."));
    }

    alert("I predict you were born in " + (currentYear - age) + ".");
    return age;
}

function askUserMoney() {
    let array = ["You loathe chocolate", "Chocolate is meh", "Chocolate is pretty good", "Chocolate is the best thing EVER!!!!"];
    let choice = Number(prompt("On a scale of 0-3, how much do you like chocolate?"));
   
    // Validate choice
    while (isNaN(choice) || choice < 0 || choice > 3) {
        choice = Number(prompt("Invalid choice. Please enter a number between 0-3."));
    }
   
    alert(array[choice]);
   
    let money = Number(prompt("How much pocket money do you have?"));
   
    // Validate money input
    while (isNaN(money) || money < 0) {
        money = Number(prompt("Please enter a valid amount of money."));
    }

    alert("You have " + money + " dollars.");

    if (money >= 20) {
        alert("You can afford a chocolate bar!");
    } else {
        alert("You can't afford a chocolate bar.");
    }
   
    return money;
}

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
