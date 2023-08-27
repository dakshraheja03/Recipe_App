import React,{ useState, useRef} from "react";
import { useNavigate } from "react-router";
import './Auth.css'

function Auth(props) {

  let history=useNavigate()

    const ref = useRef(null)
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
        if(response.status===200){
          props.showAlert("Logged in Successfully","success");
          history("/home")
        }
        else{
          props.showAlert("Wrong Credentials Entered","danger");
        }
        const json= await response.json();
        console.log(json)
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
        if(response.status===201){
          props.showAlert("Signed Up Successfully","success");
          ref.current.click()
        }
        else{
          props.showAlert("Sign Up Failed","danger");
        }
        const json= await response.json();
        console.log(json)
        setUpname('')
        setUpmail('')
        setUppass('')
    }


    const handleSignIn=()=>{
        setsignin(true);
    }
    const handleSignup=()=>{
        setsignin(false);
    }
  return (
    <>
      <div className={`container ${signin ? '' : 'right-panel-active'} `} id="auth-container" style={{marginTop:"80px"}}>
        <div className="form-container sign-up-container">
          <form className="form-auth">
            <h1 className="auth-heading" style={{marginBottom:"5px"}}>Create Account</h1>
            <input type="text" placeholder="Name" value={upname} onChange={handleUpname} />
            <input type="email" placeholder="Email" value={upmail} onChange={handleUpmail} />
            <input type="password" placeholder="Password" value={uppass} onChange={handleUppass} />
            <button className="auth-btn" style={{marginTop:"15px"}} onClick={handlecreate}>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form className="form-auth">
            <h1 className="auth-heading" style={{marginBottom:"10px"}}>Sign in</h1>
            <input type="email" placeholder="Email" value={inmail} onChange={handleInmail} />
            <input type="password" placeholder="Password" value={inpass} onChange={handleInpass} />
            <button className="auth-btn"  style={{marginTop:"15px"}} onClick={handlelogin}>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="auth-heading">Welcome Back!</h1>
              <p className="auth-para">
                To keep connected with us please login with your personal info
              </p>
              <button ref={ref} className="ghost auth-btn" id="signIn" onClick={handleSignIn}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="auth-heading">Hello, Friend!</h1>
              <p className="auth-para">Enter your personal details and start journey with us</p>
              <button className="ghost auth-btn" id="signUp" onClick={handleSignup}>
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
