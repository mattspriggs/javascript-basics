const people = [
  { name: 'Wes', cool: true, country: 'Canada' },
  { name: 'Scott', cool: true, country: 'Merica' },
  { name: 'Snickers', cool: false, country: 'Dog Country' },
];

people.forEach((person, index) => {
  // console.groupCollapsed(`${person.name}`);
  // console.log(person.country);
  // console.log(person.cool);
  // console.log('DONE!');
  // console.groupEnd(`${person.name}`);
  // debugger; //Will pause javascript from running
  console.log(person.name);
});

// Console Methods

//console.log, console.info, console.error, console.table, console.count, console.group, console.warn
// console.table(people);

// Callstack
//The console will give you the call stack that you can trace to the error by referencing the app and line number

// Grabbing Elements
//If you inspect a web page you can grab an element and put $0 into the console it will grab the element selected
//you can also call $0.value and get the input value
//$ will get the first element that matches the input, ie $('p') gets the first paragraph, $$('p') gets all of the
// paragraph tags

// Breakpoints
//typing in debugger in the code will pause the JavaScript and open a console window and you can step through the
// code to see what is happening
// Under the source tab of the browser you can also click on the line number of the code and it will work as a
// debugger if you run in it in the console

// Scope

// Network Requests
//You can add break points in the browser going to sources and selecting event listener break points and hav it
// break when someone performs and action such as mouse click, can also have it break on XHR - when ever it
// performs a fetch request

// Break On Attribute

// Some Setup Code

function doALotOfStuff() {
  console.group('Doing some stuff');
  console.log("Hey I'm one");
  console.warn('watch out');
  console.error('Whoops!');
  console.groupEnd('Doing some stuff');
}

function doctorize(name) {
  return `Dr. ${name}`;
}

function greet(name) {
  //go calls greet on line 52
  doesntExist(); //Will cause an error and shows in the stack trace
  return `Hello ${name}`;
}

function go() {
  const name = doctorize(greet('Wes'));
  console.log(name);
}

function bootstrap() {
  console.log('Starting the app');
  go();
}
// bootstrap()

const button = document.querySelector('.bigger');
button.addEventListener('click', function (e) {
  const newFontSize =
    parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
  e.currentTarget.style.fontSize = `${newFontSize}px`;
});

// A Dad joke fetch
async function fetchDadJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'text/plain',
    },
  });
  const joke = await res.text();
  console.log(joke);
  return joke;
}
