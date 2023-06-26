//import currencies from '../scripts/currencies.js';
export async function handleButttonClick(event) {
  const currenciesModule = await import('/scripts/currencies.js');
  console.log(currenciesModule.default);
}
