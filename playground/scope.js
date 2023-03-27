// const first = 'Matt'; // this is a global variable, accessible anywhere in your application - undefined on window
// let second = 'Spriggs'; //Global but undefined on the window object
// var age = 57; //var is linked to the window variable
//
// /* GLOBAL VARIABLES ARE NOT A GOOD PRACTICE */
//
// function sayHi() {
//   console.log('Hi');//Global function is available on everywhere including the window
// }

const age = 100;

function go() {
  const hair = 'blonde';
  const myAge = 200; //better practice to create a different variable name than one that is global in scope
  //const age = 200// this const is out of the global scope and only available in the function scope
  console.log(myAge, age); //will also be available from outside
  console.log(hair); //will return the variable
}
go();
console.log(age); //Will run
// console.log(hair); //Undefined even when it is run in go due to function scope unless it is returned

function isCool(name) {
  //first block and scope
  let cool;
  if (name === 'Matt') {
    // let cool = true;//confined to the scope of the if statement block ({ keeps it inside })
    cool = true; // By declaring it outside the block you can access and reassign its value
  }
  console.log(cool);
  return cool;
}

for (let i = 0; i < 10; i++) {
  //do not use var in for loops
  console.log(i);
}

const dog = 'snickers';

function logDog(dog) {
  console.log(dog);
}

function go2() {
  const dog = 'sunny';
  logDog('Rufus'); //This feeds the argument of Rufus to the parameter of dog, so it will print Rufus
}

go2(); //Will print snickers which is lexically scoped - meaning that variables are functionally defined

/* BEST PRACTICES FOR VARIABLES AND SCOPE */
//Try not to use global variables
//In modules it is impossible to create a global variable unless you attach it to the window - window.IAmAGlobal =
// 'Global' would become a global variable
//function scoping is the same as variables

function sayHi(name) {
  function yell() {
    console.log(name.toUpperCase());
  }
  yell();
}

yell(); // will be undefined - the yell function is scoped to the sayHi()function
