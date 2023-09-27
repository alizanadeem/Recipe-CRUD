import React from "react";
import "./RecipeList.css";
import RecipeData from "./RecipeData"; 

function RecipeList({deleteRecipe, recipes}) {
  // TODO: Display the list of recipes using the structure of the table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((Recipe) => (
            <tr className="hello" key={Recipe.id}>
              <td>{Recipe.name}</td>
              <td>{Recipe.cuisine}</td>
              <td>
                <img src={Recipe.photo} alt={Recipe.name} width="200" height="100"/> 
                
              </td>
              <td>
                <div className="scroll"><p>{Recipe.ingredients}</p></div>
              </td>
              <td>
                <div className="scroll"><p>{Recipe.preparation}</p></div>
              </td>
              <td>
                <button name="delete" onClick={() => deleteRecipe(Recipe.name)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
