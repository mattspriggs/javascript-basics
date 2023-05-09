console.log('it works');

const numbers = [2, 34, 3, 23, 42, 3, 1, 65, 364, 5, 645, 6];

const name = 'Wes Bos';

const matt = {
  name: 'Matt',
  age: 57,
  cool: true,
};

// For
// for (let i = 100; i <= 120; i += 2) {
//   console.log(i);
// }
//
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }
//Can be useful fir working with canvas

// For of - loop over iterables - useful if using emogies

for (const letter of name) {
  //Allows to await in for of
  console.log(letter);
}

for (const number of numbers) {
  console.log(number);
}

// For in
// Used for looping over the keys in an object
for (const number in numbers) {
  console.log(number);
}

for (const property in matt) {
  console.log(property);
}
const baseHumanStats = {
  feet: 2,
  arms: 2,
  eyes: 2,
  head: 1,
};

function Human(name) {
  this.name = name;
}

Human.prototype = baseHumanStats;

const matt2 = new Human('matt');
console.log(matt2);
console.log(matt2.arms); //References the prototype to get the arms

for (const prop in matt2) {
  console.log(prop); //will grab everything in the prototype
}

// While Loop
let cool = true;
let i = 1;
while (cool === true) {
  //will run infinitely if there is no exit condition
  console.log('You are cool');
  i++;
  if (i > 100) {
    cool = false;
  }
}
//Do While Loop
