"use strict";

const addBtn = document.querySelector(".plus");
const setBtn = document.querySelector(".set");
let selectDish = document.querySelectorAll(".dish");
let displayDrinkedWater = document.querySelector(".value-drinked-water");
let displayTarget = document.querySelector(".value-target");
let displayDetailAdd = document.querySelector(".details-plus");

let drinkedWater = 0;
displayDrinkedWater.textContent = drinkedWater;
let dish = 250 ;
displayDetailAdd.textContent = `${dish} ml`;
let valueTarget = 3200;
displayTarget.textContent = valueTarget;

for (let i = 0; i < selectDish.length; i++) {
  selectDish[i].addEventListener("click", function () {
    for (let j = 0; j < selectDish.length; j++) {
      selectDish[j].classList.remove("selected-dish");
    }
    selectDish[i].classList.add("selected-dish");
    dish = selectDish[i].children[0].textContent;
    displayDetailAdd.textContent = `${dish} ml`;
    return dish;
  });
}

setBtn.addEventListener("click", function () {
  valueTarget = Number(document.getElementById("value-target").value);
  displayTarget.textContent = valueTarget;
  return valueTarget;
});

addBtn.addEventListener("click", function () {
  if (drinkedWater < valueTarget) {
    drinkedWater += Number(dish);
    displayDrinkedWater.textContent = drinkedWater;
  } else if (drinkedWater == valueTarget) {
    displayDrinkedWater.textContent = valueTarget;
    addBtn.classList.add("hidden");
  }
});
