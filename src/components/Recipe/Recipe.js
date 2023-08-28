import React, {useEffect, useContext} from "react";
import RecipeContext from "../../context/RecipeContext";
import RecipeCard from "./RecipeCard";
import './Recipe.css'

function Recipe() {
  const context = useContext(RecipeContext);
  const {recipes,fetchRecipes} = context;
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
