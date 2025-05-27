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
    alert("Hi " + userName + " !");  
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
 While Loops  
***********/  

let userResponse = "y";  
while (userResponse === "y") {  
    start(); 
    let userResponse = prompt("Would you like to continue with the loop? (y/n)");  
    alert("Loop will repeat again");  
}  
if (userResponse === "n") {
alert("End of loop"); 
}
 
    






