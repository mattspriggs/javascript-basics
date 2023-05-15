const textarea = document.querySelector('[name="text"]');
const result = document.querySelector('.result');
const filterInputs = document.querySelectorAll('[name="filter"]');

// console.log(textArea);
// console.log(result);
// console.log(filterInputs);
function transformText(text) {
  //take the text and loop over each letter
  const mod = Array.from(text).map(filters.sarcastic);
  console.log(mod);
  result.textContent = text;
}
const filters = {
  sarcastic: function (letter, index) {
    //if it is odd, it will return 1 and that is truthy so this statement will trip
    if (index % 2) {
      return letter.toUpperCase();
    }
    // if it is even it will return zero and it will lowercase it
    return letter.toLowerCase();
  },
  funky: function () {},
  unable: function () {},
};
textarea.addEventListener('input', (e) => transformText(e.target.value));
