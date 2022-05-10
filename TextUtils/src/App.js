
import './App.css';
import Navbar from './components/Navbar';
import TextBox from './components/TextBox';
import Alert from './components/Alert'
import React, { useState } from 'react'

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
      setTimeout(() => {
        setAlert(null)
      }, 2000);

   
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#212529';
      showAlert("Dark Mode Has Been Enabled", "success")
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Has Been Enabled", "success")
    }
  }

  return (
    <>
      <Navbar title="TextUtils" home="Home"  mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className='container'>
        <TextBox heading="Enter Text To Analyse" mode={mode} showAlert={showAlert} />
      </div>
    </>
  );
}

export default App;