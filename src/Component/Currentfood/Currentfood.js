import React from "react";
import styles from "./Currentfood.module.css";
import { Link } from "react-router-dom";

const Currentfood = (props) => {
  const { foodName, detail, prise, id, photo } = props.foods;
  // console.log(photo);

  return (
    <>
      <Link to={"/food/" + id}>
        <section className={styles.foodCard}>
          <div className={styles.cardImageDiv}>
            <img src={photo} className={styles.cardImgTop} alt="food" />
          </div>
          <div
            className={styles.cardBody}
            style={{ backgroundColor: "white", borderTop: "none" }}
          >
            <h3 className={styles.cardTitle}>{foodName}</h3>
            <p className={styles.cardDetail}>{detail}</p>
            <h2>${prise}</h2>
          </div>
        </section>
      </Link>
    </>
  );
};

export default Currentfood;
