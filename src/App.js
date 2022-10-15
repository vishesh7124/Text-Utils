import { useState } from 'react';
import './App.css';
import Navbar  from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About'

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode ,setMode]= useState("light") //Whether dark mode is enabled or not
  const [alert,setAlert] = useState(null)

  const showAlert = (message,type)=>{
    setAlert({
      msg : message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }

  const toggleMode = ()=>{
    if (mode ==="light"){
      setMode("dark")
      document.body.style.background = "#343a40"
      showAlert("Dark mode is enabled ","success")
    }
    else{
      setMode("light")
      document.body.style.background = "white"
      showAlert("Light mode is enabled ","success")
    }
  }

  return (
    <>
    {/* <Navbar title="TextUtils" aboutText= "About Us" /> */}
    <Router>
      <Navbar title='TextUtils' aboutText='About Us' mode ={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
            <Route exact path="/about" element={<About />}>
              
            </Route>
            <Route exact path="/" element={<TextForm showAlert = {showAlert} heading = "Enter the Text to analyze" mode={mode} /> }>              

            </Route>
        </Routes>

      </div>
    </Router>
    {/* <About/> */}
    
    </>
  );
}

export default App;

