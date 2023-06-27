const endpoint = 'https://api.apilayer.com/exchangerates_data/latest';
const myHeaders = new Headers();
myHeaders.append('apikey', 'lBrQXKtTy60IwWLs1y7mjcD1VM3G6Pfl');

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders,
};
async function fetchRates(base = 'USD') {
  const res = await fetch(`${endpoint}?base=${base}`, requestOptions);
  const rates = await res.json();
  return rates;
}
export default fetchRates;
