import React from "react";
import styles from "./IconsBar.module.css"
import ig from "../../img/icons/IG.svg"
import fb from "../../img/icons/FB.svg"
import yt from "../../img/icons/YT.svg"
import tw from "../../img/icons/TW.svg"
import lnk from "../../img/icons/LNK.svg"
import tiktok from "../../img/icons/TIKTOK.svg"
import cafecito from "../../img/icons/CAFECITO.svg"

const IconsBar = () =>{
    return(
        <div className={styles.mainContainer}>
            <img className={styles.icons} src={cafecito} alt="cafecito" />
            <img className={styles.icons} src={tiktok} alt="tiktok" />
            <img className={styles.icons} src={lnk} alt="linkedin" />
            <img className={styles.icons} src={tw} alt="twitter" />
            <img className={styles.icons} src={yt} alt="youtube" />
            <img className={styles.icons} src={fb} alt="facebook" />
            <img className={styles.icons} src={ig} alt="instagram" />
        </div>
    )
}

export default IconsBar;