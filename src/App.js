import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Foodmenu from './Component/Foodmenu/Foodmenu';
import Fooddetail from './Component/Fooddetail/Fooddetail';
import Notfound from './Component/Notfound/Notfound';




function App() {
    

  return (
    <div>
      <Header></Header>
      
      <Router>
        <Switch>
          
          <Route path = "/currentfood">
              <Foodmenu></Foodmenu>
          </Route>
          <Route path = "/food:foodKey">
            <Fooddetail></Fooddetail>
          </Route>
          <Route exact path = "/">
              <Foodmenu></Foodmenu>
          </Route>
          <Route path = "*">
            <Notfound></Notfound>
          </Route>
          
        </Switch>
      </Router>      
    </div>
  );
}

export default App;
