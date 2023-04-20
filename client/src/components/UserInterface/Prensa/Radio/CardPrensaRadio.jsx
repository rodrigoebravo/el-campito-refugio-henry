import React from "react";
import styles from "./CardPrensaRadio.module.css"
import { FcPlanner,FcSpeaker} from  "react-icons/fc";

const CardPrensaTelevision = ({ link, logo,media,title, date }) => {
  
  return (
    <div className={styles.cardSize} >
    
    <div className={styles.prensaTeleContenedor}>
     <img alt="logoprensa"src={logo} className={styles.imgLogoTele}/>
      <p className={styles.pCardPress}><FcSpeaker/><span>{media}</span></p>
      <h3 className={styles.h3CardPress}>{title}</h3>
       <p className={styles.pCardPress}><FcPlanner/>{date.slice(0,10)}</p>
     </div>
    </div>
  );
};

export default CardPrensaTelevision;