// Make a div
const div = document.createElement('div');
// add a class of wrapper to it
div.classList.add('wrapper');
// put it into the body
document.body.appendChild(div);

// make an unordered list
// add three list items with the words "one, two, three" in them
// put that list into the above wrapper
const list = `<ul>
	<li>one</li>
	<li>two</li>
	<li>three</li>
</ul>`;
// const list = document.createElement('ul');

// const item1 = document.createElement('li');
// item1.textContent = 'one';
// div.appendChild(item1);
// const item2 = document.createElement('li');
// item2.textContent = 'two';
// item1.insertAdjacentElement('afterend', item2);
// const item3 = document.createElement('li');
// item3.textContent = 'three';
// item2.insertAdjacentElement('afterend', item3);

// div.appendChild(list);
div.innerHTML = list;
// // create an image
const image = document.createElement('img');
const src = 'https://source.unsplash.com/random/300x300';
const desc = 'Cute Puppy';
// const html = `<img src="${src}" alt="${desc}"/>`

// set the source to an image
image.src = src;
// set the width to 250
image.width = 250;
// add a class of cute
image.classList.add('cute');
// add an alt of Cute Puppy
image.alt = desc;
// Append that image to the wrapper
div.appendChild(image);

// with HTML string, make a div, with two paragraphs inside of it
const htmlString = `
	<div class="myDiv">
		<p>Paragraph One</p>
		<p>Paragraph Two</p>
	</div>
`;
// const frag = document.createRange().createContextualFragment(htmlString);
// put this div before the unordered list from above
const listElement = div.querySelector('ul');
// console.log(listElement);
listElement.insertAdjacentHTML('beforebegin', htmlString);
// add a class to the second paragraph called warning

const myDiv = div.querySelector('.myDiv');
myDiv.children[1].classList.add('warning');
// remove the first paragraph
myDiv.firstElementChild.remove();
// document.querySelector('p').remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {
  const dogYears = age * 7;
  const card = `
<div class="playerCard">
   <h2>${name} — ${age}</h2>
   <p>Their height is ${height} and ${age} years old. In Dog years this person would be ${dogYears}. That would be a tall dog!</p>
   <button class="delete" type="button">&times;Delete</button>
 </div>
	`;
  return card;
}
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const cardDiv = document.createElement('div');
cardDiv.classList.add('cards');
// make 4 player cards using generatePlayerCard
// const player1 = generatePlayerCard('Matt', 57, '6\' 2"');
// const player2 = generatePlayerCard('Wes', 39, '5\' 9"');
// const player3 = generatePlayerCard('Kait', 57, '5\' 5"');
// const player4 = generatePlayerCard('Sarah', 57, '5\' 3"');
let playerCards = generatePlayerCard('Matt', 57, '6\' 2"');
playerCards += generatePlayerCard('Wes', 39, '5\' 9"');
playerCards += generatePlayerCard('Kait', 57, '5\' 5"');
playerCards += generatePlayerCard('Sarah', 57, '5\' 3"');

// append those cards to the div
cardDiv.innerHTML = playerCards;
div.insertAdjacentElement('beforebegin', cardDiv);
//OR ---
// player1.insertAdjacentElement('afterend', player2);
// player2.insertAdjacentElement('afterend', player3);
// player4.insertAdjacentElement('afterend', player4);
// // put the div into the DOM just before the wrapper element
// div.insertAdjacentElement('beforebegin', cardDiv);
// // Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const buttons = document.querySelectorAll('.delete');
// make out delete function
function deleteCard(event) {
  const buttonClicked = event.currentTarget;
  // buttonClicked.parentElement.remove();
  // 	OR ---
  buttonClicked.closest('.playerCard').remove(); //Better if this is used since it will search for class of
  // playerCard regardless of the button location
}
// loop over them and attach a listener
buttons.forEach((button) => button.addEventListener('click', deleteCard));
