/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
};
function generateExcuse() {
  let who = [
    "The dog",
    "My grandma",
    "The mailman",
    "My bird",
    "My girl",
    "My shoe",
    "My car"
  ];
  let action = ["ate", "peed", "crushed", "broke", "sleep", "food", "timer"];
  let what = [
    "my homework",
    "my phone",
    "the car",
    "my cloth",
    "my benz",
    "the pastor"
  ];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying",
    "when i woke up",
    "when i eat",
    "when i dance"
  ];

  function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  return `${getRandomItem(who)} ${getRandomItem(action)} ${getRandomItem(
    what
  )} ${getRandomItem(when)}.`;
}
