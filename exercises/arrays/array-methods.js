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

/*
 Static Methods - UTILITY METHODS
 */

// Array.of();
const example = Array.of('wes', 'kait'); //not used often
console.log(example);
const example2 = [...'wes']; //Takes an iterable (has a length) and spreads it into an array
console.log(example2);
const example3 = Array.of(...'wes'); //can be done in a function/method
console.log(example3);
// Make a function that creates a range from x to y with Array.from();
//Takes an iterable (something with a length)
const example4 = Array.from({ length: 10 }); //Provides a blank array with 10 indexes
console.log(example4);

const range = Array.from({ length: 10 }, () => 'wes');
console.log(range); //Array with 10 wes entries

const range2 = Array.from({ length: 10 }, (item, index) => index);
console.log(range2); //Array with the index number in each array index 0:0, 1:1, ...

function createRange(start, end) {
  const range = Array.from(
    { length: end - start + 1 },
    (item, index) => index + start
  );
  return range;
}

console.log(createRange(3, 70));

const myRange = createRange(4, 2000);
console.log(myRange);
// Check if the last array you created is really an array with Array.isArray();
console.log(Array.isArray(myRange)); // will be true - typeOf will show it as an object not array

// Take the meats object and make three arrays with Object.entries(), Object.keys, Object.values()

console.log(Object.entries(meats));
console.log(Object.keys(meats));
console.log(Object.values(meats));

Object.entries(meats).forEach((entry) => console.log(entry));
Object.keys(meats).forEach((key) => console.log(key));
Object.values(meats).forEach((qty) => console.log(qty));

Object.entries(meats).forEach((entry) => {
  // const key = entry[0];
  // const value = entry[1];
  const [key, value] = entry; //refactored using destructuring
  console.log(key, value);
});
//OR
Object.entries(meats).forEach(([key, value]) => {
  console.log(key, value);
});

/*
 Instance Methods
 */

// Display all bun types with " or " - use join()
console.log(buns.join(' or '));

// We have a string "hot dogs,hamburgers,sausages,corn" - use split() to turn it into a string
const foodString = 'hot dogs,hamburgers,sausages,corn';
const foodArray = foodString.split(',');
console.log(foodArray);
// take the last item off toppings with pop() - MUTABLE
const lastTopping = toppings.pop(); //mutable function
console.log(lastTopping, toppings);
// add it back with push() - MUTABLE
toppings.push(lastTopping);
console.log(toppings);
// take the first item off toppings with shift() - MUTABLE
const firstTopping = toppings.shift();
console.log(firstTopping);
console.log(toppings);
// add it back in with unshift() - MUTABLE
toppings.unshift(firstTopping);
console.log(toppings);
// Do the last four,but immutable (with spreads and new variables)
let newToppings = toppings.slice(0, toppings.length - 1); //Remove last
console.log(newToppings);
newToppings = [...newToppings, toppings[toppings.length - 1]]; //add via reference to the last item in the original array
console.log(newToppings);
let newToppings2 = toppings.slice(1, toppings.length); //Remove first
console.log(newToppings2);
newToppings2 = [toppings[0], ...newToppings2]; //add via reference to the last item in the original
// array
console.log(newToppings2);
// Make a copy of the toppings array with slice()
const toppingCopy = toppings.slice(0);
toppings[0] = 'Mushy Boi';
console.log(toppings);
console.log(toppingCopy);
// Make a copy of the toppings array with a spread
const spreadCopy = [...toppings];
console.log(spreadCopy);
// take out items 3 to 5 of your new toppings array with splice()
toppingCopy.splice(2, 3);
console.log(toppingCopy);
// find the index of Avocado with indexOf() / lastIndexOf()
const avoIndex = toppings.indexOf('Avocado');
console.log(avoIndex);
// Check if hot sauce is in the toppings with includes()
const isInToppings = toppings.includes('Hot Sauce');
console.log(isInToppings);
// add it if it's not
if (!isInToppings) {
  toppings.push('Hot Sauce');
}
console.log(toppings);
// flip those toppings around with reverse()
toppings.reverse(); //MUTABLE
console.log(toppings);
const reverseToppings = [...toppings].reverse(); //IMMUTABLE
console.log(reverseToppings);
console.log(toppings);

/*
 Callback Methods - FUNCTION AS AN ARGUMENT
 */

// find the first rating that talks about a burger with find()
// function findBurgRating(singleFeedback) {
//   return singleFeedback.comment.includes('burger');
// }
// const findBurgerRating2 = (singleFeedback) =>
//   singleFeedback.comment.includes('burger');
// console.log(findBurgerRating2);
//
// function findBurgerRating3(singleFeedback) {
//   return singleFeedback.comment.includes('burger');
// }
// // console.log(findBurgerRating3(burgRating));
// // const burgRating = feedback.find((feedback) =>
// //   feedback.comment.includes('burger')
// // );
// const burgRating = feedback.find(findBurgRating);
// console.log(burgRating);

//UTILITY VERSION
// const util = {
//   findBurgerRating: function (singleFeedback) {
//     return singleFeedback.comment.includes('burger');
//   },
// };

function findByWord(word) {
  return function (singleFeedBack) {
    return singleFeedBack.comment.includes(word);
  };
}
const findRating = feedback.find(findByWord('Smoothie'));
console.log(findRating);

// find all ratings that are above 2 with filter()
const goodReviews = feedback.filter(
  (singleFeedback) => singleFeedback.rating > 2
);
console.table(goodReviews);

function filterByMinRating(minRating) {
  return function (singleFeedback) {
    return singleFeedback.rating > minRating;
  };
}
const goodReviews2 = feedback.filter(filterByMinRating(3));
console.table(goodReviews2);
// find all ratings that talk about a burger with filter()
const burgRatings = feedback.filter((singleFeedback) =>
  singleFeedback.comment.includes('burg')
);
const burgRatings2 = feedback.filter(findByWord('burg'));
console.table(burgRatings);
console.table(burgRatings2);
// Remove the one-star rating however you like!
const legitRatings = feedback.filter((bad) => bad.rating !== 1);
console.table(legitRatings);

// check if there is at least 5 of one type of meat with some()
const isThereEnoughOfAtLeastOneMeat = Object.values(meats).some(
  (meatValue) => meatValue >= 5
);
console.log(isThereEnoughOfAtLeastOneMeat);
// make sure we have at least 3 of every meat with every()
const areThereAtLeastThreeOfEveryMeat = Object.values(meats).every(
  (meatValue) => (meatValue) => 3
);
console.log(areThereAtLeastThreeOfEveryMeat);
// sort the toppings alphabetically with sort()
const toppingsSorted = toppings.sort(); //Works with strings by default and sorts alphabetically
console.log(toppingsSorted);
// sort the order totals from most expensive to least with .sort()

// const totalsSortedHighToLow = orderTotals.sort(function (
//   firstItem,
//   secondItem
// ) {
//   if (firstItem < secondItem) {
//     return 1;
//   } else if (firstItem > secondItem) {
//     return -1;
//   } else {
//     return 0;
//   }
// });

// REFACTORED
const totalsSortedHighToLow = orderTotals.sort(function (
  firstItem,
  secondItem
) {
  return secondItem - firstItem;
});
console.log(totalsSortedHighToLow);
console.log(totalsSortedHighToLow.reverse());

const totalsSortedLowToHigh = orderTotals.sort(
  (firstItem, secondItem) => firstItem - secondItem
);
console.log(totalsSortedLowToHigh);
console.log(totalsSortedLowToHigh.reverse());
// Sort the prices with sort()
const productsSortedByPrice = Object.entries(prices).sort(function (
  firstItem,
  secondItem
) {
  const firstPrice = firstItem[1];
  const secondPrice = secondItem[1];
  return firstPrice - secondPrice;
});
console.table(productsSortedByPrice);
console.table(Object.fromEntries(productsSortedByPrice)); //changes it back to an object
/*
 Looping Methods (next)
 */
