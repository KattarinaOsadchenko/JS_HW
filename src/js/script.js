'use strict';
// Task 1
let userName = prompt('Enter your name');
let day = prompt('Enter what day it is');
let mood = prompt('Enter what your mood today');

let result= userName + day + mood;

console.log('result', result)

// Task 2

const number = 12345;
const numberString = number.toString();

const firstChar = numberString [0];
const secondChar = numberString [1];
const thirdChar = numberString [2];
const fourthChar = numberString [3];
const lastChar = numberString [numberString.length - 1];
console.log (firstChar+ ' ' +secondChar+ ' ' +thirdChar+ ' ' +fourthChar+ ' ' +lastChar);