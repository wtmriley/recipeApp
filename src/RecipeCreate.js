import React, { useState, handleChange } from "react";

function RecipeCreate({ addRecipe }) {
  const [formData, setFormData] = useState({
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  });

  const handleChange = ({ target }) => {
    setFormData({
      ...formData, [target.name]: target.value,
    });
  };

  const handleSubmit = ( event ) => {
    event.preventDefault();
    addRecipe(formData);
    setFormData({
      name: "", 
      cuisine: "", 
      photo: "", 
      ingredients: "", 
      preparation: "" 
    });
  };
  
  return (
    <form onSubmit={handleSubmit} name="create">
      <table>
        <tbody>
          <tr>
            <td>
              <input type="text" id="name" name="name" placeholder="name" value={formData.name} onChange ={handleChange}></input>
            </td>
            <td>
              <input type="text" id="cuisine" name="cuisine" placeholder="cuisine" value={formData.cuisine} onChange={handleChange}></input>
            </td>
            <td>
              <input type="text" id="photo" name="photo" placeholder="photo" value={formData.photo} onChange={handleChange}></input>
            </td>
            <td>
              <textarea id="ingredients" name="ingredients" placeholder="ingredients" value={formData.ingredients} onChange={handleChange}></textarea>
            </td>
            <td>
              <textarea id="preparation" name="preparation" placeholder="preparation" value={formData.preparation} onChange={handleChange}></textarea>
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
