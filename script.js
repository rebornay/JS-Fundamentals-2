'use strict';

// const private = 2025;

// console.log(private);
/*
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

const multiply = function(x,y){
    return x * y;
};
console.log(multiply(5,4));

// function multiply(x,y){
//     return x * y;
// };
// console.log(multiply(4,5));
console.log(multiply(10,10));


// Arrow functions
const divison = (a,b) => a + b;

console.log(divison(10,5))
*/

/*
// Function declaration
function calcAge1 (birthYear){
   return 2037 - birthYear;
};

const age1 = calcAge1(1991);
// console.log(age1);

// Function expression
// An expression produces a value and values are stored in a variable. 

const calcAge2 = function (birthYear){
    return 2037 - birthYear;
};
const age2 = calcAge2(1991);

console.log(age1, age2); 

*/

//We can call a function before they are defined in a code (only works for declarative functions)

//Arrow function was added in Javascript ES6(2015)
// Function expression
const calcAge2 = function (birthYear){
    return 2037 - birthYear;
};

// Arrow function

// const calcAge3 = birthYear => 2037 -birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

const yearUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
};

console.log(yearUntilRetirement(1991, 'Jonas'));
console.log(yearUntilRetirement(1980, 'Bob'));
console.log(yearUntilRetirement(1980, 'Bob'));
console.log(yearUntilRetirement(1980, 'hom'));

