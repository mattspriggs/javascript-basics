function wait(ms = 0) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getRandomBetween(min = 20, max = 150, randomNumber = Math.random()) {
  return Math.floor(randomNumber * (max - min) + min);
}

//async for of loop
function draw(element) {
  const text = element.textContent;
  let soFar = '';
  for (const letter of text) {
    console.log(letter);
    soFar += letter;
    console.log(soFar);
  }
}

const els = document.querySelectorAll('[data-type]').forEach(draw);
