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
        question: "Ki lesz az új operátor Y10S1-ban?",//(bele ne írd a végén hogy hanyadik kérdés, mert a sorrend randomizált)
        options: ["Phobos", "Aurora", "Phoebe"],
        correct: "Aurora",//(csak ismételd meg az egyik választ)
    },
    { 
        id: "1",
        question: "Mikor adták ki a játékot?",
        options: ["2015. december 1.", "2014. március 6.", "2015. március 6."],
        correct: "2015. december 1.",
    },
    {
        id: "2",
        question: "Hogy Fogják hívni a játékot Y10S2-től?",
        options: ["Tom Clancy's Rainbow Six Siege 2", "Siege X", "Rainbow Six Siege X"],
        correct: "Siege X",
    },
    {
        id: "3",
        question: "Mi volt a legutolsó jétékbeli esemény neve?",
        options: ["Money Heist", "Outbreak", "Assault on Hereford"],
        correct: "Assault on Hereford",
    },
    {
        id: "4",
        question: "Ki az egyetlen észak-koreai operátor?",
        options: ["Vigil", "Nokk", "Deimos"],
        correct: "Vigil",
    },
    {
        id: "5",
        question: "Milyen származású Ace?",
        options: ["grúz", "norvég", "örmény"],
        correct: "norvég",
    },
    {
        id: "6",
        question: "Melyik ország nincsen reprezentálva?",
        options: ["Franciaország", "Spanyolország", "Magyarország"],
        correct: "Magyarország",
    },
    {
        id: "7",
        question: "Melyik pálya nincs a Ranked pályák között?",
        options: ["House", "Theme Park", "Outback"],
        correct: "House",
    },
    {
        id: "8",
        question: "Ki nyerte a 2025-ös Siege Invitationalt?",
        options: ["Unwanted", "BDS", "Faze",],
        correct: "Faze",
    },
    {
        id: "9",
        question: "Mennyi operátor van a játékban?",
        options: ["71", "74", "72"],
        correct: "74",
    },
    {
        id: "10",
        question: "Mi a neve Vigil shotgun-jának?",
        options: ["BOSG.12.2", "K1A", "K2A"],
        correct: "BOSG.12.2",
    },
    {
        id: "11",
        question: "Van C4-e Kapkan-nak?",
        options: ["Talán", "Nincs", "Van"],
        correct: "Van",
    },
    {
        id: "12",
        question: "Melyik a legtöbbet játszott támadó operátor?",
        options: ["Blitz", "Jackal", "Ash"],
        correct: "Ash",
    },
    {
        id: "13",
        question: "Hány reinforce-al kezdik a Preparation Phase-t a védekezők Ranked-ben?",
        options: ["10", "9", "8"],
        correct: "10",
    },
    {
        id: "14",
        question: 'Melyik operátornak a képessége az "Rtila"?',
        options: ["Mozzie", "Kaid", "Mozzie"],
        correct: "Kaid",
    },
    {
        id: "15",
        question: 'Melyik operátor mondja ezt: "I see Ive got your heart racing."',
        options: ["Azami", "IQ", "Pulse"],
        correct: "Pulse",
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

        userScore.innerHTML = "Az eredményed " + scoreCount + "/" + questionCount;
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