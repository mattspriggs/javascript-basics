const item = document.querySelector('.item');

const width = 500;
const src = `https://source.unsplash.com/random/300x${width}`;
const desc = `Cute Pup`;

const myHTML = `
	<div class="wrapper">
		<h2>${desc}</h2>
		<img src="${src}" alt="${desc}">
	</div>`;
//TURN A STRING INTO A DOM ELEMENT
const myFragment = document.createRange().createContextualFragment(myHTML); //turns string into true DOM elements

console.log(myFragment);
console.log(myFragment.querySelector('img'));
document.body.appendChild(myFragment);
// item.innerHTML = `
// 	<div>
// 		<h1>Hey, how are you?</h1>
// 	</div>
// `; //setter
// item.innerHTML = myHTML;
// console.log(item.innerHTML); //getter

// const itemImage = document.querySelector('.wrapper img');
//
// itemImage.classList.add('round');

//XSS Cross Site Scripting
//Need to sanitize user input to prevent HTML injection, only approved parties or the developer write JavaScript
