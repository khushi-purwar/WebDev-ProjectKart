const cardContainer = document.getElementById("card-container");

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const currentCard = document.getElementById("current-card");

const addCardContainer = document.getElementById("add-card-container");
const addCardBtn = document.getElementById("add-card");
const closeCardBtn = document.getElementById("close-card");
const question = document.getElementById("question");
const answer = document.getElementById("answer");
const addNewCardBtn = document.getElementById("add-card-btn");

const clearBtn = document.getElementById("clear-btn");


let currentActiveCard = 0;


const cardElements = [];


const cardsData = getCardsData();

function createCards() {
    cardsData.forEach((data, index) => createCard(data, index));
}


function createCard(data, index) {

    const card = document.createElement("div");

    card.classList.add("card");

    if (index === 0) {
        card.classList.add("active");
    }

    card.innerHTML = `
        <div class="inner-card">
            <div class="card-front">
                <p>${data.question}</p>
            </div>
            <div class="card-back">
                <p>${data.answer}</p>
            </div>
        </div>
    `;

    card.addEventListener("click", () => card.classList.toggle("show-answer"));

    cardElements.push(card);

    cardContainer.appendChild(card);

    updateCurrentCardText();
}


function updateCurrentCardText() {
    currentCard.innerHTML = `<p>${currentActiveCard + 1}/${
    cardElements.length
  }</p>`;
}


function getCardsData() {
    const cards = JSON.parse(localStorage.getItem("cards"));
    return cards === null ? [] : cards;
}


function saveCardData(cards) {

    localStorage.setItem("cards", JSON.stringify(cards));

    window.location.reload();
}

createCards();


nextBtn.addEventListener("click", () => {

    cardElements[currentActiveCard].className = "card left";

    currentActiveCard++;

    if (currentActiveCard > cardElements.length - 1) {
        currentActiveCard = cardElements.length - 1;
    }

    cardElements[currentActiveCard].className = "card active";

    updateCurrentCardText();
});

prevBtn.addEventListener("click", () => {

    cardElements[currentActiveCard].className = "card right";

    currentActiveCard--;

    if (currentActiveCard < 0) {
        currentActiveCard = 0;
    }

    cardElements[currentActiveCard].className = "card active";

    updateCurrentCardText();
});


addCardBtn.addEventListener("click", () => {
    addCardContainer.classList.add("show");
});


closeCardBtn.addEventListener("click", () => {
    addCardContainer.classList.remove("show");
});

addNewCardBtn.addEventListener("click", () => {

    const questionInput = question.value;
    const answerInput = answer.value;

    if (questionInput.trim() && answerInput.trim()) {

        const newCard = { question: questionInput, answer: answerInput };

        createCard(newCard);

        question.value = "";
        answer.value = "";

        addCardContainer.classList.remove("show");

        cardsData.push(newCard);

        saveCardData(cardsData);
    }
});


clearBtn.addEventListener("click", () => {

    localStorage.clear();

    cardContainer.innerHTML = "";

    window.location.reload;

    currentCard.innerHTML = `<p></p>`;
});