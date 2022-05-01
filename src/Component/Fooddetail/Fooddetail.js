import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import fakefoodMenu from "../../fakedata/Fakefood";
import Food from "../Food/Food";
import styles from "./Fooddetail.module.css";

const Fooddetail = () => {
  const [foodData, setFoodData] = useState({});
  let { foodKey } = useParams();

  useEffect(()=>{
    fetch('http://localhost:5000/food/'+foodKey)
    .then(res => res.json())
    .then(food => setFoodData(food))
  }, [])
  

  // const foodData = fakefoodMenu.find((fd) => fd.key === foodKey);
  const restFood = fakefoodMenu.filter((fd) => fd.key !== foodData.id && fd.category === foodData.category);
  

  const [fCategory, setFCategory] = useState(foodData.category);
//   const [foodKey, setfoodKey] = useState("");
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
      <Food food={foodData} restFood={restFood}></Food>
    </div>
  );
};

export default Fooddetail;
