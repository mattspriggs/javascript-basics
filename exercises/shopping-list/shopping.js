const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

//We need an array to hold out state
const items = [];

function handleSubmit(e) {
  e.preventDefault();
  console.log('Submitted!!!');
  const name = e.currentTarget.item.value;
  const item = {
    name,
    id: Date.now(),
    complete: false,
  };
  //Push items into state
  items.push(item);
  console.log(`There are now ${items.length} in your state`);
  //clear the form
  //e.currentTarget.item.value = ''
  e.target.reset(); //best for multiple inputs
}

shoppingForm.addEventListener('submit', handleSubmit);
