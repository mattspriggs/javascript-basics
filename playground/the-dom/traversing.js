const wes = document.querySelector('.wes');
console.log(wes);

//ELEMENTS
console.log(wes.children);
console.log(wes.firstElementChild);
console.log(wes.lastElementChild);
console.log(wes.previousElementSibling);
console.log(wes.nextElementSibling);
console.log(wes.parentElement);

//NODES
console.log(wes.childNodes);
console.log(wes.firstChild);
console.log(wes.lastChild);
console.log(wes.previousSibling);
console.log(wes.nextSibling);
console.log(wes.parentNode);

//REMOVE
//select an item and call remove to remove it
const heading = document.querySelector('h2');
heading.addEventListener('click', remover);
function remover() {
  heading.remove();
}

const p = document.createElement('p');
p.textContent = 'I will be removed';
document.body.appendChild(p);
p.remove();

console.log(p); //will still exist in memory

document.body.appendChild(p); //you can add it back in since it is in the JS memory
