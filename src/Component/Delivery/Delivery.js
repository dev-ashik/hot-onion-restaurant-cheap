import React from "react";
import styles from "./Delivery.module.css";
import map from "../../images/Image/map.png";
import bike from "../../images/Image/bike.png";
import helmet from "../../images/Image/helmet.png";

const Delivery = () => {
  return (
    <>
      <div className={styles.delivery}>
        <div>
          <img
            className={styles.mapImage}
            src={map}
            alt="map"
            width="300"
            height="300"
          />
        </div>
        <div className={styles.contactArea}>
          <img
            className={styles.bike}
            src={bike}
            alt="bike"
            height="50"
            width="50"
          />
          <div className={styles.location}>
            <div className={styles.locationTo}>
              <p>Your Location</p>
              <small>107 Rd No 8</small>
            </div>
            <div className={styles.locationFrom}>
              <p>Shop Address</p>
              <small>Gulshan Plaza Restaura GPA</small>
            </div>
          </div>
          <div className={styles.timeSection}>
            <h2>09:30</h2>
            <p>Estimated delivery time</p>
          </div>
          <div className={styles.location}>
            <div>
              <img src={helmet} alt="helmet" height="50" width="50" />
            </div>
            <div>
              <h3>Hamim</h3>
              <p>Your raider</p>
            </div>
          </div>
          <div className={styles.contactButton}>
            <button>Contact</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Delivery;
