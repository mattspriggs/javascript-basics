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
};
person.job = 'Web Developer'; //add a property and value
person.age = '57'; //alter a property value
//The values and properties can change but the object itself cannot be reassigned

const personFrozen = Object.freeze(person); //personFrozen cannot be changed (immutable) but original can still  be
// altered
console.log(person);

console.log(person.age, person.job); //. notation used to access a value of a property
console.log(person['age'], person['job']); //[] will access via the property (key) name
