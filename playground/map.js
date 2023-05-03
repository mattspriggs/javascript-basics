//DICTIONARY TO STORE METADATA
const person1 = {
  name: 'Matt',
  age: 57,
};
//USE TO KEEP ORDER - NO LITERAL SO MUST CREATE AND THEN SET, CANNOT HOLD FUNCTIONS/METHODS - OBJECTS CAN
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

//.delete()
myMap.delete(name);
console.log(myMap);

//TO TRANSFER A MAP
//JSON - maps are not supported
//JSON.stringify(person) - creates text to transfer
//JSON.parse(person) - converts it back to an object
Object.fromEntries(myMap); //Converts the map to an object - then can send via JSON
