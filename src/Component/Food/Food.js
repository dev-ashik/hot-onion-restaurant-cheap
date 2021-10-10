import React, { useState } from "react";
// import '../Header/Header.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { addToDatabaseCart } from "../../utilities/databaseManager";
import styles from "./Food.module.css";

const Food = (props) => {
  const { foodName, detail, prise, id, photo } = props.food;
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
    const toBeAddKey = props.food.key;
    props.food.quantity = count;

    // this is function for store data in local and section storage.
    addToDatabaseCart(toBeAddKey, count);
  };

  const foodPrise = prise * count;

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
          <Link to="currentfood">
            {" "}
            <button onClick={handleAddFood} className={styles.addButton}>
              <FontAwesomeIcon icon={faShoppingCart} /> Add
            </button>{" "}
          </Link>
        ) : (
          <button className={styles.noneButton}>
            <FontAwesomeIcon icon={faShoppingCart} /> Add
          </button>
        )}
      </div>

      <div className={styles.foodDetailImg}>
        <img src={photo} alt="food photo" height="400" width="400" />
      </div>
    </div>
  );
};

export default Food;
