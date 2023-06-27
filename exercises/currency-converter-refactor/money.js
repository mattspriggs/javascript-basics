import { currencies } from './src/currencies.js';
import { handleInput } from './utils/handlers.js';
import { generateOptions } from './utils/utils.js';
import { fromSelect, toSelect } from './src/elements.js';

const form = document.querySelector('.app form');

const optionsHTML = generateOptions(currencies);
//populate the options on page load
fromSelect.innerHTML = optionsHTML;
toSelect.innerHTML = optionsHTML;

form.addEventListener('input', handleInput);
