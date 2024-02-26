'use strict';

// Task 1

const name = prompt ("Enter your name");
const surname = prompt ("Enter your surname");
const color = prompt('Enter your favorite color');
const сoncPhrase = name + '' + surname + '' + color;
console.log (сoncPhrase);

// Task 2

const number = 12345;
const numberString = number.toString();

const firstChar = numberString [0];
const secondChar = numberString [1];
const thirdChar = numberString [2];
const fourthChar = numberString [3];
const lastChar = numberString [numberString.length - 1];
console.log (firstChar+ ' ' +secondChar+ ' ' +thirdChar+ ' ' +fourthChar+ ' ' +lastChar);
