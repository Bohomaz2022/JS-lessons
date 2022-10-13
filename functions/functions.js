'use script';
let num = 20;

function showFirstMassage(text) {
    console.log(text);
    let num = 40;
    console.log(num);
}

showFirstMassage('Hello world!');

console.log(num);

// function calc(a, b) {
//     return a + b;
// }

// console.log(calc(4, 5));
// console.log(calc(9, 15));

function res() {
    let num = 100;
    return num;
}

const newNummNumber = res;

console.log(newNummNumber);

const logger = function() {
    console.log('Hello World!')
};

const calc = (a, b) => a + b;
