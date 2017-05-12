$(appReady);
const api = API();

function appReady() {
  api.getRecipes()
    .then(showRecipes);
}

function showRecipes(recipes) {
  recipes.forEach(addRecipe);
}

function addRecipe(recipe) {
  // $('.recipes').append('<p>' + recipe.title + '</p>');
  const recipeElement = createRecipeElement(recipe);
  recipeElement.click(recipeClicked);
  $('.recipes').append(recipeElement);
}

function createRecipeElement(recipe) {
  return $(`<div class="row recipe">
    <div class="col-xs-3">
        <img src="${recipe.thumbnail}" class="img-responsive">
    </div>
    <div class="col-xs-9">
      <h6>${recipe.title}</h6>
    </div>
  </div>`);
}

function recipeClicked() {
  const recipeTitle = this.textContent.trim();
  findRecipe(recipeTitle)
    .then(function(foundRecipe) {
      showIngredients(foundRecipe.ingredients);
    });
}

function findRecipe(title) {
  return api.getRecipes()
    .then(function(recipes) {
      for (var i = 0; i < recipes.length; i++) {
        if(recipes[i].title == title) {
          return recipes[i];
        }
      }
    });
}

function showIngredients(ingredients) {
  $('.ingredients').html(ingredients);
}
