import React,{ useState } from "react";
import './Auth.css'

function Auth() {
    const [signin, setsignin] = useState(true);
    const [upname, setUpname] = useState('');
    const [upmail, setUpmail] = useState('');
    const [uppass, setUppass] = useState('');
    const [inmail, setInmail] = useState('');
    const [inpass, setInpass] = useState('');

    const handleUpname = (event) => {
        setUpname(event.target.value);
      };
    const handleUpmail = (event) => {
        setUpmail(event.target.value);
      };
    const handleUppass = (event) => {
        setUppass(event.target.value);
      };
    const handleInmail = (event) => {
        setInmail(event.target.value);
      };
    const handleInpass = (event) => {
        setInpass(event.target.value);
      };

    const handlelogin=async(e)=>{
        e.preventDefault();
        const response = await fetch(`http://localhost:8000/api/user/authenticate/`, {
              method: 'POST',
              headers: {
                'Content-type': 'application/json',
              },
              body: JSON.stringify({"email": inmail,"password": inpass})
            });
        const json= await response.json();
        localStorage.setItem('token',json.token);

        setInmail('')
        setInpass('')

    }

    const handlecreate=async(e)=>{
        // console.log(upname,upmail,uppass);
        e.preventDefault();

        const response = await fetch(`http://localhost:8000/api/user/create/`, {
              method: 'POST',
              headers: {
                'Content-type': 'application/json',
              },
              body: JSON.stringify({"email": upmail,"password": uppass,"name":upname})
            });
        const json= await response.json();
        console.log(json)
        setUpname('')
        setUpmail('')
        setUppass('')
    }


    const handleSignIn=()=>{
        localStorage.setItem('token',"")
        setsignin(true);
    }
    const handleSignup=()=>{
        localStorage.setItem('token',"")
        setsignin(false);
    }
  return (
    <>
      <div className={`container ${signin ? '' : 'right-panel-active'} `} id="container">
        <div className="form-container sign-up-container">
          <form>
            <h1 style={{marginBottom:"5px"}}>Create Account</h1>
            <input type="text" placeholder="Name" value={upname} onChange={handleUpname} />
            <input type="email" placeholder="Email" value={upmail} onChange={handleUpmail} />
            <input type="password" placeholder="Password" value={uppass} onChange={handleUppass} />
            <button style={{marginTop:"15px"}} onClick={handlecreate}>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form>
            <h1 style={{marginBottom:"10px"}}>Sign in</h1>
            <input type="email" placeholder="Email" value={inmail} onChange={handleInmail} />
            <input type="password" placeholder="Password" value={inpass} onChange={handleInpass} />
            <button style={{marginTop:"15px"}} onClick={handlelogin}>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className="ghost" id="signIn" onClick={handleSignIn}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" id="signUp" onClick={handleSignup}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Auth;
