import React from "react";
import styles from "./CardPrensaGrafica.module.css"
import { FcLeave, FcNews } from  "react-icons/fc";

const CardPrensaGrafica = ({ img, media, date, title, description, link }) => {
  
  const desc = description.slice(0,100);
  return (
    <div className={styles.cardSize} >
     <a href={link} className={styles.aPrensa}> <h3 className={styles.h3CardPress}>{title}</h3></a>
     <img alt="prensaGrafica"className={styles.imgCardPress} src={img}/>
     <p className={styles.pCardPress}>{desc}</p>
     <div className={styles.prensaGraficaIcons}>
       <p className={styles.pCardPress}><span className={styles.spanCardPress}><FcNews/> {media}</span></p>
      <p className={styles.pCardPress}><span className={styles.spanCardPress}> <FcLeave/> {date.slice(0,10)}</span></p>
     </div>
    </div>
  );
};

export default CardPrensaGrafica;