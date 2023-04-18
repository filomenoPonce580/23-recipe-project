import React from "react";

function Recipe({data, deleteRecipe}){
  return (
    <tr>
      <td>{data.name}</td>
      <td>{data.cuisine}</td>
      <td><img src={data.photo}/></td>
      <td>{data.ingredients}</td>
      <td>{data.preparation}</td>
      <td><button name="delete"
            className="btn btn-danger" 
            onClick={()=> deleteRecipe(data)}>Delete</button></td>
    </tr>
   )
    
}

export default Recipe