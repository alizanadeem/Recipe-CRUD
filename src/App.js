import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
 
  const deleteRecipe = (recipeToDelete) => {
  const updatedRecipes = recipes.filter((recipe) => recipe.name !== recipeToDelete);
  setRecipes(updatedRecipes);
};
  
  
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.
 const createRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };


  return (
    <div className="App">
      <header><h1 className="heading">Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
      <RecipeCreate createRecipe={createRecipe}/>
    </div>
  );
}

export default App;
