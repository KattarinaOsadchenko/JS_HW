'use strict';

// Task 1

const arr = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i<arr.length; i++) {
    sum += arr[i];
}

console.log('сумa елементів arr', sum);

// Task 2
let square = 0;

for (let i =1; i < arr.length; i++) {
    square += arr[i] ** 2;
}

console.log('сума квадратів arr', square)