import React, { createContext, useContext, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Component/Header/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Foodmenu from "./Component/Foodmenu/Foodmenu";
import Fooddetail from "./Component/Fooddetail/Fooddetail";
import Notfound from "./Component/Notfound/Notfound";
import Footer from "./Component/Footer/Footer";
import Foodcheckout from "./Component/Foodcheckout/Foodcheckout";
import Blackfooter from "./Component/Blackfooter/Blackfooter";
import Login from "./Component/Login/Login";
import Menu from "./Component/Menu/Menu";
import fakefoodMenu from "./fakedata/Fakefood";
import Chectout from "./Component/Checkout/Chectout";
import Delivery from "./Component/Delivery/Delivery";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";

export const userContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({
    name: ''
  })

  const [fCategory, setFCategory] = useState("lunch");
  const [foodId, setFoodId] = useState("");
  const allLunch = fakefoodMenu.filter(
    (fakefood) => fakefood.category === fCategory
  );
  const lunchMenu = allLunch.slice(0, 6);
  const [currentfood, setCurrentfood] = useState(lunchMenu);
  // console.log(currentfood);
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
          <Header/>
          <Menu setCurrentfood={setCurrentfood} fCategory={fCategory} setFCategory={setFCategory}/>
        <Switch>
          {/* <Route path="/currentfood">
            <Foodmenu currentfood="h"/>
          </Route> */}
          <Route path="/food/:foodId">
            <Fooddetail></Fooddetail>
          </Route>
          {/* <Route exact path="/">
            <Menu></Menu>
          </Route> */}
          <Route exact path="/">
            <Foodmenu currentfood={currentfood}></Foodmenu>
          </Route>
          <Route path="/checkout">
            <Foodcheckout></Foodcheckout>
          </Route>
          <PrivateRoute path="/delivery">
            <Delivery></Delivery>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
        <Chectout/>
      </Router>
      {/* <Footer></Footer>  */}
      {/* <Blackfooter></Blackfooter>    */}
    </userContext.Provider>
  );
}

export default App;
