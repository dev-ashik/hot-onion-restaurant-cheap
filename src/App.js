import React, { createContext, useState } from "react";
import "./App.css";
import Header from "./Component/Header/Header";
import Menu from "./Component/Menu/Menu";
import Login from "./Component/Login/Login";
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
import AddFood from "./Component/AddFood/AddFood";
import { useEffect } from "react";

export const userContext = createContext();



function App() {
  const [foods, setFoods] = useState([]);
  const [foodCategory, setFoodCategory] = useState('lunch');
  const [loggedInUser, setLoggedInUser] = useState({
    name: "",
  });
  const [currentDisplayfood, setCurrentDisplayfood] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/foods')
    .then(res => res.json())
    .then(foods => setFoods(foods));
  }, [])

  // const allCurrentFoods = foods.filter(
  //   (food) => food.category === foodCategory
  // );
  // const displayFood = allCurrentFoods.slice(0, 6);
  // setCurrentDisplayfood(displayFood);

  // console.log(currentDisplayfood);


  const selectedFood = ( foodCategory) => {
    const sellectedCurrentFood = foods.filter(
      (food) => food.category === foodCategory
    );
    const dfoods = sellectedCurrentFood.slice(0, 6);
    // setCurrentfood(foods);
    setFoodCategory(foodCategory);
    setCurrentDisplayfood(dfoods);
  };

  // const sixFood = displayFoods.slice(0, 6);
  // const [currentfood, setCurrentfood] = useState(foodsMenu);

  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header />
        <Menu
          // setCurrentDisplayfood={setCurrentDisplayfood}
          selectedFood={selectedFood}
          foodCategory={foodCategory}
          setFoodCategory={setFoodCategory}
        />
        <Switch>
          <Route path="/food/:foodKey">
            <Fooddetail></Fooddetail>
          </Route>
          <Route exact path="/">
            <Foodmenu currentDisplayfood={currentDisplayfood}></Foodmenu>
          </Route>
          <Route path="/checkout">
            <Foodcheckout></Foodcheckout>
          </Route>
          <PrivateRoute path="/delivery">
            <Delivery></Delivery>
          </PrivateRoute>
          <PrivateRoute path="/addfood">
            <AddFood/>
          </PrivateRoute>
          <Route path="/login">
          <Login/>
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
