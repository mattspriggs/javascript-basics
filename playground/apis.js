//JavaScript Object Notation -JSON
//A - Asynchronous
//J - JavaScript
//A - And
//X - XML
//AJAX - fetching data from an API and displaying it on the page
const baseEndpoint = `https://api.github.com`;
const usersEndpoint = `${baseEndpoint}/users`;
const userEl = document.querySelector('.user');

async function displayUser(username) {
  userEl.textContent = 'loading ...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json();
  console.log(data);
  userEl.textContent = `${data.name} - ${data.blog}`;
}
function handleError(err) {
  console.log('OH NO!!!!');
  console.log(err);
  userEl.textContent = `Something went wrong!: ${err}`;
}
displayUser('mattspriggs').catch(handleError);

// userEl.textContent = 'loading ...';
// const wesPromise = fetch(endpoint);
// wesPromise
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//     userEl.textContent = `${data.name} - ${data.blog}`;
//   })
//   .catch(handleError);
//`https://recipes.beginnerjavascript.com/api`;
