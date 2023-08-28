import React, {useContext} from 'react'
import SideBar from '../SideBar/SideBar'
import RecipeContext from '../../context/RecipeContext'
import './IndiRecipe.css'

function IndiRecipe() {
  const context = useContext(RecipeContext);
  const {indi} = context;
  return (
    <>
    <div className="d-flex">
      <div style={{minWidth:"150px"}}>
          <SideBar/>
      </div>
          {!indi && <h2 style={{marginTop:"50px",marginLeft:"100px"}}>No Information to display</h2>}
          {indi && <div style={{marginLeft:"80px",marginRight:"0px"}}>
            <h1 className='indi-heading'>{indi.title}</h1>
            <div className="indi-description">
              <p>{indi.description}</p>
            </div>
            <div>
              <ul className="indi-details">
                <li>
                  <div className='indi-recipe-elements'>
                  <div>
                    Servings
                  </div>
                  <div>
                    4
                  </div>
                  </div>
                </li>
                <li>
                  <div className='indi-recipe-elements'>
                  <div>
                  Prep Time
                  </div>
                  <div>
                  {indi.time_minutes-15}
                  </div>
                  </div>
                </li>
                <li>
                  <div className='indi-recipe-elements'>
                  <div>
                  Cook Time
                  </div>
                  <div>
                  {indi.time_minutes-10}
                  </div>
                  </div>
                </li>
                <li>
                  <div className='indi-recipe-elements'>
                  <div>
                  Total Time
                  </div>
                  <div>
                  {indi.time_minutes}
                  </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="recipe-content" style={{marginTop:"75px"}}>
                <div className="ingredients">
                <h2 style={{marginBottom:"50px",fontWeight:"bolder"}}>The Ingredients</h2>
                {indi.ingredients && indi.ingredients.map((ingredient)=>{
                  return <p key={ingredient.id}>{ingredient.name}</p>
                })}
                </div>
              <div className="recipe-list">
                  <figure>
                  <img style={{width:"550px",height:"auto",objectFit:"cover"}} src={`http://127.0.0.1:8000${indi.image}`} alt="Not Available"/>
                </figure>
              </div>
            </div>
          </div>
}
      </div>
    </>
  )
}

export default IndiRecipe