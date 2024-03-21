'use strict';

// Task 1
//
// const x = 10;
// const y = 7;
// const compare = x>y ? console.log ('x більше за y') : console.log ('x не більше, ніж y');

// Task 2

// const requestedNumber = prompt('Enter number');
// const num = parseInt(requestedNumber);
// const numLength = Math.abs(num).toString().length;
//
// if (!isNaN(num)) {
//     if (num < 0) {
//         if (numLength === 1) {
//             console.log('number ' + num + ' single negative');
//         } else if (numLength === 2) {
//             console.log('number ' + num + ' double digit negative');
//         } else {
//             console.log('number ' + num + ' three-digit or more negative');
//         }
//     } else if (num > 0) {
//         if (numLength === 1) {
//             console.log('number ' + num + ' single positive');
//         } else if (numLength === 2) {
//             console.log('number ' + num + ' double digit positive');
//         } else {
//             console.log('number ' + num + ' three-digit or more positive');
//         }
//     } else if (num === 0) {
//             console.log('You enter a zero');
//     }
//     else {
//         console.log('You didn`t enter a valid number');
//     }
// }

// Task 3

const numberOne = +prompt('Enter number');
const numberSecond = +prompt('Enter second number');
const numberThird = +prompt('Enter third number');

if (numberOne>numberSecond && numberOne>numberThird) {
    alert ('Greatest number' + ' ' + numberOne);
} else
    if (numberSecond>numberOne && numberSecond>numberThird) {
        alert('Greatest number' + ' ' + numberSecond);
    }
    else
    if (numberThird>numberSecond && numberThird>numberOne){
        alert('Greatest number' + ' ' + numberThird);
    } else {
        alert('You  didn`t enter a valid number');
    }


// Task 4
let firstSide = prompt('Enter the length of the first side of the triangle');
let secondSide = prompt('Enter the length of the second side of the triangle');
let thirdSide = prompt('Enter the length of the third side of the triangle');






