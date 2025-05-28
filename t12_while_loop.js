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
    alert("Hi " + name + " !");
    return name;
}

function askUserAge() {  
    const currentYear = 2025;  
    let age = Number(prompt("What is your age?"));
    alert("I predict you were born in " + (currentYear - age) + ".");
    return age;
}

function askUserMoney() {  
    let array = ["You loathe chocolate", "Chocolate is meh", "Chocolate is pretty good", "Chocolate is the best thing EVER!!!!"];
    let choice = Number(prompt("On a scale of 0-3 how much do you like chocolate?"));
   
    // Validate choice to prevent errors
    if (choice >= 0 && choice <= 3) {
        alert(array[choice]);
    } else {
        alert("Invalid choice, please enter a number between 0-3.");
    }
   
    let money = Number(prompt("How much pocket money do you have?"));
    alert("You have " + money + " dollars.");

    if (money >= 20) {  
        alert("You can afford a chocolate bar");  
    } else {  
        alert("You can't afford a chocolate bar");  
    }  
   
    return money;
}

/**********  
 While Loop  
***********/
function end () {
while (userResponse === "y") {    
    userResponse = prompt("Loop will repeat again\nWould you like to continue with the loop? (y/n)");
    start();   
}

alert("End of loop");  
   } 






