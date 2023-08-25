import React from 'react'

function RecipeCard() {
  return (
    <>
    <div class="card" style={{width:"18rem",margin:"35px 0px"}}>
        <img src="https://img.freepik.com/free-photo/freshly-italian-pizza-with-mozzarella-cheese-slice-generative-ai_188544-12347.jpg?w=2000" class="card-img-top" alt="..."/>
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
        </div>
    </div>
    </>
  )
}

export default RecipeCard