let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 31;
let countdown;

const quizArray = [
    {
        id: "0",
        question: "1. kérdés",//(bele ne írd a végén hogy hanyadik kérdés, mert a sorrend randomizált)
        options: ["1. válasz", "2. válasz", "3. válasz"],
        correct: "'Helyes válasz'",//(csak ismételd meg az egyik választ)
    },
    { 
        id: "1",
        question: "2. kérdés",
        options: ["1. válasz", "2. válasz", "3. válasz"],
        correct: "'Helyes válasz'",
    },
    {
        id: "2",
        question: "3. kérdés",
        options: ["1. válasz", "2. válasz", "3. válasz"],
        correct: "'Helyes válasz'",
    },
    {
        id: "3",
        question: "4. kérdés",
        options: ["1. válasz", "2. válasz", "3. válasz"],
        correct: "'Helyes válasz'",
    },
    {
        id: "4",
        question: "5. kérdés",
        options: ["1. válasz", "2. válasz", "3. válasz"],
        correct: "'Helyes válasz'",
    },
    {
        id: "5",
        question: "6. kérdés",
        options: ["1. válasz", "2. válasz", "3. válasz"],
        correct: "'Helyes válasz'",
    },
    {
        id: "6",
        question: "7. kérdés",
        options: ["1. válasz", "2. válasz", "3. válasz"],
        correct: "'Helyes válasz'",
    },
    {
        id: "7",
        question: "8. kérdés",
        options: ["1. válasz", "2. válasz", "3. válasz"],
        correct: "'Helyes válasz'",
    },
    {
        id: "8",
        question: "9. kérdés",
        options: ["1. válasz", "2. válasz", "3. válasz",],
        correct: "'Helyes válasz'",
    },
    {
        id: "9",
        question: "10. kérdés",
        options: ["1. válasz", "Citromsárga", "3. válasz"],
        correct: "'Helyes válasz'",
    },
    {
        id: "10",
        question: "11. kérdés",
        options: ["1. válasz", "2. válasz", "3. válasz"],
        correct: "'Helyes válasz'",
    },
    {
        id: "11",
        question: "12. kérdés",
        options: ["1. válasz", "2. válasz", "3. válasz"],
        correct: "'Helyes válasz'",
    },
    
    ];

restart.addEventListener("click", () => {
    initial();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
    });

nextBtn.addEventListener(
    "click",
    (displayNext = () => {
        questionCount += 1;

        if (questionCount == quizArray.length) {
        clearInterval(countdown);
        displayContainer.classList.add("hide");
        scoreContainer.classList.remove("hide");

        userScore.innerHTML = "Az eredményed: " + scoreCount + "/" + questionCount + " pont.";
        } else {
        countOfQuestion.innerHTML =
            questionCount + 1 + " a " + quizArray.length + " kérdésből";

        quizDisplay(questionCount);
        count = 31;
        clearInterval(countdown);
        timerDisplay();
        }
    })
    );

const timerDisplay = () => {
    countdown = setInterval(() => {
        count--;
        timeLeft.innerHTML = `${count}s`;
        if (count == 0) {
        clearInterval(countdown);
        displayNext();
        }
    }, 1000);
};

const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".container-mid");

    quizCards.forEach((card) => {
        card.classList.add("hide");
    });

    quizCards[questionCount].classList.remove("hide");
    };

    function quizCreator() {
    quizArray.sort(() => Math.random() - 0.5);

    for (let i of quizArray) {
        i.options.sort(() => Math.random() - 0.5);

        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");

        countOfQuestion.innerHTML = 1 + " a " + quizArray.length + " kérdésből";

        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);

        div.innerHTML += `
        <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
        <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
        <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
        `;
        quizContainer.appendChild(div);
    }
}

function checker(userOption) {
    let userSolution = userOption.innerText;
    let question =
        document.getElementsByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll(".option-div");

    if (userSolution === quizArray[questionCount].correct) {
        userOption.classList.add("correct");
        scoreCount++;
    } else {
        userOption.classList.add("incorrect");

        options.forEach((element) => {
        if (element.innerText == quizArray[questionCount].correct) {
            element.classList.add("correct");
        }
        });
    }

    clearInterval(countdown);

    options.forEach((element) => {
        element.disabled = true;
    });
    }

    function initial() {
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    count = 31;
    clearInterval(countdown);
    timerDisplay();
    quizCreator();
    quizDisplay(questionCount);
    }

    startButton.addEventListener("click", () => {
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    initial();
    });

    window.onload = () => {
    startScreen.classList.remove("hide");
    displayContainer.classList.add("hide");
};