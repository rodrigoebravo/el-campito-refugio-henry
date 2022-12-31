import React from "react";
import styles from "./Footer.module.css"
import logoFooter from "../../img/icons/logoFooter.svg"

import { TiLocation  } from "react-icons/ti";


const Footer = () => {
    return (
        <div >
        <footer>
        <div className={styles.footerContainer}>
            <img src={logoFooter}  className={styles.imgFooter} alt="Logo carita de perro del campito"/>
            <div>
                <div className={styles.infoContainer}>
                <TiLocation />
                    <p className={styles.pFooter}>Estamos en Esteban Echeverr&iacute;a, Argentina</p>
               </div>
               <div className={styles.infoContainer}>
                   <h4>#ADOPTANOCOMPRES</h4>
               </div>
            </div>
            <div className={styles.redes}>
                <h4 className={styles.h4Footer}>¡Seguinos!</h4>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-youtube"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-linkedin"></i>
                <i class="fa-brands fa-tiktok"></i>
            </div>
        </div>
        <p className={styles.derechos}>El Campito Refugio. Todos los derechos reservados.</p>
    </footer>
        </div>
      );
    };

export default Footer;