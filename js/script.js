'use strict';

// 1
const arrOne = [1, 2, 3];
const arrSecond = [4, 5, 6];
const newArr = arrOne.concat(arrSecond);
console.log(newArr);

// 2
const reversArr = arrOne.reverse();
console.log(reversArr);

// 3
const arrThird = [1, 2, 3];
console.log(arrThird.push(4,5,6));
console.log(arrThird);

// 4
const arrQ = [1, 2, 3];
console.log(arrQ.unshift(4,5,6));
console.log(arrQ);

// 5
const arrA = ['js','css', 'jq'];
console.log(arrA[0]);

// 6
console.log(arrA[arrA.length - 1]);

// 7
const arr = [1, 2, 3, 4, 5];
console.log(arr.slice(0,3));

// 8
console.log(arr.slice(3));