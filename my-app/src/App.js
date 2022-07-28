// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
    else {
      setMode("dark");
      document.body.style.backgroundColor = "#383838";
    }
  }
  const [mode, setMode] = useState("light");
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below:" mode={mode}/>
      </div>
    </>
  );
}

export default App;
