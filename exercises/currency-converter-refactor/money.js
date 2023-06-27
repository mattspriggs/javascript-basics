import { currencies } from './src/currencies.js';

const fromSelect = document.querySelector('[name="from_currency"]');
const fromInput = document.querySelector('[name="from_amount"]');
const toSelect = document.querySelector('[name="to_currency"]');
const toEl = document.querySelector('.to_amount');
const endpoint = 'https://api.apilayer.com/exchangerates_data/latest';
const ratesByBase = {};
const form = document.querySelector('.app form');

// const myHeaders = new Headers();
// myHeaders.append('apikey', API_KEY);
// const requestOptions = {
//   method: 'GET',
//   redirect: 'follow',
//   headers: myHeaders,
// };

const myHeaders = new Headers();
myHeaders.append('apikey', '');

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders,
};
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

async function fetchRates(base = 'USD') {
  const res = await fetch(`${endpoint}?base=${base}`, requestOptions);
  const rates = await res.json();
  return rates;
}

async function convert(amount, from, to) {
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

function formatCurrency(amount, currency) {
  return Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
}
async function handleInput(e) {
  const rawAmount = await convert(
    fromInput.value,
    fromSelect.value,
    toSelect.value
  );
  toEl.textContent = formatCurrency(rawAmount, toSelect.value);
}
const optionsHTML = generateOptions(currencies);
//populate the options on page load
fromSelect.innerHTML = optionsHTML;
toSelect.innerHTML = optionsHTML;

form.addEventListener('input', handleInput);
