// function doctorize(name){
// 	return `Dr. ${name}`
// }

//Anon Function
// function (name){
// 	return `Dr. ${name}`
// }
// console.log(doctorize('Matt'))//Will not run as is it not initialized
// console.log(doctorize2('Matt'))//Will run because it is a full function that is "hoisted" - hence functions are
// first class citizens

//Function Expression - Where you store a function in a variable - the below can be problematic with error logs
// const doctorize = function (name) {
//   return `Dr. ${name}`;
// };
//
// function doctorize2(name){
// 	return `Dr. ${name}`
// }

//Arrow functions - short syntax and doesn't scope the this keyword

function inchesToCM(inches) {
  const cm = inches * 2.54;
  return cm;
}

function inchesToCM2(inches) {
  return inches * 2.54;
}

const inchesToCM3 = function (inches) {
  return inches * 2.54;
};

const inchesToCM4 = (inches) => {
  return inches * 2.54; //explicit return
};

const inchesToCM5 = (inches) => inches * 2.54; //implicit return

const add = (a, b = 3) => a + b;

//returning an object
function makeABaby(first, last) {
  //More readable than the arrow function below
  const baby = {
    name: `${first} ${last}`,
    age: 0,
  };
  return baby;
}

// const makeABaby = (first, last) => {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0,
//   };
//   return baby;
// }

// const makeABaby = (first, last) => {
//   return {
//     name: `${first} ${last}`,
//     age: 0,
//   };
// };

const makeABaby2 = (first, last) => ({ name: `${first} ${last}`, age: 0 }); //Not as readable as the full function

//IIFE
//Immediately Invoked Function Expression

(function (age) {
  return `You are cool and age ${age}`;
})(22); //will run on page load

//Methods
//A function that lives inside an object - i.e. console is the object, log is the function known as method
const matt = {
  name: 'Matt Spriggs',
  //Method
  sayHi: function () {
    console.log(`Hey ${this.name}`);
    return 'Hey Matt';
  },
  //Shorthand method
  yellHi() {
    //this also works with this
    console.log('HEY MATTTT');
  },
  //Arrow function
  whisperHi: () => {
    //does not work with this
    console.log('hi matt...');
  },
};

//Callback functions
//Regular function that will run when something is done

//Click callback
const button = document.querySelector('.clickMe');

function handleClick() {
  console.log('Great Clicking!!!!');
}
// button.addEventListener('click', handleClick);
button.addEventListener('click', function () {
  console.log('Nice job!!!!!');
});

//Timer Callback
setTimeout(matt.yellHi, 1000);
setTimeout(function () {
  console.log('DONE!');
}, 2000);

setTimeout(() => {
  console.log('Time to eat.');
}, 3000);
