import fetchRates from './fetch-rates.js';
const ratesByBase = {};
export async function convert(amount, from, to) {
  //first check to see if we have the rates to convert from
  if (!ratesByBase[from]) {
    console.log(
      `Oh no, we do not have ${from} to convert to ${to}. So lets go get it!`
    );
    const rates = await fetchRates(from);
    console.log(rates);
    //store them for next time
    ratesByBase[from] = rates;
  }
  //convert the values to the to currency
  const rate = ratesByBase[from].rates[to];
  const convertedAmount = rate * amount;
  console.log(`${amount} ${from} is ${convertedAmount} in ${to}`);
  return convertedAmount;
}
