/********************
 Iteration - The For Loop
 Written by Priya Silwal
 Written in 06/05/2025
 Purpose: Getting familiar with loops
 *******************/
 alert("Welcome to my website!");

 //Variables
 var userName = prompt("What is your name?");
 var userAge = Number(prompt("What is your age?"));
 var money = Number(prompt("How much pocket money they have?"));
 var currentYear = 2025;
 let array =["You loath chocolate", "Chocolate is meh", "Chocolate is pretty good", "Chocolate is the best thing EVER!!!!"];
 let choice= prompt("On a scale of 0-3 how much do you like chocolate");
 let userTotal = 0;
 let userNumberChoice = 0;
 
 
/**********
  Main Code
***********/
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
  userNumberChoice = prompt('Enter a number:');
  userNumberChoice = Number(userNumberChoice);
  userTotal = userTotal + userNumberChoice; 
  }
  
  console.log('The total of all numbers is: ' + userTotal); 


 
 
 
 
 