import React from 'react';
import Crypto from './components/Crypto/Crypto';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'
function App() {
  return (
    <>
      <Navbar />
      <Home/>
      <Crypto />
      <Footer/>
    </>
  );
}

export default App;
