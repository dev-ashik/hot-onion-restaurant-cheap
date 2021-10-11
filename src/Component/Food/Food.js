import React, { useState } from "react";
// import '../Header/Header.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { addToDatabaseCart } from "../../utilities/databaseManager";
import styles from "./Food.module.css";

const Food = (props) => {
  const { foodName, detail, prise, id, photo } = props.food;
  const restFood = props.restFood;
  const towRestFd = restFood.slice(0, 2)
  const [towRestFood, setTowRestFood] = useState(towRestFd)
//   console.log(restFood);
  const [count, setCount] = useState(1);

  const minusFood = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const addFood = () => {
    setCount(count + 1);
  };

  // const [cart, setCart] = useState([])
  // const handleAddFood = (food) =>{
  //     const toBeAddKey = food.key
  //     const sameProduct = cart.find(fd => fd.key == toBeAddKey);
  //     let count = 1;
  //     let newCart;
  //     if(sameProduct){
  //         count = sameProduct.quantity + 1;
  //         sameProduct.quantity = count;
  //         const others = cart.filter(fd => fd.key != toBeAddKey);
  //         newCart = [...others, sameProduct]
  //     }
  //     else{
  //         food.quantity = 1;
  //         newCart = [...cart, food]
  //     }
  // setCart(newCart);
  // }

  // const [cart, setCart] = useState([]);
  const handleAddFood = () => {
    const toBeAddKey = props.food.id;
    props.food.quantity = count; // add a new property quantity

    // this is function for store data in local and section storage.
    addToDatabaseCart(toBeAddKey, count);
  };

  const foodPrise = (prise * count).toFixed(2);

  return (
    <div className={styles.foodDetailSectain}>
      <div className={styles.foodDetailLeft}>
        <h2>{foodName}</h2>
        <p>{detail}</p>
        <div className={styles.countDiv}>
          <h3 className={styles.prise}>${foodPrise} </h3>
          <div className={styles.plassMinusButton}>
            <button onClick={minusFood} className={styles.minusButton}> - </button> {count}{" "}
            <button onClick={addFood} className={styles.minusButton}> + </button>
          </div>
        </div>
        {count > 0 ? (
          <>
            {" "}
            <button onClick={handleAddFood} className={styles.addButton}>
              <FontAwesomeIcon icon={faShoppingCart} /> Add
            </button>{" "}
          </>
        ) : (
          <button className={styles.noneButton}>
            <FontAwesomeIcon icon={faShoppingCart} /> Add
          </button>
        )}

        <div className={styles.restFood}>
            {
                towRestFood.map(fd => <img  src={fd.photo} className={styles.restFoodPhoto} alt="rest food" height="130" width="130"/>)
            }
            
        </div>
      </div>

      <div className={styles.foodDetailImg}>
        <img src={photo} alt="food photo" height="400" width="400" />
      </div>
    </div>
  );
};

export default Food;
