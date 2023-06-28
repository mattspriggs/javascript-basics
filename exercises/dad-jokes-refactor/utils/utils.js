import { loader } from '../elements/elements.js';

export function randomItemFromArray(arr, not) {
  const item = arr[Math.floor(Math.random() * arr.length)];
  if (item === not) {
    console.log('We used that one last time');
    return randomItemFromArray(arr, not);
  }
  return item;
}

export async function fetchJoke() {
  //turn loader on
  loader.classList.remove('hidden');
  const response = await fetch('https://icanhazdadjoke.com', {
    headers: { Accept: 'application/json' },
  });
  const data = await response.json();
  //turn the loader off
  loader.classList.add('hidden');
  return data;
}
