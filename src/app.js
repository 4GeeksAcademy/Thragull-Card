/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  //code to create card
  renderCard();

  // Event listener with button:
  let button = document.getElementById("newCardButton");
  button.addEventListener("click", renderCard);

  let heightSelector = document.getElementById("heightForm");
  let linkedButton = document.getElementById("btnLink");
  let widthSelector = document.getElementById("widthForm");

  heightSelector.addEventListener("change", changeHeight);
  linkedButton.addEventListener("click", linkButton);
  widthSelector.addEventListener("change", changeWidth);
  timer();
};

const suits = ["♥", "♠", "♣", "♦"];
const values = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

function getColor(suit) {
  if (suit === "♥" || suit === "♦") return "red";
  return "black";
}

function createRandomCard() {
  let card = {
    suit: "",
    value: "",
    color: ""
  };
  card.suit = suits[Math.floor(Math.random() * suits.length)];
  console.log(card.suit);
  card.value = values[Math.floor(Math.random() * values.length)];
  card.color = getColor(card.suit);
  return card;
}
function renderCard() {
  let number = document.getElementById("cardValue");
  let topCorner = document.getElementById("topLeft");
  let bottomCorner = document.getElementById("bottomRight");
  let card = createRandomCard();
  let seconds = document.getElementById("timer");
  seconds.innerText = "10";

  console.log(card);
  console.log(number);
  number.innerText = card.value;
  number.style.color = card.color;
  topCorner.innerText = `${card.value}${card.suit}`;
  topCorner.style.color = card.color;
  bottomCorner.innerText = `${card.value}${card.suit}`;
  bottomCorner.style.color = card.color;
}

function linkButton() {
  let linkedButton = document.getElementById("btnLink");

  if (linkedButton.classList[0] === "linked") {
    linkedButton.classList.replace("linked", "unlinked");
    linkedButton.innerHTML = '<i class="fa-solid fa-link-slash"></i>';
  } else {
    linkedButton.classList.replace("unlinked", "linked");
    linkedButton.innerHTML = '<i class="fa-solid fa-link"></i>';
  }
}

function changeHeight() {
  let heightSelector = document.getElementById("heightForm");
  let linkedButton = document.getElementById("btnLink");
  let card = document.getElementById("card");
  let widthSelector = document.getElementById("widthForm");
  let topCorner = document.getElementById("topLeft");
  let bottomCorner = document.getElementById("bottomRight");
  let number = document.getElementById("cardValue");

  if (heightSelector.valueAsNumber < 75.1 && heightSelector.valueAsNumber > 0) {
    if (linkedButton.classList[0] === "linked") {
      card.style.height = heightSelector.valueAsNumber + "vh";
      card.style.width = heightSelector.valueAsNumber * 0.715 + "vh";
      widthSelector.value = heightSelector.valueAsNumber * 0.715;
      topCorner.style.fontSize = heightSelector.valueAsNumber * 0.08 + "vh";
      bottomCorner.style.fontSize = heightSelector.valueAsNumber * 0.08 + "vh";
      bottomCorner.style.bottom = heightSelector.valueAsNumber / 75 + "vh";
      number.style.fontSize = heightSelector.valueAsNumber * 0.5333 + "vh";
      console.log(card.style.height);
    } else {
      card.style.height = heightSelector.valueAsNumber + "vh";
      topCorner.style.fontSize = heightSelector.valueAsNumber * 0.08 + "vh";
      bottomCorner.style.fontSize = heightSelector.valueAsNumber * 0.08 + "vh";
      bottomCorner.style.bottom = heightSelector.valueAsNumber / 75 + "vh";
      number.style.fontSize = heightSelector.valueAsNumber * 0.5333 + "vh";
    }
  }
}
function changeWidth() {
  let heightSelector = document.getElementById("heightForm");
  let linkedButton = document.getElementById("btnLink");
  let card = document.getElementById("card");
  let widthSelector = document.getElementById("widthForm");
  let topCorner = document.getElementById("topLeft");
  let bottomCorner = document.getElementById("bottomRight");
  let number = document.getElementById("cardValue");

  if (widthSelector.valueAsNumber < 53.626 && widthSelector.valueAsNumber > 0) {
    if (linkedButton.classList[0] === "linked") {
      card.style.height = widthSelector.valueAsNumber / 0.715 + "vh";
      card.style.width = widthSelector.valueAsNumber + "vh";
      heightSelector.value = widthSelector.valueAsNumber / 0.715;
      topCorner.style.fontSize =
        (widthSelector.valueAsNumber * 6) / 53.625 + "vh";
      bottomCorner.style.fontSize =
        (widthSelector.valueAsNumber * 6) / 53.625 + "vh";
      bottomCorner.style.bottom = widthSelector.valueAsNumber / 53.625 + "vh";
      number.style.fontSize =
        (widthSelector.valueAsNumber * 40) / 53.625 + "vh";
      console.log(card.style.height);
    } else {
      card.style.width = widthSelector.valueAsNumber + "vh";
      topCorner.style.fontSize = heightSelector.valueAsNumber * 0.08 + "vh";
      bottomCorner.style.fontSize = heightSelector.valueAsNumber * 0.08 + "vh";
      number.style.fontSize = heightSelector.valueAsNumber * 0.5333 + "vh";
      topCorner.style.fontSize =
        (widthSelector.valueAsNumber * 6) / 53.625 + "vh";
      bottomCorner.style.fontSize =
        (widthSelector.valueAsNumber * 6) / 53.625 + "vh";
      number.style.fontSize =
        (widthSelector.valueAsNumber * 40) / 53.625 + "vh";
    }
  }
}
function timer() {
  let countDownFunction = setInterval(function() {
    let seconds = document.getElementById("timer");
    let number = parseInt(seconds.innerText);
    number--;
    seconds.innerText = number;
    if (number === 0) {
      clearInterval(countDownFunction);
      renderCard();
      seconds.innerText = 10;
      timer();
    }
  }, 1000);
}
