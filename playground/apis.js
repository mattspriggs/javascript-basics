//JavaScript Object Notation -JSON
//A - Asynchronous
//J - JavaScript
//A - And
//X - XML
//AJAX - fetching data from an API and displaying it on the page
const endpoint = `https://api.github.com/users/wesbos`;
function handleError(err) {
  console.log('OH NO!!!!');
  console.log(err);
}
const wesPromise = fetch(endpoint);
wesPromise.then((data) => console.log(data)).catch(handleError);
//`https://recipes.beginnerjavascript.com/api`;
