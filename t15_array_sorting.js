/********************
 Arrays
 Written by Priya Silwal
 Purpose: Array
*******************/

function start() {
    chocolate();
}

function chocolate() {
    let userName = prompt("Enter your name:");
    let userAge = prompt("Enter your age:");
    let pocketMoney = Number(prompt("How much pocket money do you have? (1-10)"));

    const chocolateBars = ["Mars bar", "Moro bar", "King Size Crunchy", "Dairy Milk Block", "Lindt Block"];
    const chocolatePrices = [2, 2.5, 3, 6, 7];

    let affordableChocolate = "None";
    for (let i = chocolatePrices.length - 1; i >= 0; i--) {
        if (pocketMoney >= chocolatePrices[i]) {
            affordableChocolate = chocolateBars[i];
            break;
        }
    }

    alert("Hello " + userName + ", based on your pocket money of " + pocketMoney + ", you can buy a " + affordableChocolate);
}