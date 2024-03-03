'use strict';

const action= prompt('Enter the mathematical action you would like to perform: if add - enter add, if subtraction - enter sub, if multiplication -enter mult, if division - enter div');
const numberFirst = +prompt('Enter the first number to perform operation');
const numberSecond = +prompt('Enter the second number to perform operation');

if (action === 'add' || action === 'sub' || action === 'mult' || action === 'div')  {
    let result = null;
    if (action === 'add') {
        result = numberFirst + numberSecond;
    }
    else if (action === 'sub') {
        result = numberFirst - numberSecond;
    }
    else if (action === 'mult') {
        result = numberFirst * numberSecond;
    }
    else if (action === 'div') {
        result = numberFirst / numberSecond;
    }
    else {
        result = ('Error, check the entered data  and try again');
    }
    alert (result);
}
else {
    alert ('Incorrect operation!')
}