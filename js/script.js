'use strict';

const age = +prompt('Введіть свій вік, лише цифри')
let word;
if (!isNaN(age)) {

    if (age % 10 === 1 && age % 100 !== 11) {
        word = "рік";
    } else
        if ((age % 10 >= 2 && age % 10 <= 4) && (age % 100 < 10 || age % 100 >= 20)) {
        word = "роки";
    } else {
        word = "років";
    }
}
alert(age + " " + word);
