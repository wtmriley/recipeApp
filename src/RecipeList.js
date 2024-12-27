import React from "react";
import RecipeData from "./RecipeData"
function RecipeList({ recipes, deleteRecipe }) {
  function Post({recipe, index}) {
    return (
      <tr>
        <td>{recipe.name}</td>
        <td>{recipe.cuisine}</td>
        <td>
          <img src={recipe.photo} alt={recipe.name} />
        </td>
        <td>{recipe.ingredients}</td>
        <td>{recipe.preparation}</td>
        <td>
          <button name="delete" onClick={() => deleteRecipe(index)}>Delete</button>
        </td>
      </tr>
    );
  }
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked.

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
          {recipes.map((recipe, index) => (
            <Post key={index} recipe={recipe} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
