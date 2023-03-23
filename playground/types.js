/*  STRINGS */

//Can use '', "" or `` for strings

// const name = 'Matt';
// const middle = 'Crowell';
// const last = `Spriggs`;
// const sentence = "She's so cool"; //Double quotes
// const sentence2 = "She's so cool"; //The backslash will escape the character to allow it to be used
// const sentence3 = 'She\'s so "cool"';
// const sentence4 = `She's so \\"cool"\\`; //Backticks allow for all forms of punctuation, but a backslash still has to be
// escaped

// const song =
//   'Ohhh \
// \
// ya \
// \
// she is so fine!'; //Multi-line string
//
// const song2 = `Ohhh
//
//   ya
//
//   she is so fine!`; //Multi-line string with backticks will preserve the returns
//
// const html = `
// <div>
// 	<h2>Title</h2>
// </div>`; //Backticks make inserting HTML much easier as it preserves the return and tabbing
//
// const hello = 'Hello my name is ' + name + '. Nice to meet you.'; //concatenation with interpolation
// const hello2 = `Hello my name is ${name}. Nice to meet you.`; //interpolation only
//
// const html2 = `
// <div>
// 	<h2>${name}</h2>
// 	<p>${hello2}</p>
// </div>`;
//
// document.body.innerHTML = html2;
// console.log(html2);

/*  NUMBERS */

// const age = 100;
// const name = 'Matt';
// //Using the typeof command in the console will tell you what kind of variable it is
//
// const smarties = 20;
// const kids = 3;
// const eachKidGets = Math.floor(smarties / kids);
// const dadGets = smarties % kids;
// console.log(`Each kid gets ${eachKidGets} and Dad gets ${dadGets}`);

/*  OBJECTS */
//Allows you to contain attributes of a thing in key value pairs - order is not maintained in objects. If you need
// order to be maintained use an array
//person.name will give the value of Matt in a string, person.age will give the value of the number 57, and
// person.location
// will giv you Dunedin, New Zealand in a string
// const person = {
//   name: 'Matt',
//   age: 57,
//   location: 'Dunedin, New Zealand',
// };

/* SYMBOLS */
//Used in lower level applications

/* NULL and UNDEFINED */
//Two ways to express nothing
let dog;
console.log(dog); //Yields undefined - similarly if you try to access a value in an object that does not have a key
// that matches the keys in the object it will return undefined - the variable also must be declared in order so the
// console.log above remains undefined with the value set after it
dog = 'Amber';

let somethingUndefined; //Not defined so it will be undefined
const somethingNull = null; //To have a null value it must be actively set to null

const cher = {
  first: 'Cher',
};

const teller = {
  first: 'Raymond',
  last: 'Teller',
};
teller.first = 'Teller';
teller.last = null;

/* BOOLEAN */
//Used for logic, true and false values, set or calculated
let isDrawing = false;
const age = 18;
const ofAge = age > 19;
console.log(ofAge);
// === will always check value and type where as == will only check the value (10 == "10" will be true)
