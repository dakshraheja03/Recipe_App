import React,{useState} from 'react'
import RecipeContext from './RecipeContext'

function RecipeState(props) {
    const recipeInitial=[];
    const [recipes, setRecipes] = useState(recipeInitial)
    const fetchRecipes=async()=>{
    const url="http://localhost:8000/api/recipe/public/"
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            // "Authorization" : `Bearer ${localStorage.getItem('token')}`
        },
        });
    const json= await response.json();
    console.log(json)
    setRecipes(json)
  }
  return (
    <RecipeContext.Provider value={{recipes,fetchRecipes}}>
            {props.children}
        </RecipeContext.Provider>
  )
}

export default RecipeState
