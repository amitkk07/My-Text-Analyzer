// import logo from './logo.svg';
import React, { useState } from "react";
import "./App.css";
import About from './components/About';
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [btn, setBtn] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(110 86 57)";
      setBtn("Disable Dark Mode");
      showAlert("Dark Mode is Enabled", "Success");
      document.title='Play with Text-Dark Mode'
      // setInterval(() => {
      //   document.title='Play with Text is Amazing'
      // },2000 );
      // setInterval(() => {
      //   document.title=' Install Play with Text '
      // },1500 );
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      setBtn("Enable Dark Mode");
      showAlert("Light Mode is Enabled", "Success");
      document.title='Play with Text-Light Mode'
    }
  };
  return (
    <>
  
      <Navbar
        title="Play with Text"
        aboutText="About Us"
        mode={mode}
        toggleMode={toggleMode}
        btn={btn}
      />
      <Alert alert={alert} />
  
      <div className="container my-3">
      
        <Textform heading="Enter your text here" mode={mode} showAlert={showAlert} />
        
        {/* <About/> */}
       
      </div>
      
    </>
  );
}
export default App;
