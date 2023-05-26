//bind, call and apply change the scope of this
const person = {
  name: 'Matt Spriggs',
  sayHi() {
    return `Hey ${this.name}`;
  },
};

const sayHi = person.sayHi; //will equal the window and just return Hey
console.log(sayHi());

console.log(person.sayHi());

const sayHi2 = person.sayHi.bind(person);
console.log(sayHi2());

const jenna = { name: 'Jenna' };

const sayHi3 = person.sayHi.bind(jenna);
console.log(sayHi3());

//Query Selector example
const $ = document.querySelector;
console.log($('p')); //Illegal invocation error
