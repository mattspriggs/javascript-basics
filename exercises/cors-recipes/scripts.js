// The Recipe Puppy API used in the course is broken
// Please use this replacement API URL "https://recipes.beginnerjavascript.com/api"
//parameters for API:
//EXAMPLE
//http://recipepuppy.com/api
//? - shows the beginning of a query in the url with parameters
//i = onions, garlic - ingredient parameters
//& - joiner for additional options or parameters
//q=omlet
//& - joiner for additional options or parameters
//p=3
const baseEndpoint = 'https://recipes.beginnerjavascript.com/api';
// const proxy = `https://cors-anywhere.herokuapp.com/`;${proxy}${baseEndpoint}?q=${query}
const form = document.querySelector('form.search');
const recipesGrid = document.querySelector('.recipes');
async function fetchRecipes(query) {
  const res = await fetch(`${baseEndpoint}?q=${query}`);
  const data = await res.json();
  return data;
}

async function handleSubmit(event) {
  event.preventDefault();
  const el = event.currentTarget;
  //turn the form off
  el.submit.disabled = true;
  //submit the search
  const recipes = await fetchRecipes(el.query.value);
  console.log(recipes);
  el.submit.disabled = false;
  displayRecipes(recipes.results);
}
function displayRecipes(recipes) {
  console.log('Creating HTML');
  const html = recipes.map(
    (recipe) =>
      `<div class="recipe">
        <h2>${recipe.title}</h2>
        <p>${recipe.ingredients}</p>
        ${
          recipe.thumbnail &&
          `<img src="${recipe.thumbnail}" alt="${recipe.title}"/>`
        }
    </div>`
  );
  recipesGrid.innerHTML = html.join('');
}
form.addEventListener('submit', handleSubmit);
// fetchRecipes('pizza');
//C - Cross - CORS policy has to allow you to transfer information and has to be on the server providing the information
//O - Origin - by default you can not share information between websites
//R - Resource
//S - Sharing
