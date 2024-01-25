// import logo from './logo.svg';
import './App.css';
import React,{useState}from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import { useState } from 'react';
// import About from './components/About';

// let name="aditya";

function App() {
  const [mode,setMode] = useState('dark'); //state variable
  const [alert,setAlert]=useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='white';
    }else{
      setMode('light');
      document.body.style.backgroundColor='black';
    }
  }
  return (
    <>
      <Navbar title="Text_Utils"mode={mode} toggleMode={toggleMode}/>
      <div className="container my3"> 
          <TextForm heading="Enter the text below to analyse.." mode={mode}/> 
           
           {/* <About/> */}
      </div>
    </>
  );
}

export default App;
