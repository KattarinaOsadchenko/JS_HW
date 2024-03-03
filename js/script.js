'use strict';

const temperature = +prompt('Enter the temperature without the unit')
const markDegree = prompt('Enter the unit of measurement temperature')

if (!isNaN(temperature)) {

    let result = null;
    if ( markDegree.toUpperCase()==='F') {
        result = ('It will be ')+(temperature - 32) * 5/9 + ('degrees Celsius');
    }
    else if (markDegree.toUpperCase()==='C') {
        result = ('It will be ')+((temperature*9/5)+32) + ('degrees Fahrenheit');
    }
    else {
        result = ('Error, check the entered data and try again');
    }
    alert(result);
}
else {
    alert('Wrong number')
}