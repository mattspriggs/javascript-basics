//This is the function definition
//Avoid global variables
// let bill = 100;
// const taxRate = 0.13;

//parameters are the data passed to the function such as calculateBill(billAmount, taxRate) where billAmount and
// taxRate are the parameters - they are a placeholder
function calculateBill(billAmount, taxRate) {
  //function block {}
  //this is the function body
  console.log('Running Calculate Bill!!');
  //total is limited by scope and only available with the function it is declared in
  // const total = bill * (1 + taxRate);
  const total = billAmount * (1 + taxRate);
  return total;
}
//Return will provide what the conclusion of the function is

//Function call or run of the function
// calculateBill();

//To capture the returned variable:
const myTotal = calculateBill(200, 0.13);
const myTotal2 = calculateBill(100, 0.13);
// bill = 200;
// const myTotal2 = calculateBill();
console.log(myTotal, myTotal2);
// console.log(`Your total is $${myTotal}`);
//
// console.log(`Your total is $${calculateBill()}`);
