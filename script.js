"use strict";
// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pounds


const convertBtn = document.querySelector(".convert");
const inputEl = document.getElementById("input-field");
const answerBox1 = document.querySelector(".answer-box1");
const answerBox2 = document.querySelector(".answer-box2");
const answerBox3 = document.querySelector(".answer-box3");

function metersToFeet(n){
 return  (n * 3.281).toFixed(3)
}
function feetToMeters(n){
    return (n/3.281).toFixed(3)
}
function litersToGallons(n){
    return (n * .264).toFixed(3)
}
function gallonsToLiters(n){
    return (n /.264).toFixed(3)
}
function kilogramsToPounds(n){
    return (n * 2.204).toFixed(3)
}
function poundsToKilograms(n){
    return (n/ 2.204).toFixed(3)
}