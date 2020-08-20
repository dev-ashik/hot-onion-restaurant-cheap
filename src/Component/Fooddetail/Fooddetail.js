import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import fakefoodMenu from '../../fakedata/Fakefood';
import Food from '../Food/Food';
import { findDOMNode } from 'react-dom';

const Fooddetail = () => {
    let {foodKey} = useParams();
    const found = fakefoodMenu.find(element => element.key == foodKey);

    
    return (
        <div>
            <Food food = {found} ></Food>
        </div>
    );
};

export default Fooddetail;