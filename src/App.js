import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Header/Header';
import Foodmenu from './Component/Foodmenu/Foodmenu';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Foodmenu></Foodmenu>
    </div>
  );
}

export default App;
