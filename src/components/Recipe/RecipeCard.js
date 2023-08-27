import React from 'react'

function RecipeCard(props) {
  return (
    <>
    <div className="card" style={{width:"20rem",borderRadius:"7%"}}>
        <img src={props.image} className="card-img-top" alt='Not Available' style={{height:"250px", objectFit:"cover",borderTopLeftRadius:"7%",borderTopRightRadius:"7%"}} />
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <div className="d-flex" style={{justifyContent:"space-between",alignItems:"center"}}>
              <div><p style={{fontStyle:"italic"}}>Price: Rs {props.price}</p></div>
              <div><p style={{fontStyle:"italic"}}>Time: {props.time} Minutes</p></div>
            </div>
            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
        </div>
    </div>
    </>
  )
}

export default RecipeCard