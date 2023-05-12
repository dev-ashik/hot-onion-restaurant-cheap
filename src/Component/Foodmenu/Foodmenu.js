import React from "react";
import Currentfood from "../Currentfood/Currentfood";
import styles from "./Foodmenu.module.css";

const Foodmenu = ({ currentDisplayfood }) => {

  return (
    <div>
      <div className={styles.currentFood}>
        {currentDisplayfood.map((food) => (
          <Currentfood key={food.key} foods={food}></Currentfood>
        ))}
      </div>
    </div>
  );
};

export default Foodmenu;
