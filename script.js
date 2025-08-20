/*
Javascript code for quotes quiz. The quiz has four questions. Each question has a prompt and a list of possible answers.

*/


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
        question: "If you don't like your destiny, dont accept it. Instead, have the courage to change it!",
        answers: [
            { text: "Demon Slayer", correct: false },
            { text: "Naruto", correct: true },
            { text: "Lord of the Rings", correct: false },
            { text: "John Wick", correct: false },
        ]
        
    },
    {
        question: "If you are feeling disheartened, that you are somehow not enough, SET YOUR HEART ABLAZE!",
        answers: [
            { text: "Demon Slayer", correct: true },
            { text: "Naruto", correct: false },
            { text: "Lord of the Rings", correct: false },
            { text: "John Wick", correct: false },
        ]
        
    },
    {
        question: "People keep asking if I'm back and I havent really had an answer but now yeah, I'M THINKING I'M BACK!",
        answers: [
            { text: "Demon Slayer", correct: false },
            { text: "Naruto", correct: false },
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

/*
 Starts the quiz: resets indices and score and shows the first question.
 */
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
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}


/*
Called when an answer button is clicked. Applies styling to indicate correctness.
*/
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
/*score++ will increase the score by 1 if the correct answer is selected*/
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
/*
Added array button from answerButtons.children. The forEacg button will check the dataset, if it is true,
the it will add the class name "correct". Suppose we have selected the wrong answer, then it'll go and check the
other answers and if it is true, it will add the green color.
*/  Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        } 
/*After it will diable the buttons and we cant click on other buttons*/
        button.disabled = true;
    });
/*This will display the next button, allowing us to go to the next question*/
    nextButton.style.display = "block";
}


/*showScore fuction will display out of the length of questions*/
function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";

}

/*Defining handleNextButton fuction*/
function handleNextButton(){
    currentQuestionIndex++; /*Will increase the currentQuestion index by 1, when we click on the next button*/
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

/*Function for the next button*/
nextButton.addEventListener("click", () => {
/*Checks to see: if the current question index is less than the length of the question. EX:
if the question is question 4, checks to see if the index is less than 4.
*/
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});


/*Calling the startQuiz function an will set the current index to 0, score to 0 and display button text.
Then it wil call the showQuestions function*/
startQuiz()

