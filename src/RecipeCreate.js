import React, { useState } from "react";

function RecipeCreate({createRecipe}) {
  const [name, setName] = useState(""); 
  const [cuisine, setCuisine] = useState(""); 
  const [photo, setPhoto] = useState(""); 
  const [ingredients, setIngredients] = useState(""); 
  const [preparation, setPreparation] = useState(""); 


    const handleSubmit = (e) => {
    e.preventDefault();
    createRecipe({
      name,
      cuisine,
      photo,
      ingredients,
      preparation,
    });
    setName("");
    setCuisine("");
    setPhoto("");
    setIngredients("");
    setPreparation("");
  };
  
  
  
    
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
   


  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
           <label htmlFor="name">
<input type="text" id="name" name="name" value= {name} placeholder="Name" value ={name} onChange={(e) => setName(e.target.value)} />
</label>
 </td>
           
            
       <td>     
 <label htmlFor="cuisine">
<input type="text" id="cuisine" name="cuisine" placeholder="cuisine" value={photo} onChange={(e) => setCuisine(e.target.value)}/>
</label>
 </td>       
      
         <td>     
 <label htmlFor="photo">
<input type="URL" id="photo" name="photo" placeholder="URL" value = {photo}  onChange={(e) => setPhoto(e.target.value)}/>
</label>
 </td>       
         
         
  <td>     
 <label htmlFor="ingredients">
<textarea type="text" id="ingredients" name="ingredients" placeholder="ingredients" rows="4" cols="12"value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
</label>
 </td>  
         
     <td>     
 <label htmlFor="preparation">
<textarea type="text" id="preparation" name="preparation" placeholder="preparation" rows="4" cols="12" value={preparation} onChange={(e) => setPreparation(e.target.value)}/>
</label>
 </td>         
            <td>
              <button type="submit" onClick={createRecipe}>Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
