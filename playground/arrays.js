//ARRAYS HOLD ITEMS WHERE THE POSITION MATTERS - has no keys but uses indexes - it is an object as a type
const names = ['Matt', 'Sarah', 'Emma'];
console.log(names);
console.log(Array.isArray(names)); //The way to check if something is an array since typeOf will not work

console.log(names[0]); //Gets the first item - Zero based counting

console.log(names.length); //Not zero based

console.log(names[names.length - 1]); //Gets the last entry of an array

//MUTABLE = CAN CHANGE THE ORIGINAL ARRAY
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const reverseNumbers = numbers.reverse();
// console.log(numbers); //CHANGED
// console.log(reverseNumbers); //CHANGES THE ORIGINAL ARRAY

//Anytime you do not WANT the array to mutate, you need to take a copy of the original array
const numbersReversed = [...numbers]; //Makes a copy with spread operator
numbersReversed.reverse(); //Mutates only the new array

//IMMUTABLE = CANNOT CHANGE THE ORIGINAL ARRAY
const pizzaSlice = numbers.slice(2, 4); //slice(start, end) and includes start and the end indicies and preserves
// the original array
console.log(pizzaSlice);
console.log(numbers);
