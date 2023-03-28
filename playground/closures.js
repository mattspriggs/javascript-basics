//Closure:the ability to access a parent level scope from a child scope even if the parent has been terminated
function outer() {
  const outerVar = 'Hey I am the outer var!';
  function inner() {
    const innerVar = 'Hey I am an inner var!';
    console.log(innerVar); //within this scope
    console.log(outerVar); //found in one level up
  }
  return inner;
}

const innerFn = outer();
innerFn(); //You can access the parent function even after it is run

//Closure creating a function
function createGreeting(greeting = '') {
  //outer scope
  const myGreet = greeting.toUpperCase();
  return function (name) {
    return `${myGreet} ${name}`; //inner scope
  };
}

const sayHello = createGreeting('Hello');
const sayHey = createGreeting('Hey');
console.log(sayHello('Sam'));
console.log(sayHello('Wes'));
console.log(sayHey('Sam'));

//How you can use closures for private variables
function createGame(gameName) {
  let score = 0;
  return function win() {
    score++;
    return `Your ${gameName} score is ${score}`;
  };
}

const hockeyGame = createGame('Hockey');
const footballGame = createGame('Football'); //allows you to maintain scores for different games
