import React from 'react';
import './AddFood.css';
var food =[
    {
        key: "b1",
        foodName : "Breakfast-1",
        detail:"How we dream about our future",
        prise:23.99,
        category: "breakfast",
        photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz4jnUmrYrkmS2-rEsTwD24J4G9fMsFyUzUQ&usqp=CAU"
    },
    {
        key: "b2",
        foodName : "Breakfast-2",
        detail:"How we dream about our future",
        prise:9.99,
        category: "breakfast",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHOUIc_jwA7-4kAsZyDzs3S4OMoUQdVQiEcQ&usqp=CAU"
    },
    {
        key: "b3",
        foodName : "Breakfast-3",
        detail:"How we dream about our future",
        prise:6.99,
        category: "breakfast",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLG6o08GDpiJR7yygL9WQz-OjW7rAatgjxZgCsVjioVzKddpYpkgIzikEAj08iIMPnfxc&usqp=CAU"
    },
    {
        key: "b4",
        foodName : "Breakfast-4",
        detail:"How we dream about our future",
        prise:8.99,
        category: "breakfast",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs4ISyk42oCHb0M-CqEiqBEY4wIGXsVjtK5k_QXZFh8BSAGjuQnvyXWHiSpZ1qVDrzsr4&usqp=CAU"
    },
    {
        key: "b5",
        foodName : "Breakfast-5",
        detail:"How we dream about our future",
        prise:15.99,
        category: "breakfast",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTatn9TUhs1TxOD4oLNxLuHQUv7of09PJBVcQ&usqp=CAU"
    },
    {
        key: "b6",
        foodName : "Breakfast-6",
        detail:"How we dream about our future",
        prise:7.99,
        category: "breakfast",
        photo: "https://www.pngitem.com/pimgs/m/631-6317637_breakfast-plate-food-freetoedit-breakfast-hd-png-download.png"
    },

    {
        key: "l1",
        foodName : "lunch-1",
        detail:"How we dream about our future",
        prise:8.99,
        category: "lunch",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsb74Q6Tjsr23e_6Voge6grl8zw8LVmTOnOg&usqp=CAU"
    },
    {
        key: "l2",
        foodName : "lunch-2",
        detail:"How we dream about our future",
        prise:15.99,
        category: "lunch",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuoDvAY_Ajk-tKJ5n2KKE_b9YDOi_SpCPYRQ&usqp=CAU"
    },
    {
        key: "l3",
        foodName : "lunch-3",
        detail:"How we dream about our future",
        prise:7.99,
        category: "lunch",
        photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa1UhX1FXifTGgGu4wyL5MTrljs3nQzpgkqQ&usqp=CAU"
    },
    {
        key: "l4",
        foodName : "Healthy Meal Pllan",
        detail:"How we dream about our future",
        prise:23.99,
        category: "lunch",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT53fOMp19TKedx8cFx0WRrnvHpiNyl0mOu6g&usqp=CAU"
    },
    {
        key: "l5",
        foodName : "Fried Chicken Bento",
        detail:"How we dream about our future",
        prise:9.99,
        category: "lunch",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ1AtFyaxuPHNUOQTTQFZHlOn7wm5wilLNbA&usqp=CAU"
    },
    {
        key: "l6",
        foodName : "Tarragon-Rubbed-Salmon",
        detail:"How we dream about our future",
        prise:6.99,
        category: "lunch",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtOpqo_WXtGj-4Pgo5laqcDyJpYeNC70VMEg&usqp=CAU"
    },

    {
        key: "d1",
        foodName : "Dinner-1",
        detail:"How we dream about our future",
        prise:8.99,
        category: "dinner",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW6FdOF4Lul6bblEJyorWDKx4JXe9ipsyUsw&usqp=CAU"
    },
    {
        key: "d2",
        foodName : "Dinner-2",
        detail:"How we dream about our future",
        prise:15.99,
        category: "dinner",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREu8NfiE_LSfcymyyEBhTWMimn_EX_5NAegw&usqp=CAU"
    },
    {
        key: "d3",
        foodName : "Honey-Soy-Glazed Salmon with Peppers",
        detail:"How we dream about our future",
        prise:7.99,
        category: "dinner",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKl9AUAF0uZaPQpZ5lxI8Hwc2mBHUp1SWKFA&usqp=CAU"
    },
    {
        key: "d4",
        foodName : "Dinner-4",
        detail:"How we dream about our future",
        prise:23.99,
        category: "dinner",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLYarPO4KVhL5zwYZ-NmbIV8x6YfBbAFCmHA&usqp=CAU"
    },
    {
        key: "d5",
        foodName : "Dinner-5",
        detail:"How we dream about our future",
        prise:9.99,
        category: "dinner",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZZ0rnzuNyqASR4PmR9JY-6Zca-6UtR0_X3A&usqp=CAU"
    },
    {
        key: "d6",
        foodName : "Dinner-6",
        detail:"How we dream about our future",
        prise:6.99,
        category: "dinner",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRnfsZKhsBgVOPbb-phQbZcFE9e2PdaCI5NQ&usqp=CAU"
    },
]; 

const AddFood = () => {

    const AddFoods = () => {
        // console.log("clicked");
        fetch('http://localhost:5000/addFood', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(food[17]),
        })
        // .then(res => res.json())
        // .then(data => console.log(data))
    }

    return (
        <div>
            <button onClick="">add food</button>
        </div>
    );
};

export default AddFood;