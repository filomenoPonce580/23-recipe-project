import React, { useState } from "react";

function RecipeCreate({createRecipe}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  let initialFormData ={
    name: '',
    cuisine: '',
    photo: '',
    ingredients: '',
    preparation: '',
  }
  
  const [formData, setFormData] = useState(initialFormData)
  
  function handleInputChange(event){
    event.preventDefault();
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };
  
  function handleSubmit(event){
    event.preventDefault();
    createRecipe(formData);
    setFormData(initialFormData);
  }
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name"></label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name} onChange={handleInputChange}
              />
            </td>
            <td>
              <label htmlFor="cuisine"></label>
              <input
                id="cuisine"
                type="text"
                name="cuisine"
                placeholder="Cuisine"
                value={formData.cuisine} onChange={handleInputChange}
              />
            </td>
            <td>
              <label htmlFor="photo"></label>
              <input
                id="photo"
                type="url"
                name="photo"
                placeholder="URL"
                value={formData.photo} 
                onChange={handleInputChange}
              />
            </td>
            <td>
              <label htmlFor="ingredients"></label>
              <textarea 
                name="ingredients" 
                id="ingredients" 
                placeholder="Ingredients"
                value={formData.ingredients} 
                onChange={handleInputChange}></textarea>
            </td>
            <td>
              <label htmlFor="preparation"></label>
              <textarea 
                name="preparation"
                id="preparation" 
                placeholder="Preparation"
                value={formData.preparation} 
                onChange={handleInputChange}></textarea>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;