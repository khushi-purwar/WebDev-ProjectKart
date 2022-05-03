const cardContainer = document.getElementById("card-container");

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

const addCardContainer = document.getElementById("add-card-container");
const addCardBtn = document.getElementById("add-card");
const closeCardBtn = document.getElementById("close-card");
const question = document.getElementById("question");
const answer = document.getElementById("answer");
const addNewCardBtn = document.getElementById("add-card-btn");

const clearBtn = document.getElementById("clear-btn");

let currentActiveCard = 0;

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