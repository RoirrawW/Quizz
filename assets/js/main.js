let tabQuestion = [
    "1. Au début de la saga, Harry se trouve chez son oncle et sa tante. Comment s'appellent-t-ils ?",
    "2. Le garde chasse de Poudlard emmène Harry faire ses achats pour la rentrée. Ils rencontrent un professeur. Comment s'appelle celui-ci ?",
    "3. Pendant qu'Harry achète son uniforme celui-ci rencontre un de ses futurs camarades d'école. Comment s'appelle-t-il ?",
    "4. Harry est arrivé à trouver son train et a rencontré Ron. Hermione Granger fait son apparition, disant chercher un animal appartenent à Neville Londubat. Quel est cet animal ?"
]
let tabAnswer = [
    ["Dudley et Primrose", "Vernon et Pétunia", "James et Lily", "Albus et Narcissa"],
    ["Minerva McGonagall", "Dolores Ombrage", "Gilderoy Lockart", "Quirinus Quirrell"],
    ["Neville Londubat", "Ronald Weasley", "Drago Malfoy", "Seamus Finnigan"],
    ["Un chat", "Un hibou", "Un crapaud", "Une chouette"]
]
let goodAnswer = [
    tabAnswer[0][1],
    tabAnswer[1][3],
    tabAnswer[2][2],
    tabAnswer[3][2]
]

let question = document.querySelector("#question")
let score = document.querySelector("#score")
let choice = document.querySelectorAll(".choice")
let round = 0;
let scoreNumber = 0;
let time = 30;

function displayQuestion() {
    question.innerText = tabQuestion[round]
}

function displayChoice() {
    for (let i = 0; i < choice.length; i++) {
        choice[i].innerText = tabAnswer[round][i]
    }
}

function checked(element) {
    if (element.innerText == goodAnswer[round]) {
        console.log("Bonne réponse");
        scoreQuiz()
    }
    nextQuestion()
}

function nextQuestion() {
    time = 30
    displayTIme(time)
    round++
    if (round >= tabQuestion.length) {
        question.innerText = "Fin"
    } else {
        displayQuestion()
        displayChoice()
    }

}

function scoreQuiz() {
    scoreNumber++
    score.innerText = "Score : " + scoreNumber
}

displayQuestion()
displayChoice()

function displayTIme(rebour) {
    document.querySelector("#chrono").innerText = rebour
}

function updateTime() {
    if (time > 0) {
        setTimeout(function () {
            time--
            displayTIme(time)
            updateTime()
            if (time <= 10) {
                document.getElementById("chrono").style.color = "red";
            } else if (time > 10) {
                document.getElementById("chrono").style.color = "white";
            }
            if (round >= 4) {
                document.querySelector("#fini").innerHTML = ""
                document.querySelector(".fin").innerHTML = ""

            }
        }, 1000)
    } else {

        time = 30
        if (round <= 3) {
            updateTime()
            nextQuestion()
        }
    }
}

console.log(round);
displayTIme(time)
updateTime()