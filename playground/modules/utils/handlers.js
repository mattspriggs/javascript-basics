//import currencies from '../scripts/currencies.js';
export async function handleButttonClick(event) {
  const { localCurrency, default: currency } = await import(
    //default:currency renames the reserved word of default to currency
    '/scripts/currencies.js'
  );
  console.log(localCurrency, currency);
}
