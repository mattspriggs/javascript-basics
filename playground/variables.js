'use strict';
//function scoped
var first = 'Matt'; //variable declaration statement

//block scoped
let age = 100;
const cool = true; //can only have the value of an array or object changed

//const by default unless you know it has to be updated
//use let when the variable needs to change
//var is not used often
//camelcase all variables unless they are a class, always using a-z, $, _ for variables
//Upper CamelCase for classes
//snake case this_is_snake_case is allowed
//kebab-case-is-not-allowed in JavaScript

console.log(first, age, cool); //function call statement

if (age > 10) {
  console.log('You are old');
}

// dog = "snickers"; //will not error if not in strict mode - bad practice, should always be declared
