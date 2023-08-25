import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

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
    <h2 style={{marginTop:"40px"}}>This is Home</h2>
    </>
  )
}

export default Home