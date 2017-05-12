const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
const API_URL = PROXY_URL + 'http://www.recipepuppy.com/api/?q=tomato';

function API() {
  let recipeData = null;

  function getRecipes() {
    if(!recipeData) {
      return $.getJSON(API_URL)
        .then(function(response) {
          recipeData = response.results;
          return response.results;
        });
    } else {
      return Promise.resolve(recipeData);
    }
  }

  return {
    getRecipes: getRecipes
  };
}
