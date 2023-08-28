import React,{useState} from 'react'
import RecipeContext from './RecipeContext'

function RecipeState(props) {
    const recipeInitial=[];
    const [recipes, setRecipes] = useState(recipeInitial)

    const [indi, setindi] = useState()

    const fetchIndi=async(id)=>{
        const url=`http://localhost:8000/api/recipe/public/${id}`
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                // "Authorization" : `Bearer ${localStorage.getItem('token')}`
            },
            });
        const json= await response.json();
        console.log(json)
        setindi(json)
      }

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
    <RecipeContext.Provider value={{recipes,fetchRecipes,indi,fetchIndi}}>
            {props.children}
        </RecipeContext.Provider>
  )
}

export default RecipeState
