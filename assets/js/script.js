// GRAB DOM NODES

var quizContainerEl = document.getElementById('quiz');        
var questionEl = document.getElementById('question');
var answersEl = document.getElementById('answers');

// var input = document.getElementsByTagName('input');
var checkButton = document.getElementById('checkButton');

var startTestEl = document.getElementById("startButton");
var stopTestEl = document.getElementById("stopButton");
var timerEl = document.getElementById("timer");
var scoreEl = document.getElementById("score");

var count = 0;
var testTime = 0;     // the time of the test will increase every second 
var testScore = 0;      // the test score starts at 0 points

function setTimer() {                              
    
    var timerInterval = setInterval(function() {
      testTime++;                      // decrease secondsLeft by 1 
      timerEl.textContent = testTime ;   // write secondsLeft on screen
  
      if(testTime === 20) {                   // when secondsLeft is zero
        alert("Sorry, your time is up!");
        clearInterval(timerInterval);         // clear the interval "timerInterval"
        // stopTest();               
      }
  
    }, 1000);   // Time in miliseconds (always). 1000 ms = 1 sec --> It runs once every second
  }

function setScore(){
    scoreEl.textContent = testScore;
}

function startQuiz() {
    count = 0;
    displayQuestionWithAnswers();
    setTimer();
    setScore();
};

function stopQuiz(){
    window.location.reload();
};

function displayQuestionWithAnswers(){   
    
    questionEl.textContent = "Question " + (count+1) + ": " + quizQuestions[count].question + "";

    var options = ["a", "b", "c"];

    for (var i=0; i<options.length; i++){
        answersEl.innerHTML += 
        `<input type="radio" class="custom-control-input" id="`+ options[i] +`" name="question`+ (count+1) +`"></input>
        <label class="custom-control-label" for="`+ options[i] +`">`+ quizQuestions[count].answers[i] +`</label>
        <br>`;
    }
}

function checkResponse(){ 

    for(var i=0; i<3; i++){

        if(answersEl.children[i].checked === true && answersEl.children[i].id === quizQuestions[i].correctAnswer) {
            testScore++;
            console.log(testScore);
            count++;
            console.log(count);
            displayQuestionWithAnswers();
        } 
    }
    
    alert("Wrong answer!");
    stopQuiz();
};

function registerUser(){

    answersEl.innerHTML = 
        `<form>
            <div class="form-group">
                <label for="inputInitials">Your initials</label>
                <input type="text" class="form-control" id="initials" placeholder="Enter your initials">
            </div>
        </form>`;
    
    var score = localStorage.setItem("score", testScore);

};

startTestEl.addEventListener("click", startQuiz);
checkButton.addEventListener("click", checkResponse);
stopTestEl.addEventListener("click", stopQuiz);