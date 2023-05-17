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

function Pizza() {
  console.log('Making a new pizza');
}

const pepperoniPizza = Pizza();
console.log(pepperoniPizza); //Is undefined
const pepperoniPizza2 = new Pizza();
console.log(pepperoniPizza2); //new keyword will return an object of a pizza
console.log(pepperoniPizza2.constructor); //Tells you what made it
console.log(pepperoniPizza2 instanceof Pizza); //Is an instance of the Pizza constructor
