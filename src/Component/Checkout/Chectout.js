import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Checkout.module.css';

const Chectout = () => {
    return (
        <div className={styles.checkoutButtonSection}>
        <Link to="/checkout">
            <button className={styles.checkoutButton}>Checkout Your Food</button>
        </Link>
      </div>
    );
};

export default Chectout;