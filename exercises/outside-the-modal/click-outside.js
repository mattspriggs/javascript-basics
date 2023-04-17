const cardButtons = document.querySelectorAll('.card button');
const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');
function handleCardButtonClick(event) {
  const button = event.currentTarget;
  const card = button.closest('.card'); //closest will look up the DOM instead of down like querySelectorAll
  //Grab the img source
  const imgSrc = card.querySelector('img').src;
  const desc = card.dataset.description;
  const name = card.querySelector('h2').textContent;
  //   populate the modal with info
  modalInner.innerHTML = `
  <img src="${imgSrc.replace('200', '600')}" alt="${name}"/>
  <p>${desc}</p>
  `;
  modalOuter.classList.add('open');
}
cardButtons.forEach((button) =>
  button.addEventListener('click', handleCardButtonClick)
);
