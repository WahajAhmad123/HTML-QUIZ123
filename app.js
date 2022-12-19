// var questions = [{
//     num : 1,
//     question : "HTML stand for ",
//     answer : "Hyper text markup language",
//     Option : [
//         "Hyper text makup language ",
//         "Hyper text markup language ",
//         "Hyper text message language ",
//         "Hyper text makup limited "
//     ]

// },
// {
//     num : 2,
//     question : "CSS stand for ",
//     answer : "Cascading style sheet",
//     Option : [
//         "Common style sheet ",
//         "Colorfull style sheet ",
//         "Computer style sheet ",
//         "Cascading style sheet"
//     ]

// },
// {
//     num : 3,
//     question : "JS stand for ",
//     answer : "Java script",
//     Option : [
//         "Java sheet ",
//         "Java story ",
//         "Java script ",
//         "Jelly sheet"
//     ]
// },
// {
//     num : 4,
//     question : "SQL stand for ",
//     answer : "Structured query language",
//     Option : [
//         "Simple quality language",
//         "Structured query language ",
//         "Sigma query language",
//         "Styling question language"
//     ]
// },
// {
//     num : 5,
//     question : "XML stand for ",
//     answer : "eXtensilble markup language",
//     Option : [
//         "eXtensilble markup language",
//         "eXtra multiple language ",
//         "eXternal monitor language",
//         "eXtreme memory language"
//     ]
// }
// ]



// var questionNum = document.getElementById("questionNum")
// var question = document.getElementById("question")
// var answer = document.getElementById("answer")
// var indexnum = 0
// var marks = 0



// function showquestion(){
//     question.innerHTML=questions[indexnum].question;
//     questionNum.innerHTML="Question #" + (indexnum + 1)+"/"+questions.length;
//     answer.innerHTML = "";
//     for (var i = 0; i < questions[indexnum].Option.length; i++) {
//         answer.innerHTML += `<div class="col-md-6 py-2">
//         <button class="btn btn-primary px-5 rounded-pill w-100" onclick="checkAns('${questions[indexnum].Option[i]}','${questions[indexnum].answer}')">${questions[indexnum].Option[i]}</button>
//     </div>`
//     }
// }
// showquestion()
// function nextquestion(){
//     indexnum++
//     showquestion();
// }
// function checkAns(a, b) {
//     if (a == b) {
//         marks++;
//         console.log(marks);
//     }
//     if (indexnum + 1 == questions.length) {
//         alert("Your result : " + marks);
//     }
//     else {
//         nextquestion();
//     }
// }
var questions = [{
    numb: 1,
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
        "Hyper Text Preprocessor",
        "Hyper Text Markup Language",
        "Hyper Text Multiple Language",
        "Hyper Tool Multi Language"
    ]
},
{
    numb: 2,
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheet",
    options: [
        "Common Style Sheet",
        "Colorful Style Sheet",
        "Computer Style Sheet",
        "Cascading Style Sheet"
    ]
},
{
    numb: 3,
    question: "What does PHP stand for?",
    answer: "Hypertext Preprocessor",
    options: [
        "Hypertext Preprocessor",
        "Hypertext Programming",
        "Hypertext Preprogramming",
        "Hometext Preprocessor"
    ]
},
{
    numb: 4,
    question: "What does SQL stand for?",
    answer: "Structured Query Language",
    options: [
        "Stylish Question Language",
        "Stylesheet Query Language",
        "Statement Question Language",
        "Structured Query Language"
    ]
},
{
    numb: 5,
    question: "What does XML stand for?",
    answer: "eXtensible Markup Language",
    options: [
        "eXtensible Markup Language",
        "eXecutable Multiple Language",
        "eXTra Multi-Program Language",
        "eXamine Multiple Language"
    ]
},
];

var questionNum = document.getElementById('questionNum');
var question = document.getElementById('question');
var ansParent = document.getElementById('ansParent')
var indexNum = 0;
var marks = 0;

function showQuestion() {
    question.innerHTML = questions[indexNum].question;
    questionNum.innerHTML = "Question # " + (indexNum + 1) + "/" + questions.length;
    ansParent.innerHTML = "";
    for (var i = 0; i < questions[indexNum].options.length; i++) {
        ansParent.innerHTML += `<div class="col-md-6 py-2">
        <button class="btn btn-primary px-5 rounded-pill w-100" onclick="checkAns('${questions[indexNum].options[i]}','${questions[indexNum].answer}')">${questions[indexNum].options[i]}</button>
    </div>`
    }
}
showQuestion();

function nextQuestion() {
    indexNum++
    showQuestion();
}

function checkAns(a, b) {
    if (a == b) {
        marks++
        console.log(marks)
    }
    if (indexNum + 1 == questions.length) {
        alert("Your result : " + marks);
    }
    else {
        nextQuestion();
    }
}