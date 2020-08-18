import React from 'react';
import { useParams } from 'react-router-dom';
import fakefoodMenu from '../../fakedata/Fakefood';
import Food from '../Food/Food';

const Fooddetail = () => {
    let {foodKey} = useParams();
    console.log(foodKey);

    fakefoodMenu.find( (fd) => console.log(fd.key));
    const found = fakefoodMenu.find(element => element.key == foodKey);

    return (
        <div>
            <h2>{foodKey}Food detail</h2>
            <Food food = {found}></Food>
        </div>
    );
};

export default Fooddetail;