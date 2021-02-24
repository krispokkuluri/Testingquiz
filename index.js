const readLineSync = require('readline-sync');

console.log('Welcome to the Quiz');
let username = readLineSync.question("What's your Name: \n");
console.log('Hello',username,", Let's Play the Quiz!!");

console.log('\n');
console.log('Rules & Instructions: ');
console.log('1.',username + ', There are 5 Questions on Automation Testing and all are Compulsory.');
console.log('2. You will get 2 points on each Right Answer.');
console.log('3. One Point will be deducted if the Answer is Wrong.');
console.log('4. For answering you have to type the Serial Number / Index Value.');
console.log('\n');

const questions = [
  {
    question: "We split testing into distinct stages primarily because:",
    options: {
      a : "Each test stage has a different purpose.",
      b : "It is easier to manage testing in stages.",
      c : "We can run different tests in different environments.",
      d : "The more stages we have, the better the testing."
    },
    correctAnswer: "a"
  },
  {
    question : " A configuration management system would NOT normally provide:",
    options: {
      a : "linkage of customer requirements to version numbers.",
      b : "facilities to compare test results with expected results.",
      c : "the precise differences in versions of software component source code.",
      d : "restricted access to the source code library."
    },
    correctAnswer : "b"
  },
  {
    question : " Test cases are designed during:",
    options : {
      a : "test recording.",
      b : "test planning.",
      c : "test configuration.",
      d : " test specification.",
    },
    correctAnswer : "d"
  },
  {
    question : "Which of the following statements about reviews is true?",
    options : {
      a : " Reviews cannot be performed on user requirements specifications.",
      b : " Reviews are the least effective way of testing code.",
      c : "Reviews are unlikely to find faults in test plans.",
      d : "Reviews should be performed on specifications, code, and test plans.",
    },
  correctAnswer : "a"
  },
  {
    question : " The most important thing about early test design is that it:",
    options : {
      a : "makes test preparation easier.",
      b : "means inspections are not required.",
      c : "can prevent fault multiplication.",
      d : "will find all faults.",
    },
  correctAnswer : "c"
  }
];
var validoptions = ['a','b','c','d'];

let score = 0;
for(let var1=0;var1<5;var1++){
  console.log(""+(var1+1)+". "+questions[var1].question);
  console.log("a) ", questions[var1].options.a);
  console.log("b) ",questions[var1].options.b);
  console.log("c) ",questions[var1].options.c);
  console.log("d) ",questions[var1].options.d);
  const choice = readLineSync.question('Enter your choice out of a,b,c and d\n');

  if(validoptions.includes(choice)){
    //console.log("************");

  
  
  let correctAnswer = questions[var1].correctAnswer;
  if(choice.toLowerCase() === correctAnswer) 
  {
    console.log("CORRECT");
    console.log();
    score += 2;
  }else{
    console.log("WRONG");
    score -= 1;
    console.log();
  }

  }//if conditions ending
  else{
    console.log("Not a Valid Option!, Score of this option wont be considered\n");
  }

}

console.log();
if(score >= 8){
  console.log("Amazing!You are a Rockstar tester");
  console.log("Your SCORE is " + score);
}else{
  console.log("Better Luck Next Time.");
  console.log("Your SCORE is "  + score);
}


