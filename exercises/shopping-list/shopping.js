const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

//We need an array to hold out state
let items = [];

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
		<input 
		value="${item.id}" 
		type="checkbox"
		${item.complete ? 'checked' : ''}
		>
		<span class="itemName">${item.name}</span>
		<button 
		aria-label="Remove ${item.name}"
		value="${item.id}"
		>&times</button>
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

function restoreFromLocalStorage() {
  console.info('Restoring from local storage');
  const lsItems = JSON.parse(localStorage.getItem('items'));
  if (lsItems.length) {
    // items = lsItems;
    // lsItems.forEach((item) => items.push(item)); OR
    items.push(...lsItems);
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
  }
}
function deleteItem(id) {
  console.log('DELETING ITEM', id);
  //update without the item with this id
  items = items.filter((item) => item.id !== id);
  console.log(items);
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function markAsPurchased(id) {
  console.log('Marking as purchased');
  const itemRef = items.find((item) => item.id === id);
  itemRef.complete = !itemRef.complete;
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}
shoppingForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems);
list.addEventListener('itemsUpdated', mirrorToLocalStorage);
// event delegation : we listen for the click on the list <ul> but then delegate the click to the button if that was
// what was clicked
list.addEventListener('click', function (e) {
  const id = parseInt(e.target.value);
  if (e.target.matches('button')) {
    //DELEGATION
    deleteItem(id);
  }
  if (e.target.matches('input[type="checkbox')) {
    markAsPurchased(id);
  }
});
restoreFromLocalStorage();
