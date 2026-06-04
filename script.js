const questions = [
{
    question: "Which language is used for web page structure?",
    answers: ["Python", "HTML", "Java", "C++"],
    correct: 1
},
{
    question: "Which language is used for styling web pages?",
    answers: ["CSS", "Java", "PHP", "C"],
    correct: 0
},
{
    question: "Which language is used for webpage interactivity?",
    answers: ["Java", "JavaScript", "C#", "Python"],
    correct: 1
},
{
    question: "What does CPU stand for?",
    answers: [
        "Central Processing Unit",
        "Computer Personal Unit",
        "Control Processing User",
        "Central Program Unit"
    ],
    correct: 0
}
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answers");
const nextButton = document.getElementById("nextBtn");
const result = document.getElementById("result");

function showQuestion(){

    let q = questions[currentQuestion];

    questionElement.innerText = q.question;

    answerButtons.innerHTML = "";

    q.answers.forEach((answer,index)=>{

        const button = document.createElement("button");

        button.innerText = answer;
        button.classList.add("btn");

        button.onclick = () => selectAnswer(index);

        answerButtons.appendChild(button);
    });
}

function selectAnswer(index){

    if(index === questions[currentQuestion].correct){
        score++;
    }

    Array.from(answerButtons.children).forEach(btn=>{
        btn.disabled = true;
    });
}

nextButton.addEventListener("click",()=>{

    currentQuestion++;

    if(currentQuestion < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
});

function showScore(){

    questionElement.innerText = "Quiz Completed!";

    answerButtons.innerHTML = "";

    result.innerHTML =
    `Your Score: ${score} / ${questions.length}`;

    nextButton.style.display = "none";
}

showQuestion();