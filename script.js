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
console.log(appleOrangeJuice);

function sayHello(){
    console.log(`Hello bro`);
}sayHello();

function greet(name) { // name is a parameter (placeholder)
 console.log("Hello, " + name + `!`);
}

greet("Dauda") // Dauda here is an argument
greet("Ayomide") // Ayomide here is an argument

function add (a,b){
    return a + b;
}
// add(5,3);
let result = add(5,3);
console.log(add(5,3));
console.log(result);