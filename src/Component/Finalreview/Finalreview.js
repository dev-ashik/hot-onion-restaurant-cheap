import React, {useEffect, useState} from 'react';
import styles from './Finalreview.module.css';
import { addToDatabaseCart, removeFromDatabaseCart } from "../../utilities/databaseManager";

const Finalreview = (props) => {
    const { id, foodName, detail, prise, quantity, photo } = props.food;
    // console.log(props)
    const [fQuantity, setFQuantity] = useState(quantity);

    const minusQuantity = (id) =>{
        fQuantity > 0 && setFQuantity(fQuantity-1);
        // newQuantitiy(id);
    }

    const plassQuantity = (id) =>{
        setFQuantity(fQuantity+1);
        // addToDatabaseCart(id, fQuantity);
        // newQuantitiy(id);
    }

    // const newQuantitiy = (id) =>{
    //     let count = 0;
    //     if(fQuantity > 1){
    //         count = fQuantity-1;
    //     }
    //     count === 0 ? removeFromDatabaseCart(id) : addToDatabaseCart(id, count);
    //     console.log(count);
    // }

    useEffect(()=>{
        fQuantity === 0 ? removeFromDatabaseCart(id) : addToDatabaseCart(id, fQuantity);
    },[fQuantity])

    const foodPrise = (prise * quantity).toFixed(2);
    return (
        <div className={styles.Finalreview}>
            <div className={styles.FinalreviewImg}>
                <img src={photo} alt="" height= "70" width= "70"/>
            </div>
            <div className={styles.FinalreviewDetail}>
                <h6>{foodName}</h6>
                <strong className={styles.foodPrise}>${foodPrise}</strong><br/>
                <small>Delvery free</small>
            </div>
            <div className={styles.FinalreviewTwoButton}>
                <button onClick={()=>minusQuantity(id)} className={styles.finalreviewPlussMinusButton}>-</button><strong>{fQuantity}</strong><button onClick={()=>plassQuantity(id)} className={styles.finalreviewPlussMinusButton}>+</button>
            </div>
        </div>
    );
};

export default Finalreview;