import React, { useState } from 'react';
import '../Header/Header.css'
import './Food.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { addToDatabaseCart } from '../../utilities/databaseManager';

const Food = (props) => {
    const { foodName, detail, prise, key, url } = props.food;
    const [count, setCount] = useState(1);


    const minusFood = () =>{
        if(count > 0){
            setCount(count - 1);
        }
    }

    const addFood = () =>{
        setCount(count + 1);
    }



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
    const handleAddFood = () =>{
        const toBeAddKey = props.food.key;
        props.food.quantity = count;

        // this is function for store data in local and section storage.
        addToDatabaseCart(toBeAddKey, count);
    }

    const foodPrise = prise * count;
        
    
    

    
    return (
        <div>
            <section className = "foodDetail-sectain">
            <div className = "foodDetail-left">
                <h2>{foodName}</h2>
                <small>{detail}</small>
                
                <div>
                    <strong  className="prise">${foodPrise} </strong>
                    <div className="plassMinus-button">
                        <button onClick={minusFood}>-</button> {count} <button onClick={addFood}>+</button>
                    </div>
                    
                </div>
                
                
                {
                    count > 0 ? <Link to = "currentfood"> <button onClick={handleAddFood}  className="redButton"><FontAwesomeIcon icon={faShoppingCart} /> Add</button> </Link> : <button className="black-button"><FontAwesomeIcon icon={faShoppingCart} /> Add</button>
                }
                
                
                
            </div>

            <div className = "foodDetail-img">
                <img src={url} alt=""/>
            </div>
            </section>
        </div>
    );
};

export default Food;