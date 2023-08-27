import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import SideBar from '../SideBar/SideBar';
import Recipe from '../Recipe/Recipe';

function Home() {
    let history=useNavigate()
    useEffect(() => {
        return () => {
          if(!localStorage.getItem('token')){
            history('/');
          }
        };
        // eslint-disable-next-line
      }, []);
  return (
    <>
    {/* <h2 style={{marginTop:"40px"}}>This is Home</h2> */}
    <div className="d-flex">
      <div style={{minWidth:"150px"}}>
          <SideBar/>
      </div>
          <div style={{marginLeft:"80px",marginRight:"0px"}}><Recipe/></div>
      </div>
    </>
  )
}

export default Home