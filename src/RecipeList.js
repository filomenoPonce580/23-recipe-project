import React from "react";
import Recipe from "./Recipe.js"

function RecipeList({recipes, deleteRecipe}) {
  return (
    <div className="recipe-list">
      <table>
        <thead className="tableHead">         
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
        </thead>
        <tbody>
            {recipes.map((oneRecipe, indx) => <Recipe key={indx} data={oneRecipe} deleteRecipe={deleteRecipe}/>)}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;