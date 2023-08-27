import React from 'react'

function Alert(props) {
  return (
    <>
    <div style={{height:"30px",marginTop:"70px"}}>
    {props.alert && <div className={`alert alert-${props.alertType} text-center`} role="alert">
            {props.alertText}
        </div>}
        </div>
    </>
  )
}

export default Alert