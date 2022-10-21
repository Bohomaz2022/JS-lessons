'use strict';

function first() {
    //do something
    setTimeout(function() {
        console.log(1);
    }, 500); 
}

function second() {
    console.log(2);
}

first();
second();

function lernJS(lang, callback) {
    console.log(`I lern ${lang}`);
    callback();
}

function done() {
    console.log('I have endeed this lesson!');
}

lernJS('JavaScript', done);