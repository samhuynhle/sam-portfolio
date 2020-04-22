import React from 'react';
import './App.css';

import Header from './Components/Shared/header'
import Body from './Components/Shared/body'
import Footer from './Components/Shared/footer'
import Navbar from './Components/Shared/navbar'

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
