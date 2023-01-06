import React from "react";
import check from "../../assets/img/icons/check.gif";
// import { Link } from "react-router-dom";
import styles from "./Pay.module.css"
const Pay = () => {
  // function goHome() {
  //   window.location = process.env.FRONT || "http://localhost:3000/";
  // }
  // setTimeout(goHome, 3000);

  
  return (
    <div className={styles.div}>
      <div className={styles.div2} >
        <h2>Pago realizado</h2>

        <img src={check} alt="check" />

        {/* <Link to="/">home</Link> */}
      </div>
    </div>
  );
};

export default Pay;
