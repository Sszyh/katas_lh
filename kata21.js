let randomNum = Math.floor(Math.random()*100);
let i = 0;
console.log(randomNum);
//let prompt = require("prompt-sync")();
let answer;
const guessNum = function(input) {

  for(i = 0; input !== randomNum; i++) {
    let prompt = require("prompt-sync")();
    console.log("Guess a number: ")
    answer = Number(prompt("> "));
    input = answer;

    if(input > randomNum) {
      //console.log("> " + answer);
      console.log("Too High!");
    } else if(input < randomNum) {
      //console.log("> " + answer);
      console.log("Too Low!");
    } else if(isNaN(input)) {
      //console.log("> " + answer);
      console.log("Not a number! Try again!")
    }
  }
  return console.log("You got it! You took " + i + " attempts!");
}
  
guessNum();
