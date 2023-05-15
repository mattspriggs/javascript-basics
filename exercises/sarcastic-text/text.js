const textarea = document.querySelector('[name="text"]');
const result = document.querySelector('.result');
const filterInputs = document.querySelectorAll('[name="filter"]');

// console.log(textArea);
// console.log(result);
// console.log(filterInputs);
function transformText(text) {
  console.log(text);
  result.textContent = text;
}
textarea.addEventListener('input', (e) => transformText(e.target.value));
