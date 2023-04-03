const myParagraph = document.createElement('p');
console.log(myParagraph);
myParagraph.textContent = 'I am a P';
myParagraph.classList.add('special');

const myImage = document.createElement('img');
myImage.src = 'https://source.unsplash.com/random/300x300';
myImage.alt = 'Nice photo';
console.log(myImage);

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

myDiv.appendChild(myParagraph); //This will require only one re-render of the page
myDiv.appendChild(myImage);
document.body.appendChild(myDiv); //each will cause a re-render of the page
// myDiv.appendChild(myParagraph);
// myDiv.appendChild(myImage);

//Add a heading prior to p tag
const heading = document.createElement('h2');
heading.textContent = 'Cool things';
myDiv.insertAdjacentElement('afterbegin', heading);

const list = document.createElement('ul');
const item = document.createElement('li');
item.textContent = 'Three';
list.appendChild(item);
document.body.insertAdjacentElement('afterbegin', list);

const item5 = document.createElement('li');
item5.textContent = 'Five';
list.append(item5);

const item1 = item5.cloneNode(true); //deep will pass the children, text, of the element
item1.textContent = 'One';
list.insertAdjacentElement('afterbegin', item1);

const item4 = document.createElement('li');
item4.textContent = 'Four';
item5.insertAdjacentElement('beforebegin', item4);

const item2 = document.createElement('li');
item2.textContent = 'Two';
item1.insertAdjacentElement('afterend', item2);
