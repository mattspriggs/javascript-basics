const item = document.querySelector('.item');

const width = 500;
const src = `https://source.unsplash.com/random/300x${width}`;
const desc = `Cute Pup`;

const myHTML = `
	<div className="wrapper">
		<h2>${desc}</h2>
		<img src="${src}" alt="${desc}">
	</div>`;
// item.innerHTML = `
// 	<div>
// 		<h1>Hey, how are you?</h1>
// 	</div>
// `; //setter
item.innerHTML = myHTML;
console.log(item.innerHTML); //getter
