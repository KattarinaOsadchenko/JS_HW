'use strict';

// 1
let a= 0;
const u = (a === 0) ? console.log('Вірно') :  console.log('Неправильно');

// 2
const c = (a > 0) ? console.log('Вірно') :  console.log('Неправильно');

// 3
const  d = (a < 0) ? console.log('Вірно') :  console.log('Неправильно');

// 4
const e = (a >= 0) ? console.log('Вірно') :  console.log('Неправильно');

// 5
const f = (a <= 0) ? console.log('Вірно') :  console.log('Неправильно');

// 6
const g = (a !== 0) ? console.log('Вірно') :  console.log('Неправильно');

// 7
const h = (a === 'test') ? console.log('Вірно') :  console.log('Неправильно');


// 8
const i = (a === '1') ? console.log('Вірно') :  console.log('Неправильно');

// 9
const comparison = (a>0 && a<5) ? console.log('Вірно') :  console.log('Неправильно');

// 10
if (a===0 || a===2){
    a += 7;
} else {
    a /= 10;
}
console.log(a);

// 11
let q = 0;
let b = 4;
let sum;
let difference;
if (q <= 1 && b >= 3 ) {
    sum = q + b;
    console.log(sum);
} else {
    difference = q - b;
    console.log(difference);
}

// 12

const score = ((q > 2 && q < 11) || (b >= 6 && b < 14)) ? 'Вірно' : 'Невірно';
console.log(score);

// 13

let num = 2
let result;

switch (num){
    case 1:
        result = "зима";
        break;
    case 2:
        result = "весна";
        break;
    case 3:
        result = "літо";
        break;
    case 4:
        result = "осінь";
        break;
    default:
        result = "Недійсне значення";
}
console.log(result)