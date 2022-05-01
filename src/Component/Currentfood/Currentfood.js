import React from "react";
import styles from "./Currentfood.module.css";
import { Link } from "react-router-dom";

const Currentfood = (props) => {
  const { foodName, detail, prise, key, photo } = props.foods;
  // console.log(photo);

  return (
    <>
      <Link to={"/food/"+key}>
        <section className={styles.foodCard}>
          <div className={styles.cardImageDiv}>
            <img src={photo} className={styles.cardImgTop} alt="food" />
          </div>
          <div
            className={styles.cardBody}
            style={{ backgroundColor: "white", borderTop: "none" }}
          >
            <h4 className={styles.cardTitle}>{foodName}</h4>
            <p className={styles.cardDetail}>{detail}</p>
            <h3 className={styles.price}>${prise}</h3>
          </div>
        </section>
      </Link>
    </>
  );
};

export default Currentfood;
