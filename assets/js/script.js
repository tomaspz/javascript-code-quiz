import { quizQuestions } from './quizQuestions.js';         // import the file quizQuestions.js that contains all the questions and answers

var quizContainer = document.getElementById('quiz');        // get the quiz container element
var question = document.getElementById('question');
var firstAnswer = document.getElementById('checkbox1');
var secondAnswer = document.getElementById('checkbox2');
var thirdAnswer = document.getElementById('checkbox3');

var startTest = document.getElementById("startButton");
var stopTest = document.getElementById("stopButton");

var timer = document.getElementById("timer");

var testTime = 120;     // this is a 2 min test
var testScore = 0;      // the test score starts at 0 points

function setTimer() {                                          // function name
    var timerInterval = setInterval(function() {
      testTime--;                                            // decrease secondsLeft by 1 
      timer.innerHTML = testTime ;   // write secondsLeft on screen
  
      if(testTime === 0) {                   // when secondsLeft is zero
        clearInterval(timerInterval);           // clear the interval "timerInterval"
        stopTest();                          // send a message and creates and image
      }
  
    }, 1000);   // Time in miliseconds (always). 1000 ms = 1 sec --> It runs once every second
  }

function setScore(){

}

function startQuiz() {
    setTimer();
    const htmlOutput = [];      // this array will store the HTML output
    quizQuestions.forEach(currentQuestion, questionNumber) => {             // for each question
        const answers = [];     // this array will store the list of answers
        for(letter in currentQuestion.answers) {        // for each available answer
            answers.push(                               // add an HTML radio button
                `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
                </label>`);
        }
        htmlOutput.push(                      // add the question and the answers to the output
            `<h4 id="question"> ${currentQuestion.question}</h4>
            <div class="answers"> ${answers.join('')} </div>`
      );
    });
};

function stopQuiz(){

};

function askQuestion(){

}

startTest.addEventListener("click", startQuiz);
stopTest.addEventListener("click",stopQuiz);