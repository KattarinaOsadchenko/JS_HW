'use strict';

// task 1

let str = '';

for (let i = 10; i<=20; i++) {
    str += i + ', '
}
console.log(str);

// task 2

let sqr = '';

for (let a = 10; a <=20; a++) {
    sqr+= (a*a) + ' ';
}
console.log(sqr);

// task 3

let table7 = '';

for (let i = 1; i<=10; i++) {
    table7 += (i*7) + ' ';
}
console.log(table7);

// task 4

let sum = 0;
for (let i =1; i <=15; i++) {
    sum += i;
}
console.log('sum of numbers' + ' ' + sum);

// task 5

let product = BigInt(1);
for (let i = 15; i<=35; i++) {
    product *= BigInt(i);
}

console.log('product of numbers' + ' ' + product);

// task 6

 let sumTask6= 0;
for (let i =1; i <=500; i++) {
    sumTask6+= i
}
let average = sumTask6/500
console.log(average)

// Task 7
let sumEven = 0;
for (let i = 30; i<=80; i++) {
    if ( i % 2 === 0) {
        sumEven +=i;
    }
}
console.log(sumEven);

// Task 8

let multiple3 = 0;
for (let i = 100; i<=200; i++) {
    if ( i % 3 === 0) {
        multiple3 += i + ', '
    }
}
console.log(multiple3);

// Task 9
const natNum = 42;

for (let i = 1; i <=natNum; i++) {
    if (natNum % i === 0) {
        console.log(i);
    }
}

// Task 12

