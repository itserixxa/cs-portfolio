
// these are the variables for the inputs and for the alerts//
var alerting = document.getElementById("alerting");
var input3 = document.getElementById('input3');
var input4 = document.getElementById('input4');



//this variable is for the answer.//
var answer = 3;

var guess = prompt("What's Your guess?");
var display = document.getElementById('display');

//if someone guesses correctly, the alert will say you guessed correctly//
for(i=0;i<10;i++){
    if(answer == guess){
        alert("You guess correctly");
        break;
      // if you guess wrong, it will say please try again//  
    }else {
        guess = prompt("Please Try Again");
    }
}
