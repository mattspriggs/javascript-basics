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
