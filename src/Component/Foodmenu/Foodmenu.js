import React, { useState } from 'react';
import fakefoodMenu from '../../fakedata/Fakefood'
import Currentfood from '../Currentfood/Currentfood';
import './Foodmenu.css'
import '../Header/Header.css'
import { Link } from 'react-router-dom';

const Foodmenu = () => {
    const allLunch = fakefoodMenu.filter(fakefood => fakefood.category === "lunch");
    const lunchmenu = allLunch.slice(0, 6);
    const [currentfood, setCurrentfood] = useState(lunchmenu);


    const filteringFood = (food) =>{
        const allmenu = fakefoodMenu.filter(fakefood => fakefood.category === food);
        const foodmenu = allmenu.slice(0, 6);
        setCurrentfood(foodmenu);
    }
    

    const breakfast = () =>{

        // const allBreakfast = fakefoodMenu.filter(fakefood => fakefood.category === "breakfast");
        // const breakfastmenu = allBreakfast.slice(0, 6);
        // setCurrentfood(breakfastmenu);
       
        const breakfast = "breakfast";
        filteringFood(breakfast); 
    }
    const lunch = () =>{
        // setCurrentfood(lunchmenu);
        
        const lunch = "lunch";
        filteringFood(lunch);
    }

    const dinner = () =>{
        // const alldinner = fakefoodMenu.filter(fakefood => fakefood.category === "dinner");
        // const dinnermenu = alldinner.slice(0, 6);
        // setCurrentfood(dinnermenu);

        const dinner = "dinner";
        filteringFood(dinner);
        
    }
    return (
        
        <div>
            <div className="food-list-ancor">
                <button onClick={breakfast}>Breakfirst</button>
                <button onClick={lunch}>Lunch</button>
                <button onClick={dinner}>dinner</button>
            </div>


            {currentfood.map(foods => <Currentfood key = {foods.key} foods = {foods}></Currentfood>)}


            <div className = "checkoutButton-section">
                <Link to = "checkout">
                    <button className = "redButton">Checkout Your Food</button>
                </Link>
            </div>
        </div>
    );
};

export default Foodmenu;