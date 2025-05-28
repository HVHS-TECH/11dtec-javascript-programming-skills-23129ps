/********************
 Activation via button
 Written in 28/05/2025
 Purpose: Activation via button
 *******************/

 
 let userName;

start();

/********************************************/
// func mainFunc();
/********************************************/

function start() {
    userName = getUserReply("What's your name?", "s");
    userAge = getUserReply("What's your age?", "n");
    alert("Your name is: " + userName);
    alert("Your age is: " + userAge);
}

/********************************************/
// func getUserName();
/********************************************/

function getUserReply(_text, _type) {
    let userReplyIsInvalid = true;
    while(userReplyIsInvalid) {
        userReply = prompt(_text);
        if (userReply == null) {
            console.log("Invalid");
            userReply = "Invalid";
            return userReply;
        } else if (_type == "n"){
            userReply = userReply.trim();
            userReply = Number(userReply);
            console.log("Valid");
            userReplyIsInvalid = false;
            return userReply;
        } else if (_type == "s"){
            userReply = userReply.trim();
            console.log("Valid");
            userReplyIsInvalid = false;
            return userReply;
        }           
    }
}