import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Checkout.module.css';
import { useHistory, useLocation } from "react-router-dom";

const Chectout = () => {
    const location = useLocation();
    return (
        <div className={styles.checkoutButtonSection}>
            {
                location.pathname !== "/checkout" && <><Link to="/checkout"> <button className={styles.checkoutButton}>Checkout Your Food</button> </Link></>
            }
      </div>
    );
};

export default Chectout;