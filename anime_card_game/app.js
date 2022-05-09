document.addEventListener("DOMContentLoaded", (e) => {
  console.log(e);
  cardGenerator();
  board();
});

const cardGenerator = () => {
  //We generate the object 🧑🏻‍💻
  let cardData = [
    { imgSrc: "./images/one_punchman.jpeg", id: 1, name: "one punchman" },
    { imgSrc: "./images/luffy.jpeg", id: 2, name: "luffy" },
    { imgSrc: "./images/don_luffy.jpeg", id: 3, name: "don luffy" },
    { imgSrc: "./images/deathnote.jpeg", id: 4, name: "deathnote" },
    { imgSrc: "./images/code_geass_chess.jpeg", id: 5, name: "lelouch chess pieces" },
    { imgSrc: "./images/aot_wall.jpeg", id: 6, name: "wall maria" },
    { imgSrc: "./images/aot_pose.jpeg", id: 7, name: "salute" },
    { imgSrc: "./images/demon_slayer.jpeg", id: 8, name: "zeniestu" },
    { imgSrc: "./images/one_punchman.jpeg", id: 9, name: "one punchman" },
    { imgSrc: "./images/luffy.jpeg", id: 10, name: "luffy" },
    { imgSrc: "./images/don_luffy.jpeg", id: 11, name: "don luffy" },
    { imgSrc: "./images/deathnote.jpeg", id: 12, name: "deathnote" },
    { imgSrc: "./images/code_geass_chess.jpeg", id: 13, name: "lelouch chess pieces" },
    { imgSrc: "./images/aot_wall.jpeg", id: 14, name: "wall maria" },
    { imgSrc: "./images/aot_pose.jpeg", id: 15, name: "salute" },
    { imgSrc: "./images/demon_slayer.jpeg", id: 16, name: "zeniestu" },
  ];

  //We need to shuffle the cards 🃏
  cardData.sort(() => Math.random() - 0.5);

  //We generate the cards ♣️
  cardData.forEach((item) => {
    const section = document.querySelector("section");
    const card = document.createElement("div");
    card.classList = "card";

    card.setAttribute("id", item.id);
    card.setAttribute("name", item.name);

    const face = document.createElement("img");
    face.classList = "face";
    face.src = item.imgSrc;

    const back = document.createElement("div");
    back.classList = "back";

    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

    card.addEventListener("click", (e) => {
      console.log(e);
      //Run our flip animation
      face.classList.toggle("toggleCard");
      card.classList.toggle("toggleCard");
    });
  });

  //
};

const board = () => {
  console.log("i will fight you");
};

//Toggle Cards
// document.addEventListener("click", (event) => {
//   console.log(event);
//   if(event.target === '')
// });
