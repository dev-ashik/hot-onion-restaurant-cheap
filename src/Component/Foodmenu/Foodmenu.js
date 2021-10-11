import React, { useState } from "react";
import fakefoodMenu from "../../fakedata/Fakefood";
import Currentfood from "../Currentfood/Currentfood";
import styles from "./Foodmenu.module.css";
import { Link } from "react-router-dom";

const Foodmenu = ({ currentfood }) => {
  // console.log(currentfood);
  //   const [fCategory, setFCategory] = useState("lunch");
  //   const [foodId, setFoodId] = useState("");
  //   const allLunch = fakefoodMenu.filter(
  //     (fakefood) => fakefood.category === fCategory
  //   );
  //   const lunchMenu = allLunch.slice(0, 6);
  //   const [currentfood, setCurrentfood] = useState(lunchMenu);

  //   const selectedFood = (foodCategory) => {
  //     const sellectedCurrentFood = fakefoodMenu.filter(
  //       (fakefood) => fakefood.category === foodCategory
  //     );
  //     const foods = sellectedCurrentFood.slice(0, 6);
  //     setCurrentfood(foods);
  //     setFCategory(foodCategory);
  //   };

  return (
    <div>
      <div className={styles.currentFood}>
        {currentfood.map((food) => (
          <Currentfood key={food.id} foods={food}></Currentfood>
        ))}
      </div>
    </div>
  );
};

export default Foodmenu;
