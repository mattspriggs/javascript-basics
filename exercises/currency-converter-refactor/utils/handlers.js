import { formatCurrency } from './utils.js';
import { convert } from '../money.js';

const fromInput = document.querySelector('[name="from_amount"]');
const toEl = document.querySelector('.to_amount');
const fromSelect = document.querySelector('[name="from_currency"]');
const toSelect = document.querySelector('[name="to_currency"]');

export async function handleInput(e) {
  const rawAmount = await convert(
    fromInput.value,
    fromSelect.value,
    toSelect.value
  );
  toEl.textContent = formatCurrency(rawAmount, toSelect.value);
}
