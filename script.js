"use strict";
// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pounds


const convertBtn = document.querySelector(".convert");
const inputEl = document.getElementById("input-field");

const answerBox1 = document.querySelector(".answer-box1");
const answerBox2 = document.querySelector(".answer-box2");
const answerBox3 = document.querySelector(".answer-box3");

function metersToFeet(){
 return  (inputEl.value * 3.281).toFixed(3)
}
function feetToMeters(){
    return (inputEl.value/3.281).toFixed(3)
}
function litersToGallons(){
    return (inputEl.value * .264).toFixed(3)
}
function gallonsToLiters(){
    return (inputEl.value /.264).toFixed(3)
}
function kilogramsToPounds(){
    return (inputEl.value * 2.204).toFixed(3)
}
function poundsToKilograms(){
    return (inputEl.value/ 2.204).toFixed(3)
}

function renderAnswers(){
  answerBox1.textContent = 
  `${inputEl.value} meters = ${metersToFeet()} feet | ${inputEl.value} feet = ${feetToMeters()} meters`
  
  answerBox2.textContent =  
  `${inputEl.value} liters = ${litersToGallons()} gallons | ${inputEl.value} gallons = ${gallonsToLiters()} liters`

  answerBox3.textContent =  
  `${inputEl.value} kilos = ${kilogramsToPounds()} pounds | ${inputEl.value} pounds = ${poundsToKilograms()} kilos`

}

convertBtn.addEventListener("click", renderAnswers)