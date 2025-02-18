
document.addEventListener("DOMContentLoaded",()=>{
    const startButton = document.getElementById("start-btn");
    const nextButton = document.getElementById("next-btn");
    const restartButton = document.getElementById("restart-btn");
    const questionContainer = document.getElementById("question-container");
    const questionText = document.getElementById("question-text");
    const choicesList = document.getElementById("choices-list");
    const resultContainer = document.getElementById("result-container");
    const scoreDisplay = document.getElementById("score");
    const questions = [{
        question:"What is the value of π (pi) to two decimal places?",
        choices:["3.15","3.14","3.16","3.17"],
        answer:"3.15"
    },
    {
        question:"What is 25% of 200",
        choices:["25","50","75","100"],
        answer:"50"
    },{
        question:"What is square root of 144?",
        choices:["10","12","14","16"],
        answer:"12"
    },{
        question:"What is the area of a rectangle with a length of 8 and a width of 5",
        choices:["13","26","40","80"],
        answer:"40"
    }]
    let currentQuestionIndex = 0;
    let score = 0;
    const startQuiz = ()=>{
        startButton.classList.add("hidden");
        resultContainer.classList.add("hidden");
        questionContainer.classList.remove("hidden");
        showQuestion();
    }
    startButton.addEventListener("click",startQuiz);
    nextButton.addEventListener("click",()=>{
        currentQuestionIndex = currentQuestionIndex+1;
        if(currentQuestionIndex<questions.length){
            showQuestion();
        }
        else{
            showResult();
        }
    })
    restartButton.addEventListener("click",()=>{
        score = 0;
        currentQuestionIndex = 0;
        resultContainer.classList.add("hidden");
        startQuiz();
    })
    const showQuestion = ()=>{
        nextButton.classList.add("hidden");
        questionText.textContent = questions[currentQuestionIndex].question;
        choicesList.innerHTML = "";
         questions[currentQuestionIndex].choices.forEach((choice)=>{
            const li = document.createElement("li");
            li.textContent = choice;
            li.addEventListener("click",()=>selectAnswer(choice));
            choicesList.appendChild(li);
         });
         
    }
    function selectAnswer(choice) {
        const correctAns = questions[currentQuestionIndex].answer;
        const listItems = choicesList.querySelectorAll("li");
    
        let selectedIndex = -1;
    
        for (let i = 0; i < listItems.length; i++) {
            if (listItems[i].textContent === choice) {
                selectedIndex = i;
                break;
            }
        }
    
        if (selectedIndex !== -1) {  
            if (choice === correctAns) { 
                score++;
                listItems[selectedIndex].classList.add("blue"); 
            } else {
                listItems[selectedIndex].classList.add("red"); 
            }
        } else {
            console.error("Selected choice not found in list!");
        }
    
        nextButton.classList.remove("hidden");
    }
            const showResult = ()=>{
        questionContainer.classList.add("hidden");
        resultContainer.classList.remove("hidden");
        restartButton.classList.remove("hidden");
        scoreDisplay.textContent = `Score: ${score}`;
    }

})