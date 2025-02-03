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
let count = 25;
let countdown;

const quizArray = [
    {
        id: "0",
        question: "Ki készítette a Játékot?",
        options: ["Josh Graham", "Oslo Albet", "Peter Steinhauser"],
        correct: "Oslo Albet",
    },
    { 
        id: "1",
        question: "Melyik állítás igaz erre a játékra?",
        options: ["Minden szint után mini osztályzatot kapsz", "3-szor kell meglökni a kart, mielőtt működik", "A gomb lenyomva marad, miután megnyomtad őket"],
        correct: "Minden szint után mini osztályzatot kapsz",
    },
    {
        id: "2",
        question: "Kik a katakterek?",
        options: ["Tüzfiú és Vizlány", "Tűzfiu és Vízlány", "Tűzfiú és Vízlány"],
        correct: "Tűzfiú és Vízlány",
    },
    {
        id: "3",
        question: "Mikor jelent meg a Fény templom?",
        options: [
            "2008. szeptember. 27.",
            "2010. október. 26.",
            "2013. január. 30.",
        ],
        correct: "2010. október. 26.",
    },
    {
        id: "4",
        question: "Mik a Vízlány gombjai?",
        options: ["A, W, D", "Nyilak", "J, I, K"],
        correct: "A, W, D",
    },
    {
        id: "5",
        question: "Melyik templomnak van a legtöbb szintje?",
        options: ["Jég", "Fény", "Kristály"],
        correct: "Fény",
    },
    {
        id: "6",
        question: "Hány szintje van pontosan?",
        options: ["41", "39", "43"],
        correct: "41",
    },
    {
        id: "7",
        question: "Az erdei templomnak hány szintje van?",
        options: ["32", "33", "35"],
        correct: "32",
    },
    {
        id: "8",
        question: "Melyik karakter megy gyorsabban a jégen?",
        options: ["Semelyik", "Vízlány", "Tűzfiú",],
        correct: "Tűzfiú",
    },
    {
        id: "9",
        question: "Milyen színű Tűzfiú szeme?",
        options: ["Narancssárga", "Citromsárga", "Fehér"],
        correct: "Citromsárga",
    },
    {
        id: "10",
        question: "Milyen vízlány hajstílusa?",
        options: ["Sötétkék hosszú haj", "Kék coff", "Kék lófarok"],
        correct: "Kék lófarok",
    },
    {
        id: "11",
        question: "Melyik folyadék nyírja ki mindkét szereplőt?",
        options: ["Higany", "Nitroglicerin", "Zöld vagy fekete nyálka"],
        correct: "Zöld vagy fekete nyálka",
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
        displayContainer.classList.add("hide");
        scoreContainer.classList.remove("hide");

        userScore.innerHTML = "Az eredményed " + scoreCount + "/" + questionCount;
        } else {
        countOfQuestion.innerHTML =
            questionCount + 1 + " of " + quizArray.length + " question";

        quizDisplay(questionCount);
        count = 25;
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

        countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";

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
    count = 25;
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