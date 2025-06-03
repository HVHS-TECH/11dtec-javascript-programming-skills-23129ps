/*********************************************/
// Task 16 - Exit
//  Term 2 2025
/*********************************************/
function start(){
alert("Welcome to my website!");
var userName = prompt("What is your name?");
if (userName == null){
    return;
}
  while (userName === "" || !isNaN(userName)) {
        userName = prompt("Invalid input. Please enter a valid name.");
  }

}