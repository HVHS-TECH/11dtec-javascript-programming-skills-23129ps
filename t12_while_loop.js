/********************
 While loop
 Written by Priya Silwal
 Written in 08/05/2025
 Purpose: While loop
*******************/

/********************  
**********  
 variables   
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
}  

function askUserName() {  
    alert("Welcome to my website!");  
    userName = prompt("What is your name?");  
    alert("Hi " + userName + " =!");  
}  

function askUserAge() {  
    currentYear = 2025;  
    userAge = Number(prompt("What is your age?"));  
    alert("I predict you were born in " + (currentYear - userAge) + ".");  
}  

function askUserMoney() {  
    let array = ["You loath chocolate", "Chocolate is meh", "Chocolate is pretty good", "Chocolate is the best thing EVER!!!!"];  
    let choice = prompt("On a scale of 0-3 how much do you like chocolate?");  
    alert(array[choice]);  
    userMoney = Number(prompt("How much pocket money do you have?"));  
    alert("You have " + userMoney + " dollars.");  

    if (userMoney >= 20) {  
        alert("You can afford a chocolate bar");  
    } else {  
        alert("You can't afford a chocolate bar");  
    }  
}  

/**********  
 Learning Goal  
***********/  
// We are learning how to:  
// Use a while loop to repeat a section of code while a condition is met.  

// By the end of this topic you will have:  
// - Gone through the slides.  
// - Copied your template from task 1.  
// - Updated the header comments and console.log()  
// - Created a program that includes while loops  

/**********  
 While Loops  
***********/  

let userResponse = prompt("Would you like to continue with the loop? (y/n)");  
while (userResponse === "y") {  
    alert("Loop will repeat again");  
    userResponse = prompt("Would you like to continue with the loop? (y/n)");  
}  
alert("End of loop");  

// Second while loop using confirm statement  
while (confirm("Would you like to continue with the loop?")) {  
    alert("Loop will repeat again");  
}  
alert("End of loop");  