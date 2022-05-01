import React, {useState} from 'react';
import fakefoodMenu from '../../fakedata/Fakefood';
import styles from "./Menu.module.css"

const Menu = ({setCurrentDisplayfood, foodCategory, setFoodCategory, selectedFood}) => {
    
//   const [foodCategory, setfoodCategory] = useState("lunch");
//   const [foodId, setFoodId] = useState("");
//   const allLunch = fakefoodMenu.filter(
//     (fakefood) => fakefood.category === foodCategory
//   );
//   const lunchMenu = allLunch.slice(0, 6);
//   const [currentfood, setCurrentfood] = useState(lunchMenu);

  
    return (
        <div>
            <div className={styles.foodListAncor}>
        {foodCategory === "breakfast" ? (
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
        {foodCategory === "lunch" ? (
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
        {foodCategory === "dinner" ? (
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
        </div>
    );
};

export default Menu;