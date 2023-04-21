var readlineSync = require('readline-sync')
var score = 0
var highScore =  {
  name : "Nikhil Bajpai",
  score : 3 
};
var questions = [
  {
    question : "where do I live",
    answer : "Harpalpur"
  },
  {
    question : "Where do I work",
    answer : "Cognizant"
  },
  {
    question : "Who is my best friend",
    answer : "No-one"
  }
];
function welcome (){
  var userName = readlineSync.question("What is your Name?");
  console.log("Welcome  " + userName + "to Do you Know Nikhil " );
}

function play (question, answer){
  var userAnswer = readlineSync.question(question)
  if (userAnswer.toUpperCase() == answer.toUpperCase() ){
    console.log("right");
    score++;
    
  }
  else{
    console.log("worng  " + "Corrrect answer is " + answer);
  }
}
function game (){
  for (var i=0; i<questions.length; i++){
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}
console.log(score);