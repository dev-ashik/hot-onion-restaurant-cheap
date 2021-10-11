import React from 'react';
import bus from '../../images/ICON/bus.png';
import foodTruck from '../../images/ICON/foodTruck.png';
import bell from '../../images/ICON/bell.png';
import choosePhoto1 from '../../images/Image/choosePhoto1.png';
import choosePhoto2 from '../../images/Image/choosePhoto2.png';
import choosePhoto3 from '../../images/Image/choosePhoto3.png';
import ChooseCard from '../ChooseCard/ChooseCard';
import styles from "./Choose.module.css";

const chooseData = [
    {
        photo: choosePhoto1,
        icon: bus,
        title: "Fast Delevery",
        description: "Keep your systems in sync with automated web hook dased notifications each time link is paid and how we dream about our future."
    },
    {
        photo: choosePhoto2,
        icon: foodTruck,
        title: "A Good Auto Responder",
        description: "Keep your systems in sync with automated web hook dased notifications each time link is paid and how we dream about our future."
    },
    {
        photo: choosePhoto3,
        icon: bell,
        title: "Home Delivery",
        description: "Keep your systems in sync with automated web hook dased notifications each time link is paid and how we dream about our future."
    },
]

const Choose = () => {
    return (
        <div className={styles.choose}>
            <div className={styles.chooseTopArea}>
                <h3>Why you choose us</h3>
                <p>Barton waited twenty always repair in within we do. An delighted offendingcuriosity my is dashwoods at. Boy prosperous increasing surrounded.</p>
            </div>
            <div className={styles.cards}>
                {
                    chooseData.map(data => <ChooseCard data={data}/>)
                }
            </div>
        </div>
    );
};

export default Choose;