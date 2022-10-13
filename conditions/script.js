'use strict';

// if (4 == 9) {
//     console.log('Ok!');
// } else {
//     console.log('Error');
// }

// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Error');
// } else {
//     console.log('num = 50');
// }

// num == 50 ? console.log('ok!') : console.log('error');

const num = 50;

switch (num) {
    case 49:
        console.log('Error');
        break;
    case 100:
        console.log('Error');
        break;
    case 50:
        console.log('Right!');
        break;
    default:
        console.log('Not today');
        break;
}


const day = 'Wensday';

switch (day) {
    case 'Monday':
        console.log('Today is nit day X');
        break;
    case 'Tuesday':
        console.log('Today is nit day X');
        break;
    case 'Wensday':
        console.log('Today u will drink beer.');
        break;
    case 'Thursday':
        console.log('Today is nit day X, u will work');
        break;
    default:
        console.log('haha, dream about rest');
}

