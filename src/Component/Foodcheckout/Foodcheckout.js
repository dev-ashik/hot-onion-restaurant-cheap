import React, { useEffect, useState } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import fakefoodMenu from '../../fakedata/Fakefood';

import Userdetails from '../Userdetails/Userdetails';
import './Foodcheckout.css'
import Finalreview from '../Finalreview/Finalreview';

const Foodcheckout = () => {
    const [checkoutCart, setCheckoutcart] = useState([]);
    

    useEffect(() =>{
        // database
        const saveData = getDatabaseCart();

        const foodKeys = Object.keys(saveData);
        const orderedFood = foodKeys.map( key =>{
            const food = fakefoodMenu.find(fd => fd.key == key);
            food.quantity = saveData[key];
            return food;
        });

        setCheckoutcart(orderedFood);
    },[])

    return (
        <div className="review">

            <div className="review-leftSide">
                <Userdetails></Userdetails>
            </div>

            <div className="review-rightSide">
                <span>From <strong>Gulshan Plaza Restaura GPA</strong></span>
                <h6>Arriving in 20-30 min</h6>
                <h6>Road</h6>

                {
                    checkoutCart.map( food => <Finalreview food = {food}></Finalreview>)
                }

                <h6>subtotal. item</h6>
                <h6>Tax</h6>
                <h6>Delivery fee $2</h6>
                <button>place Order</button>
            </div>
            
        </div>
    );
};

export default Foodcheckout;