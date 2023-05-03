//DICTIONARY TO STORE METADATA
const person1 = {
  name: 'Matt',
  age: 57,
};

const myMap = new Map();
//.set()
myMap.set('name', 'Matt'); //keys can be any type, order is guaranteed
myMap.set(100, 'this is a number');
myMap.set(person1, 'Really Cool');
console.log(myMap);
console.log(myMap.get(person1));

const score = 200;
const prizes = new Map();
prizes.set(100, 'Bear');
prizes.set(200, 'Duck');
prizes.set(300, 'Car');
console.log(`You win a ${prizes.get(score)}`);
//select ul
const ul = document.querySelector('.prizes');
for (const [points, prize] of prizes) {
  const li = `<li>${points} - ${prize}</li>`;
  ul.insertAdjacentHTML('beforeend', li);
}
// myMap.age = 57; //is in the map but is not an entry
// console.log(myMap);

//.has()
//.delete
