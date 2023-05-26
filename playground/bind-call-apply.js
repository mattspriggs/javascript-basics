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
//By calling bind against query selector sets it to use document as the this value when querySelector is run
const $ = document.querySelector.bind(document);
const lookFor = document.querySelectorAll.bind(document);
console.log($('p'));
const wrapper = document.querySelector('.wrapper');
const p = wrapper.querySelector('p');
console.log(p);
console.log(lookFor('p'));

const bill = {
  total: 1000,
  calculate: function (taxRate) {
    return this.total + this.total * taxRate;
  },
};
const total = bill.calculate(0.15);
console.log(total);

const calc = bill.calculate.bind(bill);
const calc2 = bill.calculate.bind({ total: 500 });
console.log(calc(0.15));
console.log(calc2(0.15));
