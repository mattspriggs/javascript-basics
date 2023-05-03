//Objects allow you to store related properties (key) and values  - order may not be maintained - can contain any type
const age = 100;

const person = {
  name: 'Matt',
  age, //age: age,
  'cool-dude': true,
  'really cool': false,
  777: true,
  clothing: {
    shirts: 10,
    pants: 2,
  },
  sayHello(greeting = 'Hey') {
    return `${greeting} ${this.name}`;
  },
  sneeze: () => {
    //cannot access this
    console.log('AHHHH CHOO!', this);
  },
};
person.job = 'Web Developer'; //add a property and value
person.age = '57'; //alter a property value
//The values and properties can change but the object itself cannot be reassigned

// const personFrozen = Object.freeze(person); //personFrozen cannot be changed (immutable) but original can still  be
// // altered
// console.log(person);
//
// console.log(person.age, person.job); //. notation used to access a value of a property
// console.log(person['age'], person['job']); //[] will access via the property (key) name
// const propertyToCheck = prompt('What do you want to check?');
// console.log(propertyToCheck);
// console.log(person[propertyToCheck]);
// console.log(['really-cool']); //cannot access custom properties using . notation
// console.log(person.clothing.pants); //this is how you access nested information
//
// const nameInput = document.querySelector('[name="first"]');
// // const name = nameInput.value;//will be undefined on page load and break
// // console.log(name);
//
// const name = nameInput ? nameInput.value : '';
// console.log(name);
// delete person.job; //removes the property
// person.age = undefined; //saves the property but leaves it blank
// person.age = null; //saves the property but leaves it blank

//METHODS
//REFERENCE VS VALUE
let name1 = 'Matt';
let name2 = 'Matt';
console.log(name1 === name2); //true
name1 = 'Sarah';
console.log(name1 === name2); //false
//update name1 to name2
name1 = name2;
console.log(name1 === name2); //reassigned
name2 = name1;
name2 = 'Matthew'; //only will update the name2 variable

const person1 = {
  first: 'Matt',
  last: 'Spriggs',
  clothing: {
    shirts: 10,
    pants: 2,
  },
};
const person2 = {
  first: 'Matt',
  last: 'Spriggs',
};
console.log(person1 === person2); //false despite being the same object contents because it references the object itself
// const person3 = person1
// person3.first = 'Larry'
// console.log(person3.first)//Larry
// console.log(person1.first)//Larry - updates both due to reference const person3 = person1 is a reference - points to
// person1 and is not an object

//TO COPY AN OBJECT USE THE SPREAD OPERATOR
const person3 = { ...person1 };
//OR
const person4 = Object.assign({}, person1);
person3.first = 'Larry'; //Will assign it only to the person3 object.  It is a true object and not a reference to person1
//Only goes one level deep so clothing
person3.clothing.shirts = 100; //Creates a reference only and will update person1 clothing object also
//DEEP CLONE - USING A UTILITY LIBRARY - LoDash
const person5 = _.cloneDeep(person1);
console.log(person5);
person5.clothing.shirts = 5;
console.log(person5);
console.log(person1);
//MERGING OBJECTS
const meatInventory = {
  bacon: 5,
  sausage: 3,
};
const veggieInventory = {
  lettuce: 5,
  tomatoes: 10,
};
const inventory = { ...meatInventory, ...veggieInventory, oysters: 10 };
console.log(inventory);

function doStuff(data) {
  data = 'something else';
  console.log(data);
}

doStuff(name1); //changes it only via reference, the name1 is still Matt and not changes the variable - true with
// strings, booleans, numbers
console.log(name1);

function doStuff2(data) {
  data.tomatoes = 10000000000;
  console.log(data);
}
doStuff2(inventory);
console.log(inventory); //Modified the inventory of tomatoes in the original object or array - use a reference if
// you want to preserve the original array or object
