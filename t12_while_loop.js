/********************
 While Loop Practice
 Written by Priya Silwal
 Date: 08/05/2025
 Purpose: Learn how while loops work
*******************/

// These are the variables we use
let userName;
let userAge;
let userMoney;

// This starts the whole program
function start() {
  userName = askUserName();    // Ask name
  userAge = askUserAge();      // Ask age
  userMoney = askUserMoney();  // Ask money and chocolate question
  usePromptLoop();             // First while loop using prompt
  useBooleanLoop();            // Second while loop using confirm
}

// Ask the user's name
function askUserName() {
  alert("Welcome to my website!");
  let name = prompt("What is your name?");
  alert("Hi " + name + "!");
  return name;
}

// Ask the user's age
function askUserAge() {
  let currentYear = 2025;
  let age = Number(prompt("What is your age?"));
  alert("I think you were born in " + (currentYear - age));
  return age;
}

// Ask about chocolate and money
function askUserMoney() {
  let chocolateOptions = [
    "You don't like chocolate",
    "Chocolate is okay",
    "Chocolate is good",
    "Chocolate is the best ever!"
  ];

  let choice = prompt("How much do you like chocolate? (0 to 3)");
  alert(chocolateOptions[choice]);

  let money = Number(prompt("How much pocket money do you have?"));
  alert("You have " + money + " dollars.");

  if (money >= 20) {
    alert("You can buy a chocolate bar!");
  } else {
    alert("You don't have enough for a chocolate bar.");
  }

  return money;
}

// First while loop using prompt and "y"
function usePromptLoop() {
  let answer = prompt("Do you want to do the loop? Type 'y' for yes");

  while (answer === "y") {
    alert("Loop will repeat again");
    answer = prompt("Do you want to do the loop again? Type 'y' for yes");
  }

  alert("End of loop");
}

// Second while loop using a confirm box (true/false)
function useBooleanLoop() {
  let keepGoing = confirm("Do you want to do the loop again?");

  while (keepGoing) {
    alert("Loop will repeat again");
    keepGoing = confirm("Do you want to do the loop again?");
  }

  alert("End of loop");
}

// Run the program
start();
