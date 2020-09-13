import React from "react";
import BikeCard from "./bikecard.jpeg";
import styles from "./components.module.css";

function Cards() {
  return (
    <div className={styles.maindiv}>
      <h1> MORE LIKE THIS </h1>
      <div className={styles.cardDiv}>
        <img height={220} src={BikeCard} alt="bike" />
        <div className={styles.cardContent}>
          <h2>Top ten roads to try before you die</h2>
          <p>
            Remember though , that if you do buy new gear break it in before the
            jurney so that no comfor or compability issues hamper your riding
            enjoyment Remember though , that if you do buy new gear break it in
            before the jurney so that no comfor or compability issues hamper
            your riding enjoyment. Remember though , that if you do buy new gear
            break it in before the jurney so that no comfor or compability
            issues hamper your riding enjoyment.
          </p>
        </div>
      </div>
      <br />

      <div className={styles.cardDiv}>
        <img height={220} src={BikeCard} alt="bike" />
        <div className={styles.cardContent}>
          <h2>Top ten roads to try before you die</h2>
          <p>
            Remember though , that if you do buy new gear break it in before the
            jurney so that no comfor or compability issues hamper your riding
            enjoyment Remember though , that if you do buy new gear break it in
            before the jurney so that no comfor or compability issues hamper
            your riding enjoyment. Remember though , that if you do buy new gear
            break it in before the jurney so that no comfor or compability
            issues hamper your riding enjoyment.
          </p>
        </div>
      </div>
      <br />

      <div className={styles.cardDiv}>
        <img height={220} src={BikeCard} alt="bike" />
        <div className={styles.cardContent}>
          <h2>Top ten roads to try before you die</h2>
          <p>
            Remember though , that if you do buy new gear break it in before the
            jurney so that no comfor or compability issues hamper your riding
            enjoyment Remember though , that if you do buy new gear break it in
            before the jurney so that no comfor or compability issues hamper
            your riding enjoyment. Remember though , that if you do buy new gear
            break it in before the jurney so that no comfor or compability
            issues hamper your riding enjoyment.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
