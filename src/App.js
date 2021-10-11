import React, { createContext, useState } from "react";
import "./App.css";
import Header from "./Component/Header/Header";
import Menu from "./Component/Menu/Menu";
import Login from "./Component/Login/Login";
import fakefoodMenu from "./fakedata/Fakefood";
import Chectout from "./Component/Checkout/Chectout";
import Delivery from "./Component/Delivery/Delivery";
import Foodmenu from "./Component/Foodmenu/Foodmenu";
import Notfound from "./Component/Notfound/Notfound";
import Fooddetail from "./Component/Fooddetail/Fooddetail";
import Blackfooter from "./Component/Blackfooter/Blackfooter";
import Foodcheckout from "./Component/Foodcheckout/Foodcheckout";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Choose from "./Component/Choose/Choose";

export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    name: "",
  });

  const [fCategory, setFCategory] = useState("lunch");

  const allLunch = fakefoodMenu.filter(
    (fakefood) => fakefood.category === fCategory
  );
  const lunchMenu = allLunch.slice(0, 6);
  const [currentfood, setCurrentfood] = useState(lunchMenu);

  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header />
        <Menu
          setCurrentfood={setCurrentfood}
          fCategory={fCategory}
          setFCategory={setFCategory}
        />
        <Switch>
          <Route path="/food/:foodId">
            <Fooddetail></Fooddetail>
          </Route>
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
        <Chectout />
      </Router>
      <Choose/>
      <Blackfooter></Blackfooter>
    </userContext.Provider>
  );
}

export default App;
