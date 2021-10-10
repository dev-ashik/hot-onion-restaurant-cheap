import React, { useState } from "react";
import fakefoodMenu from "../../fakedata/Fakefood";
import Currentfood from "../Currentfood/Currentfood";
import styles from "./Foodmenu.module.css";
import { Link } from "react-router-dom";

const Foodmenu = () => {
  const [fCategory, setFCategory] = useState("lunch");
  const [foodId, setFoodId] = useState("");
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
    <div>
      <div className="food-list-ancor">
        {fCategory === "breakfast" ? (
          <button
            onClick={() => selectedFood("breakfast")}
            style={{ borderBottom: "1px solid red", color: "red" }}
            className={styles.MenuButton}
          >
            Breakfirst
          </button>
        ) : (
          <button
            onClick={() => selectedFood("breakfast")}
            className={styles.MenuButton}
          >
            Breakfirst
          </button>
        )}
        {fCategory === "lunch" ? (
          <button
            onClick={() => selectedFood("lunch")}
            style={{ borderBottom: "1px solid red", color: "red" }}
            className={styles.MenuButton}
          >
            Lunch
          </button>
        ) : (
          <button
            onClick={() => selectedFood("lunch")}
            className={styles.MenuButton}
          >
            Lunch
          </button>
        )}
        {fCategory === "dinner" ? (
          <button
            onClick={() => selectedFood("dinner")}
            style={{ borderBottom: "1px solid red", color: "red" }}
            className={styles.MenuButton}
          >
            dinner
          </button>
        ) : (
          <button
            onClick={() => selectedFood("dinner")}
            className={styles.MenuButton}
          >
            dinner
          </button>
        )}
      </div>

      <div className={styles.currentFood}>
        {currentfood.map((food) => (
          <Currentfood key={food.id} setFoodId={setFoodId} foods={food}></Currentfood>
        ))}
      </div>
      {/* <br /> */}

      <div className={styles.checkoutButtonSection}>
        {/* <Link to="/checkout">
            <button className={styles.checkoutButton}>Checkout Your Food</button>
        </Link> */}
      </div>
    </div>
  );
};


export default Foodmenu;
