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
