import { currencies } from './src/currencies.js';
import fetchRates from './src/fetch-rates.js';
import { handleInput } from './utils/handlers.js';

const fromSelect = document.querySelector('[name="from_currency"]');
const toSelect = document.querySelector('[name="to_currency"]');

const ratesByBase = {};
const form = document.querySelector('.app form');

// const myHeaders = new Headers();
// myHeaders.append('apikey', API_KEY);
// const requestOptions = {
//   method: 'GET',
//   redirect: 'follow',
//   headers: myHeaders,
// };

// fetch(
//   `https://api.apilayer.com/exchangerates_data/latest?symbols={symbols}&base={base}`,
//   requestOptions
// )
//   .then((response) => response.text())
//   .then((result) => console.log(result))
//   .catch((error) => console.log('error', error));

function generateOptions(options) {
  return Object.entries(options)
    .map(
      ([currencyCode, currencyName]) =>
        `<option value="${currencyCode}">${currencyCode} - ${currencyName}</option>`
    )
    .join('');
}

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

const optionsHTML = generateOptions(currencies);
//populate the options on page load
fromSelect.innerHTML = optionsHTML;
toSelect.innerHTML = optionsHTML;

form.addEventListener('input', handleInput);
