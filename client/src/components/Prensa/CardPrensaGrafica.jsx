import React from "react";
import styles from "./CardPrensaGrafica.module.css"
import { FcLeave, FcNews } from  "react-icons/fc";

const CardPrensaGrafica = ({ img, media, date, title, description }) => {
  
  return (
    <div className={styles.cardSize} >
    
     <h3 className={styles.h3CardPress}>{title}</h3>
     <img className={styles.imgCardPress} src={img}/>
     <p className={styles.pCardPress}>{description}</p>
     <div>
       <p className={styles.pCardPress}><span className={styles.spanCardPress}><FcNews/> {media}</span></p>
      <p className={styles.pCardPress}><span className={styles.spanCardPress}> <FcLeave/> {date.slice(0,10)}</span></p>
     </div>
    </div>
  );
};

export default CardPrensaGrafica;