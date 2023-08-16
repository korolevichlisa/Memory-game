cardArray.sort(() => 0.5 - Math.random());

var newCardArray = []
for(let i = 0; i < 6; i ++ ){
  newCardArray.push(cardArray[i])
}
console.log(newCardArray)
{
  const temp = newCardArray.map((item) => item);

  for (const item of temp) {
    newCardArray.push(item);
  }
}




const displayGrid = document.querySelector("#grid");
const resulDisplay = document.querySelector("#result");
let cardsChoisen = [];
let cardsChoisenIds = [];
let cardsWon = [];

function createBoard() {
  for (let i = 0; i < newCardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "./images/blank.svg");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    displayGrid.appendChild(card);
  }
}

createBoard();

function checkMatch() {
  const cards = document.querySelectorAll("img");
  const optionOneId = cardsChoisenIds[0];
  const optionTwoId = cardsChoisenIds[1];
  if (optionOneId === optionTwoId) {
    cards[optionOneId].setAttribute("src", "images/blank.svg");
    cards[optionTwoId].setAttribute("src", "images/blank.svg");
    alert("You have clicked the same image!");
  } else if (cardsChoisen[0] === cardsChoisen[1]) {
    alert("you are match!!!");
    cards[optionOneId].classList.add("disable");
    cards[optionTwoId].classList.add("disable");
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);

    cardsWon.push(cardsChoisen);
  } else {
    cards[optionOneId].setAttribute("src", "images/blank.svg");
    cards[optionTwoId].setAttribute("src", "images/blank.svg");
    alert("sorry try again");
  }

  cardsChoisen = [];
  cardsChoisenIds = [];
  resulDisplay.textContent = cardsWon.length;

  if (cardsWon.length == newCardArray.length / 2) {
    resulDisplay.textContent = "congratulations you found them all";
  }
}

function flipCard() {
  const cardId = this.getAttribute("data-id");

  cardsChoisen.push(newCardArray[cardId].name);
  cardsChoisenIds.push(cardId);

  this.setAttribute("src", newCardArray[cardId].img);
  if (cardsChoisen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
