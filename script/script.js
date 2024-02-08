"use strict";

const addBtn = document.querySelector(".plus");
const setBtn = document.querySelector(".set");
let selectDish = document.querySelectorAll(".dish");
let inputTarget = document.getElementById("value-target");
let displayDrinkedWater = document.querySelector(".value-drinked-water");
let displayTarget = document.querySelector(".value-target");
let displayDetailAdd = document.querySelector(".details-plus");

let drinkedWater = 0;
displayDrinkedWater.textContent = drinkedWater;
let dish = 250;
displayDetailAdd.textContent = `${dish} ml`;
let valueTarget = 3200;
displayTarget.textContent = valueTarget;

const setTarget = function () {
  displayTarget.innerHTML = inputTarget.value;
  valueTarget = Number(inputTarget.value);
  return valueTarget;
};

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

addBtn.addEventListener("click", function () {
  if (drinkedWater < valueTarget) {
    drinkedWater += Number(dish);
    displayDrinkedWater.textContent = drinkedWater;
  }
  if (drinkedWater == valueTarget || drinkedWater > valueTarget) {
    displayDrinkedWater.textContent = valueTarget;
    addBtn.classList.add("hidden");
  }
});
