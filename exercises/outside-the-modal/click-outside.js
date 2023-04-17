const cardButtons = document.querySelectorAll('.card button');

function handleCardButtonClick(event) {
  const button = event.currentTarget;
  const card = button.closest('.card'); //closest will look up the DOM instead of down like querySelectorAll
  //Grab the img source
  const imgSrc = card.querySelector('img').src;
  const desc = card.dataset.description;
  console.log(desc);
}
cardButtons.forEach((button) =>
  button.addEventListener('click', handleCardButtonClick)
);
