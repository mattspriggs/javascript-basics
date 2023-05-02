const age = 50;
const sentence = 'I am very cool';
if (age >= 70) {
  console.log('In your seventies');
} else if (age >= 60) {
  console.log('In your sixties');
} else if (age >= 50) {
  console.log('In your fifties');
} else {
  console.log('Nothing is true');
}

if (10 > 2) {
  console.log('Yes'); //will stop evaluating at the first true if statement
} else if (11 > 10) {
  console.log('Yes');
}

function slugify(sentence, lowercase) {
  if (lowercase) {
    return sentence.replace(/\s/g, '-').toLowerCase();
  } //else {
  return sentence.replace(/\s/g, '-'); //else can be assumed
  //}
}
//OR
function slugify2(sentence, lowercase) {
  let slug = sentence.replace(/\s/g, '-');
  if (lowercase) {
    slug = slug.toLowerCase();
  }
  return slug;
}

slugify(sentence, true);
slugify2(sentence, true);

const name = 'Matt';
const last = 'Spriggs';
if (name === 'Matt' || name === 'Sarah') {
  console.log('Cool name');
}

if (name === 'Matt' && last === 'Spriggs') {
  console.log('Nerdy gamer dude!');
}

if (name === 'Sarah' || (name === 'Matt' && last === 'Spriggs')) {
  console.log('Great ex-pat couple in New Zealand, land of the Kiwis');
}

const word = 'awesome';
const word1 = 'wes';
const word2 = 'scott';
if (word.includes(word1)) {
  console.log('Included');
} else {
  console.log('Not included');
}
if (word.includes(word2)) {
  console.log('Included');
} else {
  console.log('Not included');
}
const isAwesomeName = word.includes(word1);
if (isAwesomeName) {
  console.log('SUPER COOL NAME');
}

function nameIsAwesome(name) {
  return 'awesome'.includes(name);
}

if (nameIsAwesome('wes')) {
  console.log('COOLEST NAME');
}

//TRUTHY and FALSY
const dog = 'snickers';
if (dog) {
  console.log('you have a dog'); //evaluates true if there is a value for dog
} else {
  console.log('you do not have a dog'); //will evaluate false if there is an empty string or value '', or if
}

const values = [
  [],
  {},
  -10,
  1,
  0,
  '',
  'full string',
  ' ',
  undefined,
  NaN,
  null,
];
console.group('truthy or falsy values');
values.forEach((value) => {
  if (value) {
    console.log(value, 'is truthy');
  } else {
    console.log(value, 'is falsy');
  }
});
console.groupEnd();

console.clear();

const isCool = true;
if (!isCool) {
  console.log('You are not cool.');
}

//COERCION - BETTER TO USE TRUTHY AND FALSY but is used to change to a different type
const name2 = 'Wes';
!name2; // Will coerce to a boolean - does it exist?
!!name2; //Will convert to a real boolean - is there a value - truthy/falsy

//TERNARY
const count = 2;
// let word3;
// if (count === 1) {
//   word3 = 'item';
// } else {
//   word3 = 'items';
// }

// CONVERTED TO A TERNARY
//Condition
//What to do if true
//What to do if false
const word3 = count === 1 ? 'item' : 'items';
//                   condition     true      false

const sentence2 = `You have ${count} ${word3} in your cart.`;
console.log(sentence2);
const sentence3 = `You have ${count} item${
  count === 1 ? '' : 's'
} in your cart.`;
console.log(sentence3);

function showAdminBar() {
  console.log('Is Admin');
}
const isAdmin = true;
isAdmin ? showAdminBar() : null;
//AND AND TRICK
function check1() {
  console.log('Running check 1');
  return true;
}
function check2() {
  console.log('Running check 2');
  return false; //this provides the short circuit to the else
}
function check3() {
  console.log('Running check 3');
  return true;
}

if (check1() && check2() && check3()) {
  console.log('all checks pass');
} else {
  console.log('Some checks failed');
}

isAdmin && showAdminBar();

if (isAdmin) showAdminBar(); //single line if will run without curly brackets, multi-line requires
