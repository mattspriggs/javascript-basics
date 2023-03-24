//This is the function definition
//Avoid global variables
// let bill = 100;
// const taxRate = 0.13;

//parameters are the data passed to the function such as calculateBill(billAmount, taxRate) where billAmount and
// taxRate are the parameters - they are a placeholder
function calculateBill(billAmount, taxRate = 0.1, tipRate = 0.2) {
  //You can set a default value in the parameter to ensure it will run
  //function block {}
  //this is the function body
  console.log('Running Calculate Bill!!');
  //total is limited by scope and only available with the function it is declared in
  // const total = bill * (1 + taxRate);
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  return total;
}
//Return will provide what the conclusion of the function is

//Function call or run of the function
// calculateBill();

//To capture the returned variable:
const myTotal = calculateBill(200, 0.13);
const myTotal2 = calculateBill(100, 0.13);

const wesTotal = 500;
const wesTaxRate = 0.3;
const myTotal3 = calculateBill(wesTotal, wesTaxRate);
console.log(myTotal3);
// bill = 200;
// const myTotal2 = calculateBill();
console.log(myTotal, myTotal2);
// console.log(`Your total is $${myTotal}`);
//
// console.log(`Your total is $${calculateBill()}`);

//Function Definition
function sayHiTo(firstName) {
  return `Hello ${firstName}`;
}
// const greeting = sayHiTo('Wes')
// console.log(greeting)

const myTotal4 = calculateBill(20 + 20 + 30 + 20, 0.15);

//Parameters can be repeated
function doctorize(name) {
  return `Dr. ${name}`;
}

function yell(name) {
  return `HEYYYY ${name.toUpperCase()}`;
}
yell(doctorize('Matt')); //runs the doctorize and passes the return value into yell

const myTotal5 = calculateBill(100, undefined, 0.25); //Pass undefined if you want to use only one of the default values
