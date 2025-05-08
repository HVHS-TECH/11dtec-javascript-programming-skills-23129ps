/********************
 Functions
 Written by Priya Silwal
 Written in 08/05/2025
 Purpose: Getting familiar with Functions
 *******************/

 
 /**********
  variables 
  ***********/

 let userName; 
 let userAge;
 let userMoney;

 /**********
  Functions
  ***********/
 function start () {
    userName = askUserName();
    userAge = askUserAge();
    userMoney = askUserMoney();
 }

 function askUserName ()  {
 alert("Welcome to my website!");
  prompt("What is your name?");
   alert("Hi " + userName +".");
 }

 function askUserAge () {
   Number(prompt("What is your age?"));
 }

 function askUserMoney  ()  {
    Number(prompt("How much pocket money they have?"));
    alert("You have "+ money+ " dollars."); 
  if (userMoney >= 20){
    alert("You can afford a chocolate bar");
  }
 else {
    alert("You can't afford a chocolate bar");
 }
 }

/**********
  Main Code
***********/

 
 