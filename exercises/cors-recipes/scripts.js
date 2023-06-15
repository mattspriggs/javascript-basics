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
async function fetchRecipes(query) {
  const res = await fetch(`${baseEndpoint}?q=${query}`);
  const data = await res.json();
}

fetchRecipes('pizza');
//C - Cross - CORS policy has to allow you to transfer information and has to be on the server providing the information
//O - Origin - by default you can not share information between websites
//R - Resource
//S - Sharing
