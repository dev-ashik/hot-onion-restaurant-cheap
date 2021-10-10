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
import Footer from './Component/Footer/Footer'
import Foodcheckout from './Component/Foodcheckout/Foodcheckout';
import Blackfooter from './Component/Blackfooter/Blackfooter';
import Login from './Component/Login/Login';




function App() {
    

  return (
    <div>
      <Header></Header>
      
      <Router>
        <Switch>
          <Route path = "/currentfood">
              <Foodmenu></Foodmenu>
          </Route>
          <Route path = "/food/:foodId">
            <Fooddetail></Fooddetail>
          </Route>
          <Route exact path = "/">
              <Foodmenu></Foodmenu>
          </Route>
          <Route path = '/checkout'>
            <Foodcheckout></Foodcheckout>
          </Route>
          <Route path = '/login'>
            <Login></Login>
          </Route>
          <Route path = "*">
            <Notfound></Notfound>
          </Route>
        </Switch>
      </Router> 
      {/* <Footer></Footer>  */}
      {/* <Blackfooter></Blackfooter>    */}
    </div>
  );
}
 
export default App;
