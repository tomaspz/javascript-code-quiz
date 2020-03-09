const quizQuestions = [
    {
        question: "Who invented JavaScript?",
        answers: {
            a: "Douglas Crockford",
            b: "Sheryl Sandberg",
            c: "Brendan Eich"
        },
        correctAnswer: "c"
    },
    {
        question: "Which one of these is a JavaScript package manager?",
        answers: {
            a: "Node.js",
            b: "TypeScript",
            c: "npm"
        },
        correctAnswer: "c"
    },
    {
        question: "Which tool can you use to ensure code quality?",
        answers: {
            a: "jQuery",
            b: "RequireJS",
            c: "ESLint"
        },
        correctAnswer: "c"
    },
    {
        question: "The statement 'let a = b = 0;' inside a function. Does it create any global variables?",
        answers: {
            a: "No, both a and b are local variables of the function",
            b: "Yes, both a and b are global variables",
            c: "Yes, only b is a global variable since it is not declared"
        },
        correctAnswer: "c"
    },
    {
        question: "The statement 'i = 0;' inside a for loop. Does it create a global variable?",
        answers: {
            a: "No, the variable is local to the for loop",
            b: "Yes, the variable i is a global variable",
            c: "Yes and no, it depends where the for loop is located"
        },
        correctAnswer: "b"
    },
    {
        question: "You have an array called 'clothes' with 4 elements. If you do 'clothes.length = 0', how can you access the third element of the array?",
        answers: {
            a: "You can not access any element of the array",
            b: "Yes, by typing 'clothes[2]'",
            c: "Yes, by typing 'clothes[3]'"
        },
        correctAnswer: "a"
    },
  ];