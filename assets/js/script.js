// document.write('<script src="./quizQuestions.js" type="text/javascript"></script>');
// import { quizQuestions } from './quizQuestions.js';         
// $.getScript("./quizQuestions.js");
// I tried to load the quizQuestions file in this file, but unfortunately Javascript does not have this feature natively.

// GRAB DOM ELEMENTS, IDs, AND/OR CLASSES

var quizContainerEl = document.getElementById('quiz');        
var questionEl = document.getElementById('question');
var answersEl = document.getElementById('answers');
var startTestEl = document.getElementById("startButton");
var stopTestEl = document.getElementById("stopButton");
var timerEl = document.getElementById("timer");

var radioButton = answersEl.createElement("input");

var source = {
    type: 'radio',
    name: 'name',
    value: 'value',
    label: 'label',
    onclick: function checked () {
      if(radioButton.checked = true){
          //do something
      }else {
        // do something else
      };
    }
};

Object.assign(radioButton, source);

var choices = ["a", "b", "c"];
for(var i =0; i<choices.length; i++) {
    source.name = choices[i];
    source.value = quizQuestions.answers[choices[i]];
    source.label = quizQuestions.answers[choices[i]];
}

document.body.appendChild(radioButton);


var testTime = 0;     // the time of the test will increase every second 
var testScore = 0;      // the test score starts at 0 points

function setTimer() {                                 // function name
    var timerInterval = setInterval(function() {
      testTime++;                      // decrease secondsLeft by 1 
      timerEl.textContent = testTime ;   // write secondsLeft on screen
  
      if(testTime === 20) {                   // when secondsLeft is zero
        clearInterval(timerInterval);         // clear the interval "timerInterval"
        alert("Your time is up!");
        // stopTest();               // send a message and creates and image
      }
  
    }, 1000);   // Time in miliseconds (always). 1000 ms = 1 sec --> It runs once every second
  }

function setScore(){
    var scoreInterval = setInterval(function(){
        if(answer === quizQuestionscorrectAnswer[testScore].correctAnswer){
            testScore++;
        } else {
            alert("Wrong!");
            clearInterval(scoreInterval);
            // stopTest();
        }
    })

}

function startQuiz() {
    displayQuestionWithAnswers();
    setTimer();
    // setScore();
};

function stopQuiz(){

};

function createRadioButtons(El, arr){
    var threeLines = El.textContent;
    for(var i=0; i<3; i++){  
        threeLines += radioButton
        `<input type="radio" name="question${i+1}" value="${arr[i].answers[choices[i]]}"><label>${choices[i]}": "${arr[i].answers[choices[i]]}"."</label><br>`;
    }
    console.log(threeLines);
    return threeLines;
}

function displayQuestionWithAnswers(){
    var count = 0;
    var showQuestionWithAnswers = setInterval(function(){
        questionEl.textContent = "Question " + count+1 + ": " + quizQuestions[count].question + "?";
        createRadioButtons(answersEl, quizQuestions);

        clearInterval(showQuestionWithAnswers);
        // if(quizQuestions[count].answers === quizQuestions[count].correctAnswer) {
        //     testScore++;
        //     alert("Correct!");
        // } else {
        //     clearInterval(showQuestionWithAnswers);
        //     alert("Wrong!");
        // }
    }, 1000)
    
}

function checkResponse(){
    
}



startTestEl.addEventListener("click", startQuiz);
stopTestEl.addEventListener("click",stopQuiz);