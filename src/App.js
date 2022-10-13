import { useState } from 'react';
import './App.css';
import Navbar  from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About'

function App() {
  const [mode ,setMode]= useState("light") //Whether dark mode is enabled or not
  const toggleMode = ()=>{
    if (mode ==="light"){
      setMode("dark")
      document.body.style.background = "#343a40"
    }
    else{
      setMode("light")
      document.body.style.background = "white"
    }
  }
  return (
    <>
    {/* <Navbar title="TextUtils" aboutText= "About Us" /> */}
    <Navbar title='TextUtils' mode ={mode} toggleMode={toggleMode} />
    <div className="container my-3">
      <TextForm heading = "Enter the Text to analyze" mode={mode} />
      {/* <About/> */}
    </div>
    </>
  );
}

export default App;

