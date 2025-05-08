/********************
 Functions
 Written by Priya Silwal
 Written in 08/05/2025
 Purpose: Getting familiar with Functions
 *******************/
 alert("Welcome to my website!");

 //Variables
 var currentYear = 2025;
 let array =["You loath chocolate", "Chocolate is meh", "Chocolate is pretty good", "Chocolate is the best thing EVER!!!!"];
 let choice= prompt("On a scale of 0-3 how much do you like chocolate");
 let userTotal = 0;
 let userNumberChoice = 0;
 
 /**********
  Functions
  ***********/
 function askUserName ()  {
   userName = prompt("What is your name?");
 }

 function askUserAge () {
    userAge = Number(prompt("What is your age?"));
 }

 function askUserMoney  ()  {
    money = Number(prompt("How much pocket money they have?"));
 }

/**********
  Main Code
  ***********/
 askUserName();
 askUserAge();
  money();
  alert("Hi " + userName+".");
  alert("As of "+ currentYear+ " you are "+ userAge+ " years old.");
  alert("In 10 years you will be "+ (userAge+10) + " years old.");
  alert("You have "+ money+ " dollars."); 
  alert("Half of your money is "+ money/2+ " dollars.");
  alert(array[choice]);
  alert("I predict you were born in " + (currentYear-userAge));
  if (money >= 20){
    alert("You can afford a chocolate bar");
  }
  
  for (let count = 0; count<5; count++) {
  userNumberChoice = prompt('Enter a number between 0 to 5');
  userNumberChoice = Number(userNumberChoice);
  userTotal = userTotal + userNumberChoice; 
  }
  
  console.log('The total of all numbers is: ' + userTotal); 

  

 
 
 
 
 