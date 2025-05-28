/*********************************************/
// Task 14 - Constants
//  Term 2 2025
/*********************************************/

alert("Welcome to my website!");
var userName = prompt("What is your name?");
var userAge = prompt("How old are you?");
var userPocketMoney = prompt("How much money do you have?");
let chocolateOpinions = ["terrible", "fine", "good", "amazing!!!"];
var userChocolateOpinion = prompt("How much do you like chocolate on a scale of 0-3?");
userChocolateOpinion = Number(userChocolateOpinion);

const CHOCOLATEPRICE = 4;
let userPurchase;

if (userPocketMoney >= CHOCOLATEPRICE){
userPurchase = 'You can go buy a $' + CHOCOLATEPRICE + ' chocolate bar. Congratulations!!!';
} else {
    userPurchase = 'You cannot afford a $'+ CHOCOLATEPRICE + ' chocolate bar.';
    }

alert("Hi " + userName + "\nYou are " + userAge + " years old" + "\nYou have " +
    userPocketMoney + " dollars" + "\nYou think chocolate is " + 
    chocolateOpinions[userChocolateOpinion] + '\n' + userPurchase);