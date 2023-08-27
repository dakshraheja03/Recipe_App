import React, { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";
import './Recipe.css'

function Recipe() {
  //Fetching all recipes
  const recipeInitial=[];
  const [recipes, setRecipes] = useState(recipeInitial)
  const fetchRecipes=async()=>{
    const url="http://localhost:8000/api/recipe/public/"
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${localStorage.getItem('token')}`
      },
    });
    const json= await response.json();
    // console.log(json)
    setRecipes(json)
  }

  useEffect(() => {
    return () => {
        fetchRecipes();
    };
    // eslint-disable-next-line
  }, []);

  return (
    <>
    <div className="row" style={{marginTop:"30px"}}>
    {recipes.map((recipe) => {
            return <div className="col col-xl-4" key={recipe.id} style={{marginTop:"35px",marginBottom:"20px"}}><RecipeCard  id={recipe.id} price={recipe.price} time={recipe.time_minutes} title={recipe.title} image={recipe.image}  /></div>
          })}
    </div>
    </>
  );
}

export default Recipe;
