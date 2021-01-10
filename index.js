var readLineSync = require('readline-sync');
var chalk = require('chalk');
var score = 0;
var userName = readLineSync.question("May i know Your Name Please? ");

console.log(chalk.yellow.bold(">Welcome " + chalk.green.bold(userName) + " to the MCU Universe Quiz\n>You will now be seeing a set of Questions\n>Each question will be having four options and you have to choose One\n>For Each Correct answer you will be given 2 points\n>And for a wrong answer a point will be decremented from your Total Score"));

if(readLineSync.keyInYN('Press Y whenever ready')){
  // main play function
  function play(question,answer,arrayOfOptions){
    console.log(chalk.blue.bold.underline(question)
    );
    var userResponse = readLineSync.keyInSelect(arrayOfOptions,"Select a response [1 , 2 , 3 , 4]:\n",{cancel:false , guide:false});
    if(arrayOfOptions[userResponse].toUpperCase() == answer.toUpperCase()){
      score = score+2;
      console.log(chalk.green.bold('Correct Answer\n'+ chalk.yellow.bold("Score is " + score)));
    }else{
      score = score-1;
      console.log(chalk.red.bold(
        "OOpsy!!Wrong answer\nCorrect answer is " + chalk.green.bold(answer) + chalk.yellow.bold("\nScore is " + score)));
    }

  }
// 10 question objects 
var questionOne = {
question : "1-Who Killed Thanos?",
answer : "IronMan",
arrayOfOptions : ['Hulk' , 'Captain America' , 'IronMan', 'Thor']
}

var questionTwo = {
question : "2-Black Panther is King of which Place?",
answer :  "Wakanda",
arrayOfOptions : ['Asgard','New York','Titan','Wakanda']
}

var questionThree = {
question : "3-What comes out of Wakanda?",
answer : "Vibranium",
arrayOfOptions : ['Vibranium','Plutonium','Uranium','Adamantium']
}

var questionFour = {
question : "4-Real Name Of Hawkeye?",
answer : "Clint Barton",
arrayOfOptions : ['Johann Schmidt','Erik Selvig','Peter Parker','Clint Barton']
}

var questionFive = {
question : "5-God Of Mischeif?",
answer : "Loki",
arrayOfOptions :['Starlord','SpiderMan','Loki','Thor'] 
}

var questionSix = {
question : "6-Who is Gamora's sister?",
answer : "Nebula",
arrayOfOptions : ['Aurora','Meteor','Nebula','Asteroid']
}

var questionSeven = {
question : "7-What device allows Thanos to harness the power of the Infinity Stones?",
answer : "Infinity Gauntlet",
arrayOfOptions : ["Hammer","Infinity Gauntlet","Mjiolnr","None"]
}

var questionEight = {
question : "8-Which of the following characters can’t pick up Thor’s hammer?",
answer : "Loki",
arrayOfOptions : ['Thor','Loki','Captain America','Vision']
}

var questionNine = {
question : "9-Where is Captain America from?",
answer : "Brooklyn",
arrayOfOptions : ['Queens', 'Manhattan' , 'Long Island','Brooklyn']
}

var questionTen = {
question : "10-What chemical do the Avengers use to travel in time in Avengers: Endgame?",
answer : "Pym Particle",
arrayOfOptions : ['Pym Particle','Ether','JARVIS','Infinity Stones']
}
// play(questionOne.question,questionOne.answer,questionOne.arrayOfOptions);
var arrayOfQuestions = [questionOne,questionTwo,questionThree,questionFour,questionFive,questionSix,questionSeven,questionEight,questionNine,questionTen];

// caling play over each object we made of questions
for (var i=0;i<arrayOfQuestions.length;i++){
play(arrayOfQuestions[i].question,arrayOfQuestions[i].answer,arrayOfQuestions[i].arrayOfOptions);
}

console.log("Thanks For Playing..Yor Final Score is "+ chalk.green.bold(score));

// somee high scorers
var myself = {
name : 'Myself',
highScore : '10'
}
var john = {
  name : 'John',
highScore : '12'
}   
var ayush = {
  name : "Ayush",
  highScore : 20
}
// array for high scorers
var highScorers = [ayush,john,myself];
// fucntion to check if new user has beaten high score,if so add user and its score to highScorers array
function CheckHighestScore(highScorers){
for(var i = 0;i<highScorers.length;i++){
  if(score >= highScorers[i].highScore){
    console.log("Congratulations.You are Among Top Scorers\nSend me the Screenshot of your score and i will update it in High Score List");
    break;
  }
}
}
//call to CheckHighestScore
CheckHighestScore(highScorers);

// print out high scorers
console.log("Current High Score List:" + chalk.yellow("\n----------------------------------------"));
for(i=0;i<highScorers.length;i++){
console.log("Name:::::  "+highScorers[i].name + " || Score::::: "+highScorers[i].highScore);
}
console.log(chalk.yellow("----------------------------------------"));

}

// if y not choosen at start
else{
   console.log('Thank You For visiting');
}
