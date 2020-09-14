import React from "react";
import styles from "./boxes.module.css";
import Bike from "./bike.jpg";

function Boxes() {
  return (
    <div className={styles.mainboxes}>
      <div className={styles.boxes}>
        <img height={200} src={Bike} alt="bike" />
        <div className={styles.innertext}>
          <h1> BOx one </h1>
          <p>
            sakdsd fdsfsd fdsf sdfd fdsf fassaf asfsa fsaf afsa fas fas fsa fas
            sa fsaf saf sf sf af asf asf sdf sdf df sdfsd fsd f dsf df dsf
          </p>
        </div>
      </div>
      <div className={styles.boxes}>
        <img height={200} src={Bike} alt="bike" />
        <div className={styles.innertext}>
          <h1> BOx two </h1>
          <p>
            sakdsd fdsfsd fdsf sdfd fdsf fassaf asfsa fsaf afsa fas fas fsa fas
            sa fsaf saf sf sf af asf asf sdf sdf df sdfsd fsd f dsf df dsf
          </p>
        </div>
      </div>
      <div className={styles.boxes}>
        <img height={200} src={Bike} alt="bike" />
        <div className={styles.innertext}>
          <h1> BOx three </h1>
          <p>
            sakdsd fdsfsd fdsf sdfd fdsf fassaf asfsa fsaf afsa fas fas fsa fas
            sa fsaf saf sf sf af asf asf sdf sdf df sdfsd fsd f dsf df dsf
          </p>
        </div>
      </div>
    </div>
  );
}

export default Boxes;
