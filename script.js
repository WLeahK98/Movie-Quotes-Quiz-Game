
const questions = [
    {
        question: "YOU SHALL NOT PASS!",
        answers: [
            { text: "Demon Slayer", correct: false},
            { text: "Naruto", correct: false},
            { text: "Lord of the Rings", correct: true},
            { text: "John Wick", correct: false},
        ]
    },
    {
        question: "If you don’t like your destiny, don’t accept it. Instead, have the courage to change it!",
        answers: [
            { text: "Attack on Titan", correct: false },
            { text: "Naruto", correct: true },
            { text: "Lord of the Rings", correct: false },
            { text: "John Wick", correct: false },
        ]
        
    },
    {
        question: "If you are feeling disheartened, that you are somehow not enough, SET YOUR HEART ABLAZE!",
        answers: [
            { text: "Demon Slayer", correct: true },
            { text: "Naruto", correct: true },
            { text: "Lord of the Rings", correct: false },
            { text: "John Wick", correct: false },
        ]
        
    },
    {
        question: "People keep asking if I'm back and I havent really had an answer but now yeah, I'M THINKING I'M BACK!",
        answers: [
            { text: "Demon Slayer", correct: false },
            { text: "Naruto", correct: true },
            { text: "Lord of the Rings", correct: false },
            { text: "John Wick", correct: true },
        ]
        
    },
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();

}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

/* currentQuestion.answers will get the answers from within the question index sections
it will also display the answers text within each button*/
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
    }else{
        selectedBtn.classList.add("incorrect");
    }
}

/*Calling the startQuiz function an will set the current index to 0, score to 0 and display button text.
Then it wil call the showQuestions function*/
startQuiz()

