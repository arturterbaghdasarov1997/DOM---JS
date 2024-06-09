// Hide div
const btnEl = document.createElement('button');
const divEl1 = document.createElement('div');
const txtEl1 = document.createTextNode('Hey there. How are you?');

btnEl.id = 'clickBTN';
divEl1.id = 'rndText';
btnEl.textContent = 'Click Me';

divEl1.appendChild(txtEl1);
document.body.appendChild(btnEl);
document.body.appendChild(divEl1);

const btn = document.querySelector("#clickBTN");
const txt = document.querySelector("#rndText");

btn.addEventListener("click", () => txt.style.display = "none");

// DOM elements
const divEl2 = document.createElement('div');
const h2El = document.createElement('h2');
const txtEl2 = document.createTextNode('Gandalf');
const aEl = document.createElement('a');

divEl2.id = 'card';
aEl.href = 'https://lms.skillwill.com/';
aEl.textContent = 'Go to profile';

h2El.appendChild(txtEl2);
divEl2.appendChild(h2El);
divEl2.appendChild(aEl);
document.body.appendChild(divEl2);

// Quiz
const questions = [
    {
        question: "Which character famously said, “We were on a break”?",
        options: ["Joey", "Chandler", "Ross", "Mike"],
        correctAnswer: "Ross",
    },
    {
        question: "What is the title of the theme song of F.R.I.E.N.D.S?",
        options: ["I’ll Be There for You", "Smelly Cat", "Central Perk", "The One With All The Friends"],
        correctAnswer: "I’ll Be There for You",
    },
    {
        question: "What does Joey never share?",
        options: ["His books", "His food", "His DVDs", "His clothes"],
        correctAnswer: "His food",
    },
    {
        question: "What is Chandler’s middle name?",
        options: ["Muriel", "Matthew", "Marvin", "Michael"],
        correctAnswer: "Muriel",
    },
    {
        question: "Which character has a twin?",
        options: ["Rachel", "Ross", "Phoebe", "Joey"],
        correctAnswer: "Phoebe",
    },
    {
        question: "What job does Ross have?",
        options: ["Chef", "Paleontologist", "Actor", "Copywriter"],
        correctAnswer: "Paleontologist",
    },
    {
        question: "What is the name of Joey’s stuffed penguin?",
        options: ["Huggsy", "Waddle", "Pingu", "Mr. Flipper"],
        correctAnswer: "Huggsy",
    },
    {
        question: "Who sings the song “Smelly Cat”?",
        options: ["Joey", "Rachel", "Phoebe", "Monica"],
        correctAnswer: "Phoebe",
    },
    {
        question: "What fake name does Phoebe use?",
        options: ["Regina Phalange", "Phoebe Buffay-Hannigan", "Ursula Buffay", "Monica Bing"],
        correctAnswer: "Regina Phalange",
    },
    {
        question: "What do Monica and Chandler name their twins?",
        options: ["Erica and Jack", "Jack and Jill", "Emma and Ethan", "Monica Jr. and Chandler Jr."],
        correctAnswer: "Erica and Jack",
    },
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsForm = document.getElementById("options");
const scoreElement = document.getElementById("scoreValue");

const displayQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsForm.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
        const optionElement = document.createElement("div");
        const radioInput = document.createElement("input");
        radioInput.type = "radio";
        radioInput.name = "option";
        radioInput.value = option;
        radioInput.id = "option" + index;
        optionElement.appendChild(radioInput);
        const label = document.createElement("label");
        label.textContent = option;
        label.setAttribute("for", "option" + index);
        optionElement.appendChild(label);
        optionsForm.appendChild(optionElement);
    });
};

const checkAnswer = () => {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) {
        alert("Please select an option.");
        return;
    }
    const selectedAnswer = selectedOption.value;
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correctAnswer) {
        score++;
        scoreElement.textContent = score;
        selectedOption.parentNode.style.backgroundColor = "lightgreen";
        selectedOption.parentNode.style.fontWeight = "bold";
    } else {
        selectedOption.parentNode.style.backgroundColor = "red";
        selectedOption.parentNode.style.fontWeight = "bold";
    }

    setTimeout(() => {
        selectedOption.parentNode.style.color = "";
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            displayQuestion();
        } else {
            alert(`Quiz finished! Your final score is: ${score}`);
        }
    }, 1000);
};

document.addEventListener("DOMContentLoaded", () => {
    displayQuestion();
    document.getElementById("checkButton").addEventListener("click", checkAnswer);
});
