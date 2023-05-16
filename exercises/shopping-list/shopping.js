const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

//We need an array to hold out state
const items = [];

function handleSubmit(e) {
  e.preventDefault();
  console.log('Submitted!!!');
  const name = e.currentTarget.item.value;
  //if it's empty don't submit it
  if (!name) return;
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
  // displayItems();
  //do 4 more things here... how to not run if not needed - customs event
  //fire off an event that will tell anyone else who cares that the items have been updated
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function displayItems() {
  console.log(items);
  const html = items
    .map(
      (item) => `<li class="shopping-item">
		<input type="checkbox">
		<span class="itemName">${item.name}</span>
		<button aria-label="Remove ${item.name}">&times</button>
	</li>`
    )
    .join('');
  list.innerHTML = html;
}

function mirrorToLocalStorage() {
  console.log('Saving items to local storage');
  localStorage.setItem('items', JSON.stringify(items)); //since it is an object it must use the JSON stringify
  // instead of .toString() method - otherwise it will just be object Object with no data
}
shoppingForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems);
list.addEventListener('itemsUpdated', mirrorToLocalStorage);
