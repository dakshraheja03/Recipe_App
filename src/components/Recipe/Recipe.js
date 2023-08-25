import React from "react";
import RecipeCard from "./RecipeCard";
import './Recipe.css'

function Recipe() {
  return (
    <>
    <div className="container main-recipe" style={{marginTop:"100px"}}>
    <div class="row">
        <div class="col-6 col-md-4"><RecipeCard/></div>
        <div class="col-6 col-md-4"><RecipeCard/></div>
        <div class="col-6 col-md-4"><RecipeCard/></div>
        <div class="col-6 col-md-4"><RecipeCard/></div>
        <div class="col-6 col-md-4"><RecipeCard/></div>
        <div class="col-6 col-md-4"><RecipeCard/></div>
        <div class="col-6 col-md-4"><RecipeCard/></div>
        <div class="col-6 col-md-4"><RecipeCard/></div>
        <div class="col-6 col-md-4"><RecipeCard/></div>
    </div>
    </div>
    </>
  );
}

export default Recipe;
