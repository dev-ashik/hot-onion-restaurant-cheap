import React, { useEffect, useState } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import fakefoodMenu from '../../fakedata/Fakefood';

import Userdetails from '../Userdetails/Userdetails';
import styles from './Foodcheckout.module.css'
import Finalreview from '../Finalreview/Finalreview';
import {Link} from 'react-router-dom';

const Foodcheckout = () => {
    const [checkoutCart, setCheckoutcart] = useState([]);
    console.log(checkoutCart);

    useEffect(() =>{
        // database
        const databaseSaveData = getDatabaseCart();
        console.log(databaseSaveData);

        const foodKeys = Object.keys(databaseSaveData);
        const orderedFood = foodKeys.map( key =>{
            const food = fakefoodMenu.find(fd => fd.id === key);
            food.quantity = databaseSaveData[key]
            return food;
        });

        setCheckoutcart(orderedFood);
    },[])


    return (
        <div className={styles.review}>
          {/* <div className={styles.reviewMiddleDiv}> */}
            <div className={styles.reviewLeftSide}>
                <Userdetails></Userdetails>
            </div>

            <div className={styles.reviewRightSide}>
                <span>From <strong>Gulshan Plaza Restaura GPA</strong></span>
                <h6>Arriving in 20-30 min</h6>
                <h6>Road</h6>

                {
                    checkoutCart.map( food => <Finalreview food = {food}></Finalreview>)
                }

                <h6>subtotal. item</h6>
                <h6>Tax</h6>
                <h6>Delivery fee $2</h6>
                <Link to="/delivery" className={styles.placeOrder}>place Order</Link>
            </div>
          {/* </div> */}
        </div>
    );
};

export default Foodcheckout;