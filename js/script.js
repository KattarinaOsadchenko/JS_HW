'use strict';

// Task 1

const user = {};
user.name = 'John';
user.surname = 'Smith';

user.name = 'Pete';

delete user.name;

// Task 3
const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}


console.log (salaries.John+salaries.Ann+salaries.Pete)