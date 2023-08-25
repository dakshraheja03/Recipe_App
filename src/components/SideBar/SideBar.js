import React from 'react'
import './SideBar.css'

function SideBar() {
  return (
    <>
    <div className="flex-shrink-0 p-3 bg-dark" style={{border:"none",width:"200px",height:"100%",position:"fixed",top:"70px",bottom:"0px",overflow:"auto"}}>
        <ul className="list-unstyled ps-0">
        <li className="mb-1">
            <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true" style={{color:"white",fontWeight:"bolder"}}>
            Home
            </button>
            <div className="collapse" id="home-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small" style={{marginLeft:"30px"}}>
                <li><a href="/" className="link-light rounded" style={{color:"white",fontWeight:"bolder"}}>Overview</a></li>
                <li><a href="/" className="link-light rounded" style={{color:"white",fontWeight:"bolder"}}>Updates</a></li>
                <li><a href="/" className="link-light rounded" style={{color:"white",fontWeight:"bolder"}}>Reports</a></li>
            </ul>
            </div>
        </li>
        <li className="mb-1">
            <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false" style={{color:"white",fontWeight:"bolder"}}>
            Dashboard
            </button>
            <div className="collapse" id="dashboard-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small" style={{marginLeft:"30px"}}>
                <li><a href="/" className="link-light rounded" style={{color:"white",fontWeight:"bolder"}}>Overview</a></li>
                <li><a href="/" className="link-light rounded" style={{color:"white",fontWeight:"bolder"}}>Weekly</a></li>
                <li><a href="/" className="link-light rounded" style={{color:"white",fontWeight:"bolder"}}>Monthly</a></li>
                <li><a href="/" className="link-light rounded" style={{color:"white",fontWeight:"bolder"}}>Annually</a></li>
            </ul>
            </div>
        </li>
        <li className="mb-1">
            <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false" style={{color:"white",fontWeight:"bolder"}}>
            Orders
            </button>
            <div className="collapse" id="orders-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small" style={{marginLeft:"30px"}}>
                <li><a href="/" className="link-light rounded" style={{color:"white",fontWeight:"bolder"}}>New</a></li>
                <li><a href="/" className="link-light rounded" style={{color:"white",fontWeight:"bolder"}}>Processed</a></li>
                <li><a href="/" className="link-light rounded" style={{color:"white",fontWeight:"bolder"}}>Shipped</a></li>
                <li><a href="/" className="link-light rounded" style={{color:"white",fontWeight:"bolder"}}>Returned</a></li>
            </ul>
            </div>
        </li>
        <li className="border-top my-3"></li>
        <li className="mb-1">
            <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false" style={{color:"white",fontWeight:"bolder"}}>
            Account
            </button>
            <div className="collapse" id="account-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li><a href="/" className="link-dark rounded" style={{color:"white",fontWeight:"bolder"}}>New...</a></li>
                <li><a href="/" className="link-dark rounded" style={{color:"white",fontWeight:"bolder"}}>Profile</a></li>
                <li><a href="/" className="link-dark rounded" style={{color:"white",fontWeight:"bolder"}}>Settings</a></li>
                <li><a href="/" className="link-dark rounded" style={{color:"white",fontWeight:"bolder"}}>Sign out</a></li>
            </ul>
            </div>
        </li>
        </ul>
    </div>
    </>
  )
}

export default SideBar