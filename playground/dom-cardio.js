// Make a div
const div = document.createElement('div');
// add a class of wrapper to it
div.classList.add('wrapper');
// put it into the body
document.body.appendChild(div);
// make an unordered list
const list = document.createElement('ul');
// add three list items with the words "one, two, three" in them
const item1 = document.createElement('li');
item1.textContent = 'one';
div.appendChild(item1);
const item2 = document.createElement('li');
item2.textContent = 'two';
item1.insertAdjacentElement('afterend', item2);
const item3 = document.createElement('li');
item3.textContent = 'three';
item2.insertAdjacentElement('afterend', item3);
// put that list into the above wrapper

// create an image
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
	<div>
		<p></p>
		<p></p>
	</div>
`;
const frag = document.createRange().createContextualFragment(htmlString);
// put this div before the unordered list from above
list.insertAdjacentElement('afterbegin', frag);
// add a class to the second paragraph called warning
frag.appendChild([1].classList.add(warning));
// remove the first paragraph
document.querySelector('p').remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {}
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards

// make 4 player cards using generatePlayerCard

// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener
