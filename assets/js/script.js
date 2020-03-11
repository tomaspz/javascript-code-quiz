// GRAB DOM NODES

var quizContainerEl = document.getElementById('quiz');        
var questionEl = document.getElementById('question');
var answersEl = document.getElementById('answers');

var input = document.getElementsByTagName('input');
var checkButton = document.getElementById('checkButton');

var startTestEl = document.getElementById("startButton");
var stopTestEl = document.getElementById("stopButton");
var timerEl = document.getElementById("timer");

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

// function setScore(){
//     var scoreInterval = setInterval(function(){
//         if(answer === quizQuestionscorrectAnswer[testScore].correctAnswer){
//             testScore++;
//         } else {
//             alert("Wrong!");
//             clearInterval(scoreInterval);
//             // stopTest();
//         }
//     })

// }

function startQuiz() {
    count = 0;
    displayQuestionWithAnswers();
    setTimer();
    // setScore();
};

function stopQuiz(){

};

function displayQuestionWithAnswers(){   
    
    questionEl.textContent = "Question " + (count+1) + ": " + quizQuestions[count].question + "";
    
    var options = ["a", "b", "c"];
    var divElem = document.createElement('div');                // create the input element dynamically
    
    for (var i=0; i<options.length; i++){
        divElem.innerHTML += 
        `<div class="custom-control custom-radio">
        <input type="radio" class="custom-control-input" id="`+options[i]+`" name="question`+(count+1)+`">
        <label class="custom-control-label" for="`+options[i]+`">`+ quizQuestions[count].answers[i] +`</label>
        </div>`;
        console.log(divElem);
        answersEl.appendChild(divElem);
    }
    
    
    
    // `'<input type='radio' name='options' value='`+options[count]+`'></input><label>'`+options[count]+`': '`+ quizQuestions[count].answers[0] + `'</label><br>'`; 
    

    // input.innerHTML += "<input type='radio' name='options' value='a'><label> a: " + quizQuestions[count].answers.a + "</label><br>"; 
    // console.log("This is a " + input.innerHTML);
    // console.log(quizQuestions[count].answers.a)
    // input.innerHTML += "<input type='radio' name='options' value='b'><label> b: " + quizQuestions[count].answers.b + "</label><br>";
    // console.log("This is b " + input.innerHTML);
    // input.innerHTML += "<input type='radio' name='options' value='c'><label> c: " + quizQuestions[count].answers.c + "</label><br>";
    // console.log("This is c " + input.innerHTML);

    
    
    checkResponse();
}

function checkResponse(){ 

    for(var i=0; i< input.length; i++){
        if(input[i].checked === true){
            console.log("Input is: " + input);
            console.log("Input checked is " + input[i].checked);
            console.log("Input value is " +input[i].value);
            // console.log("Correct answer is " + quizQuestions[input.value].correctAnswer);

            testScore++;
            count++;
        } else {
            testScore--;
            count++;
        }          
    } 
}

// input[i].value === quizQuestions[input.value].correctAnswer
startTestEl.addEventListener("click", startQuiz);
checkButton.addEventListener("click", checkResponse);
stopTestEl.addEventListener("click",stopQuiz);