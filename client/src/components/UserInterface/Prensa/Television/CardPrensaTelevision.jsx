import React from "react";
import styles from "./CardPrensaTelevision.module.css";
import { FcCamcorderPro } from "react-icons/fc";

const CardPrensaTelevision = ({ link, logo, media, title, description }) => {
  return (
    <div className={styles.cardSize}>
      <iframe title="cardPrensa" src={link}>
        {" "}
      </iframe>
      <div className={styles.prensaTeleContenedor}>
        <img alt="logoprensa" src={logo} className={styles.imgLogoTele} />
        <p className={styles.pCardPress}>
          <FcCamcorderPro />
          {media}
        </p>
        <h3 className={styles.h3CardPress}>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CardPrensaTelevision;
