import { fetchJoke, randomItemFromArray } from '../utils/utils.js';
import buttonText from '../src/button-text.js';
import { jokeHolder, jokeButtonSpan } from '../elements/elements.js';

export async function handleClick() {
  const { joke } = await fetchJoke();
  jokeHolder.textContent = joke;
  jokeButtonSpan.textContent = randomItemFromArray(
    buttonText,
    jokeButtonSpan.textContent
  );
}
