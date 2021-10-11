import {style} from 'dom-helpers';
import React from 'react';
import styles from './ChooseCard.module.css';

const ChooseCard = ({data}) => {
    const {photo, icon, title, description} = data;
    return (
        <div className={styles.card}>
            <img className={styles.bigImage} src={photo} alt="main photo" height="100" width="100" />
            <div className={styles.cardBody}>
                <div>
                    <img className={styles.icon} src={icon} alt="icon" height="20" width="20"/>
                </div>
                <div>
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <div>
                    <button className={styles.seeMoreButton}>See more</button>
                        {/* <img src={more} alt="more" height="10" width="10"/> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseCard;