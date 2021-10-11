import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import fakefoodMenu from "../../fakedata/Fakefood";
import Food from "../Food/Food";
import styles from "./Fooddetail.module.css";

const Fooddetail = () => {
  let { foodId } = useParams();
  const foundFood = fakefoodMenu.find((fd) => fd.id === foodId);
  const restFood = fakefoodMenu.filter((fd) => fd.id !== foundFood.id && fd.category === foundFood.category);
  

  const [fCategory, setFCategory] = useState(foundFood.category);
//   const [foodId, setFoodId] = useState("");
  const allLunch = fakefoodMenu.filter(
    (fakefood) => fakefood.category === fCategory
  );
  const lunchMenu = allLunch.slice(0, 6);
  const [currentfood, setCurrentfood] = useState(lunchMenu);

  const selectedFood = (foodCategory) => {
    const sellectedCurrentFood = fakefoodMenu.filter(
      (fakefood) => fakefood.category === foodCategory
    );
    const foods = sellectedCurrentFood.slice(0, 6);
    setCurrentfood(foods);
    setFCategory(foodCategory);
  };


  return (
    <div className={styles.fooddetails}>
      <Food food={foundFood} restFood={restFood}></Food>
    </div>
  );
};

export default Fooddetail;
