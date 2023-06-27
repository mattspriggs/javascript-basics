import { formatCurrency } from './utils.js';
import { convert } from '../src/convert.js';
import { fromInput, fromSelect, toSelect, toEl } from '../src/elements.js';

export async function handleInput(e) {
  const rawAmount = await convert(
    fromInput.value,
    fromSelect.value,
    toSelect.value
  );
  toEl.textContent = formatCurrency(rawAmount, toSelect.value);
}
