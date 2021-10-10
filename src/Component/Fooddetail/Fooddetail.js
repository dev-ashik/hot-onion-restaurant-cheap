import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import fakefoodMenu from "../../fakedata/Fakefood";
import Food from "../Food/Food";
import styles from "./Fooddetail.module.css";

const Fooddetail = () => {
  let { foodId } = useParams();
  const foundFood = fakefoodMenu.find((fd) => fd.id === foodId);
  console.log(foundFood);

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
        <div className="food-list-ancor">
        {fCategory === "breakfast" ? (
          <Link to="/"
            onClick={() => selectedFood("breakfast")}
            style={{ borderBottom: "1px solid red", color: "red" }}
            className={styles.MenuButton}
          >
            Breakfirst
          </Link>
        ) : (
          <Link to="/"
            onClick={() => selectedFood("breakfast")}
            className={styles.MenuButton}
          >
            Breakfirst
          </Link>
        )}
        {fCategory === "lunch" ? (
          <Link to="/"
            onClick={() => selectedFood("lunch")}
            style={{ borderBottom: "1px solid red", color: "red" }}
            className={styles.MenuButton}
          >
            Lunch
          </Link>
        ) : (
          <Link to="/"
            onClick={() => selectedFood("lunch")}
            className={styles.MenuButton}
          >
            Lunch
          </Link>
        )}
        {fCategory === "dinner" ? (
          <Link to="/"
            onClick={() => selectedFood("dinner")}
            style={{ borderBottom: "1px solid red", color: "red" }}
            className={styles.MenuButton}
          >
            dinner
          </Link>
        ) : (
          <Link to="/"
            onClick={() => selectedFood("dinner")}
            className={styles.MenuButton}
          >
            dinner
          </Link>
        )}
      </div>
      <Food food={foundFood}></Food>
    </div>
  );
};

export default Fooddetail;
