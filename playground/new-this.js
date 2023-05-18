//NEW KEYWORD

const myDate = new Date('August 11, 2025'); //When you create something you are creating a new object from the
// constructor - everything in JavaScript is an object
console.log(myDate);
console.dir(myDate);
console.log(myDate.getFullYear()); //Function from the Date constructor
console.log(typeof myDate, myDate instanceof Date); //new creates a new instance of the constructor object, in this
// case Date
const names = ['Matt', 'Sarah']; //Literal available
console.log(typeof names, names instanceof Array);
const matt = new Object({ name: 'Matt' }); //Same as literal
const span = document.createElement('span');
console.log(span);
console.log(span instanceof Element);
console.log(span.constructor);
console.log(span instanceof HTMLSpanElement);
console.log(span instanceof Node);

function Pizza(toppings = [], customer) {
  //CONSTRUCTOR
  console.log('Making a new pizza');
  //save the toppings that were passed in to this instance of pizza
  this.toppings = toppings;
  this.customer = customer;
  this.id = Math.floor(Math.random() * 16777215).toString(16);
}

const pepperoniPizza = Pizza();
console.log(pepperoniPizza); //Is undefined
const pepperoniPizza2 = new Pizza(['pepperoni'], 'Wes Bos');
const canadianPizza = new Pizza(
  ['pepperoni', 'mushrooms', 'onion'],
  'Kait Bos'
);

console.log(pepperoniPizza2); //new keyword will return an object of a pizza
console.log(canadianPizza);
console.log(pepperoniPizza2.constructor); //Tells you what made it
console.log(pepperoniPizza2 instanceof Pizza); //Is an instance of the Pizza constructor

//THIS KEYWORD
const button1 = document.querySelector('.one');
const button2 = document.querySelector('.two');

function tellMeAboutTheButton() {
  console.log('outside', this);
  setTimeout(() => {
    //Using the arrow function it maintains this
    // function () { - Will rebind if it is a normal function to the next higher level function OR the window (in
    // this case)
    console.log('inside', this); //Each new function will update the this keyword for its binding
    this.textContent = 'You Clicked Me';
  }, 1000);
}
//THIS IS BOUND TO WHAT IS ON THE LEFT OF THE .
button1.addEventListener('click', tellMeAboutTheButton); //THIS IS EQUAL TO THE THING LEFT OF THE . - button1
button2.addEventListener('click', tellMeAboutTheButton); //THIS IS EQUAL TO THE THING LEFT OF THE . - button2

const tellMeAboutTheButton2 = () => {
  console.log(this); //Bound to the window due to the anonymous function - bound to higher level function
};
