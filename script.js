'use strict';

// const private = 2025;

// console.log(private);

function namer (){
    console.log("My name is Ayomide");
}

namer()
namer()
namer()

function school () {
    console.log("I am a student of AltSchool Africa")
}

school ()

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);