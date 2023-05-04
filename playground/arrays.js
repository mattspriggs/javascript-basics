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
//SLICE (Immutable) AND SPLICE (Mutable)

//MUTABLE = CAN CHANGE THE ORIGINAL ARRAY
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbers4 = [...numbers];
const numbers5 = [...numbers];
console.log(numbers4);
console.log(numbers4.splice(2, 2)); //takes out index 3 and 4 from the original array
console.log(numbers4);
console.log(numbers5);
console.log(numbers5.slice(2, 4)); //takes out index 3 and 4 from the original array
console.log(numbers5);

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
