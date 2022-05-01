import React, { useContext, useEffect, useState } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import Userdetails from '../Userdetails/Userdetails';
import styles from './Foodcheckout.module.css'
import Finalreview from '../Finalreview/Finalreview';
import { userContext } from '../../App';


const Foodcheckout = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [checkoutCart, setCheckoutcart] = useState([]);
    const [orderInfo, setOrderInfo] = useState(null)
    const [shipmentInfo, setShipmentInfo] = useState(null)
    // console.log(checkoutCart);

    const databaseSaveData = getDatabaseCart();
    

    useEffect(() =>{
        const foodKeys = Object.keys(databaseSaveData);

        // const orderedFood = foodKeys.map( foodKey =>{
        //     const food = fakefoodMenu.find(fd => fd.key === foodKey);
        //     food.quantity = databaseSaveData[foodKey]
        //     return food;
        // });

        fetch('http://localhost:5000/foodsByKey', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(foodKeys),
            })
        .then((response) => response.json())
        .then((foods) => setCheckoutcart(foods));
    },[])

    const AddOrders = () => {
        setOrderInfo(databaseSaveData);
        console.log("product", databaseSaveData);
    }

    const handlePlaceOrder = () => {
        const orderDetails = {
            ... loggedInUser,
            products: orderInfo,
            shipment: shipmentInfo
        }

        console.log(orderDetails);
    }

    return (
        <div className={styles.review}>
            <div style={{display: orderInfo ? "block" : "none"}} className={styles.reviewLeftSide}>
                <Userdetails shipmentInfo={setShipmentInfo}/>
            </div>

            <div style={{display: orderInfo ? "none" : "block"}} className={styles.reviewRightSide}>
                <span>From <strong>Gulshan Plaza Restaura GPA</strong></span>
                <h6>Arriving in 20-30 min</h6>
                <h6>Road</h6>

                {
                    checkoutCart.map( food => <Finalreview food = {food}></Finalreview>)
                }

                <h6>subtotal. item</h6>
                <h6>Tax</h6>
                <h6>Delivery fee $2</h6>
                <button onClick={AddOrders} className={styles.placeOrder}>place Order</button>
            </div>
                <button onClick={handlePlaceOrder}>handlePlaceOrder</button>
        </div>
    );
};

export default Foodcheckout;