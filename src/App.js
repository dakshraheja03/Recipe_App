import React from 'react';
import './App.css';
import Auth from './components/Auth/Auth';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Alert from './components/Alert/Alert';
import { useState} from 'react';
import Home from './components/Home/Home';
import RecipeState from './context/RecipeState';

function App() {
  const [alertText, setAlertText] = useState("")
  const [alert, setalert] = useState(null) 
  const [alertType, setalertType] = useState("")    
  const showAlert=(text,type)=>{
    setalert(1)
    setAlertText(text)
    setalertType(type)
    setTimeout(() => {
      setalert(null)
    }, 2000);
  }
  return (
    <>
    <RecipeState>
    <Router>
    <Navbar/>
    <Alert alertText={alertText} alert={alert} alertType={alertType} />
      <Routes>
        <Route exact path='/' element={<Auth showAlert={showAlert} />}></Route>
        <Route exact path='/home' element={<Home showAlert={showAlert} />}></Route>
      </Routes>
    </Router>
    </RecipeState>
    </>
  );
}

export default App;
