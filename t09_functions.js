/********************
 Functions
 Written by Priya Silwal
 Written in 08/05/2025
 Purpose: Getting familiar with Functions
 *******************/
 alert("Welcome to my website!");

 /**********
  Functions
  ***********/
 function askUserName ()  {
   userName = prompt("What is your name?");
   alert("Hi " + userName+".");
 }

 function askUserAge () {
    userAge = Number(prompt("What is your age?"));
 }

 function askUserMoney  ()  {
    money = Number(prompt("How much pocket money they have?"));
    alert("You have "+ money+ " dollars."); 
  if (money >= 20){
    alert("You can afford a chocolate bar");
  }
 
 }

/**********
  Main Code
***********/
 askUserName();
 askUserAge();
 askUserMoney();
 
 