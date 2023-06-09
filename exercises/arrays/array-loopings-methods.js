console.log('it works');

const toppings = [
  'Mushrooms ',
  'Tomatoes',
  'Eggs',
  'Chili',
  'Lettuce',
  'Avocado',
  'Chiles',
  'Bacon',
  'Pickles',
  'Onions',
  'Cheese',
];

const students = [
  {
    id: '11ce',
    first_name: 'Dall',
    last_name: 'Puckring',
  },
  {
    id: '2958',
    first_name: 'Margarete',
    last_name: 'Brandi',
  },
  {
    id: '565a',
    first_name: 'Bendicty',
    last_name: 'Woodage',
  },
  {
    id: '3a16',
    first_name: 'Micki',
    last_name: 'Mattes',
  },
  {
    id: 'f396',
    first_name: 'Flory',
    last_name: 'Gladeche',
  },
  {
    id: 'de5f',
    first_name: 'Jamill',
    last_name: 'Emilien',
  },
  {
    id: '54cb',
    first_name: 'Brett',
    last_name: 'Aizikowitz',
  },
  {
    id: '9135',
    first_name: 'Lorry',
    last_name: 'Smallman',
  },
  {
    id: '978f',
    first_name: 'Gilly',
    last_name: 'Flott',
  },
];

const people = [
  {
    birthday: 'April 22, 1993',
    names: {
      first: 'Keith',
      last: 'Buckley',
    },
  },
  {
    birthday: 'January 3, 1975',
    names: {
      first: 'Larry',
      last: 'Heep',
    },
  },
  {
    birthday: 'February 12, 1944',
    names: {
      first: 'Linda',
      last: 'Bermeer',
    },
  },
];

const buns = ['egg', 'wonder', 'brioche'];

const meats = {
  beyond: 10,
  beef: 5,
  pork: 7,
};

const prices = {
  hotDog: 453,
  burger: 765,
  sausage: 634,
  corn: 234,
};

const orderTotals = [342, 1002, 523, 34, 634, 854, 1644, 2222];

const feedback = [
  { comment: 'Love the burgs', rating: 4 },
  { comment: 'Horrible Service', rating: 2 },
  { comment: 'Smoothies are great, liked the burger too', rating: 5 },
  { comment: 'Ambiance needs work', rating: 3 },
  { comment: 'I DONT LIKE BURGERS', rating: 1 },
];

const faces = ['😃', '🤠', '🤡', '🤑', '😵', '🌞', '🐶', '😺'];

const inventory = [
  { type: 'shirt', price: 4000 },
  { type: 'pants', price: 4532 },
  { type: 'socks', price: 234 },
  { type: 'shirt', price: 2343 },
  { type: 'pants', price: 2343 },
  { type: 'socks', price: 542 },
  { type: 'pants', price: 123 },
];

/*
 Looping Methods
 */

function logTopping(topping, index, originalArray) {
  // console.log(topping, index, originalArray);
  const nextTopping = originalArray[index + 1];
  const previousTopping = originalArray[index - 1];
  //log the topping
  console.log(topping);
  //log the previous topping if there is one
  previousTopping ? console.log(previousTopping) : null;

  //log the next topping if there is one

  // if (nextTopping) {
  //   console.log(nextTopping);
  // } else {
  //   console.log('Goodbye....');
  // }
  // OR
  nextTopping ? console.log(nextTopping) : null;
  //if it's the last item in the array say goodbye
  index === originalArray.length - 1
    ? console.log('Goodbye...')
    : console.log('Getting next Topping');
  // OR
  // index === originalArray.length && console.log('Goodbye...) - takes advantage of the conditional to short
  // circuit the function
  console.log('-------------🍕------------');
}
toppings.forEach(logTopping); //Will not return anything, just iterates something

// toppings.forEach((topping) => {
//   console.log(topping);
// });

//MAP, FILTER, REDUCE

// MAP - CAN BE USED WITH ANY KIND OF DATA
console.clear();
function addArms(face) {
  return `👋 ${face} 👋`;
}

const toys = faces.map(addArms);

console.log(toys);

function bosify(name) {
  return `${name} Bos`;
}

function capitalize(word) {
  return `${word[0].toUpperCase()}${word.slice(1)}`;
}

const fullNames = ['wes', 'kait', 'poppy'].map((name) => `${name} bos`);
const fullNames2 = ['wes', 'kait', 'poppy'].map(bosify);
const fullNames3 = ['wes', 'kait', 'poppy'].map(capitalize).map(bosify);
console.log(fullNames);
console.log(fullNames2);
console.log(fullNames3);

const taxRate = 13;
const orderTotalWithTax = orderTotals.map((total) => total * 1.15);
console.log(orderTotalWithTax);

const cleanPeople = people.map(function (person) {
  //get their BDay - Timestamp
  const birthday = new Date(person.birthday).getTime();
  const now = Date.now(); //Current timestamp

  //Figure out how old they are
  const age = Math.floor((now - birthday) / 31536000000);

  //   return their full name and BDay in object
  return {
    age, //Same as age: age
    name: `${person.names.first} ${person.names.last}`,
  };
});
console.table(cleanPeople);

//FILTER AND FIND
// FILTER WILL RETURN EVERYTHING THAT MEETS THE CRITERIA
const over40 = cleanPeople.filter((person) => person.age > 40);
console.table(over40);

if (over40.length) {
  console.log('There are people over 40 in this array.');
}
//FIND WILL ONLY RETURN ONE ITEM

function findById(id) {
  return function isStudent(student) {
    return student.id === id;
  };
}

function findByProp(prop, propWeAreLookingFor) {
  //Very flexible find function
  return function isStudent(student) {
    return student[prop] === propWeAreLookingFor;
  };
}
const student = students.find((learner) => learner.id === '565a');
console.log(student);

const student2 = students.find(findById('565a'));
console.log(student2);

const student3 = students.find(findByProp('id', '565a'));
console.log(student3);

const student4 = students.find(findByProp('first_name', 'Micki'));
console.log(student4);

console.clear();

//Reduce - Will combine
//VERBOSE
let total = 0;
orderTotals.forEach((singleTotal) => {
  total = total + singleTotal;
});
console.log(total);

function tallyNumbers(tally, currentTotal) {
  console.log(`The current tally is ${tally}`);
  console.log(`The current total is ${currentTotal}`);
  console.log('-------------');
  //   return the current tally PLUS the amount of this order
  return tally + currentTotal; //Have to return the accumulator value for it to combine all items in the array
}
const allOrders = orderTotals.reduce(tallyNumbers, 0);

console.log(allOrders);

function inventoryReducer(totals, item) {
  console.log(`Looping over ${item.type}`);
  //Increment the type by 1
  totals[item.type] = totals[item.type] + 1 || 1; //Use [] to look up the property on an object
  //return the totals so the next loop can use it
  return totals;
}
const inventoryCounts = inventory.reduce(inventoryReducer, {});
console.log(inventoryCounts);

const totalInventoryPrice = inventory.reduce(
  (acc, item) => acc + item.price,
  0
);
console.log(totalInventoryPrice);
