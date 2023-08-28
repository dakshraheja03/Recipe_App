import React, {useContext} from 'react'
import RecipeContext from '../../context/RecipeContext'
import { useNavigate } from 'react-router-dom'

function RecipeCard(props) {
  let history=useNavigate()
  const context = useContext(RecipeContext);
  const {fetchIndi} = context;
  const fetchdata=()=>{
    history('/home/recipe');
    fetchIndi(props.id)
  }
  return (
    <>
    <div className="card" style={{width:"20rem",borderRadius:"7%"}}>
        <img src={props.image} className="card-img-top" alt='Not Available' style={{height:"250px", objectFit:"cover",borderTopLeftRadius:"7%",borderTopRightRadius:"7%"}} />
        <div className="card-body">
          <div><h5 className="card-title d-flex justify-content-center" style={{fontWeight:"bold"}}>{props.title}</h5></div>
            <div className="d-flex" style={{justifyContent:"space-evenly",alignItems:"center"}}>
              <div><p style={{fontStyle:"italic"}}><img width="20" height="20" src="https://img.icons8.com/small/16/rupee.png" alt="rupee"/>{props.price}</p></div>
              <div><p style={{fontStyle:"italic"}}><img width="20" height="20" src="https://img.icons8.com/glyph-neue/64/time--v1.png" alt="time--v1"/> {props.time} mins</p></div>
            </div>
            <div style={{display:"flex",justifyContent:"center",alignContent:"center"}}>
            <button className="btn btn-primary" onClick={fetchdata}>Let's Cook</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default RecipeCard