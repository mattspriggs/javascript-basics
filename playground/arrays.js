//ARRAYS HOLD ITEMS WHERE THE POSITION MATTERS - has no keys but uses indexes - it is an object as a type
const names = ['Matt', 'Sarah', 'Emma'];
console.log(names);
console.log(Array.isArray(names)); //The way to check if something is an array since typeOf will not work

console.log(names[0]); //Gets the first item - Zero based counting

console.log(names.length); //Not zero based

console.log(names[names.length - 1]); //Gets the last entry of an array

//Add to array
names.push('Lux'); //Mutates the original
console.log(names);
const names2 = [...names, 'Fabian']; //Creates the new array and adds Fabian without changing the original array
console.log(names);
console.log(names2);
names.unshift('Poppy'); //Adds to the front of the array
const names3 = ['Petty', ...names];
console.log(names);
console.log(names3);

//MUTABLE = CAN CHANGE THE ORIGINAL ARRAY
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbers4 = [...numbers];
const numbers5 = [...numbers];
//SPLICE (Mutable)
console.log(numbers4);
console.log(numbers4.splice(2, 2)); //takes out index 3 and 4 from the original array
console.log(numbers4);
//AND SLICE (Immutable)
console.log(numbers5);
console.log(numbers5.slice(2, 4)); //takes out index 3 and 4 from the original array
console.log(numbers5);

const bikes = ['bianchi', 'miele', 'panasonic', 'miyata'];
console.log(bikes);

const newBikes = [...bikes.slice(0, 2), 'benotto', ...bikes.slice(2)]; //Not putting an end will run to the end of
// the array
console.log(newBikes);

const newBikes2 = [...newBikes.slice(0, 3), ...newBikes.slice(4)]; //Removes panasonic at indes 3 as the slice does
// not include the end index
console.log(newBikes2);

const comments = [
  //if it is declared via let you can overwrite the array
  { text: 'Cool Beans', id: 123 },
  { text: 'Like it!', id: 124 },
  { text: 'Stupid idea', id: 125 },
  { text: 'Best idea ever', id: 126 },
  { text: 'NOT Cool Beans', id: 127 },
];

function deleteComment(id, comments) {
  //first find the index of the item in the array
  const commentIndex = comments.findIndex((comment) => comment.id === id);
  //Make and return a new array without item
  return [
    ...comments.slice(0, commentIndex),
    ...comments.slice(commentIndex + 1),
  ];
}
console.log(deleteComment(125, comments)); //Will not mutate the original array
console.log(comments);
const emmaIndex = names.findIndex((name) => name === 'Emma');
const newNamesWithOutEmma = [
  //get everything up to Emma index
  ...names.slice(0, emmaIndex),
  //everything after Emma index
  ...names.slice(emmaIndex + 1),
  //OR
  //names.slice(0, emmaIndex),
  //names.slice(emmaIndex + 1)].flat()
];
console.log(emmaIndex);
console.log(names[emmaIndex]);
// const reverseNumbers = numbers.reverse();
// console.log(numbers); //CHANGED
// console.log(reverseNumbers); //CHANGES THE ORIGINAL ARRAY

//Anytime you do not WANT the array to mutate, you need to take a copy of the original array
const numbersReversed = [...numbers].reverse(); //Makes a copy with spread operator and immediately reverses without
// impacting the original array
//numbersReversed.reverse(); //Mutates only the new array

//IMMUTABLE = CANNOT CHANGE THE ORIGINAL ARRAY
// const pizzaSlice = numbers.slice(2, 4); //slice(start, end) and includes start and the end indicies and preserves
// // the original array
// console.log(pizzaSlice);
// console.log(numbers);
