//Two things are hoisted - function declarations and variable declarations
//Reasons for using hoisting:
/* What does this file do? */

sayHi(); //hoisting will allow you to run this before it is declared - better practice is to have it run after it is
// declared - ONLY WORKS WITH BASE FUNCTIONS not others

/* How does this file do it? */
function sayHi() {
  console.log('Hi');
  console.log(add(10, 2));
}

function add(a, b) {
  return a + b;
}

//Variable hoisting
// console.log(age)
// var age = 10 //you can declare it after you use it when using var but it will not hold the value and will be undefined
var age;
console.log(age);
age = 10;
