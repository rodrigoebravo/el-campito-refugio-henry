import React from "react";
import styles from "./Footer.module.css";
import logoFooter from "../../assets/img/icons/logoFooter.svg";

import { TiLocation } from "react-icons/ti";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className={styles.footerContainer}>
          <img
            src={logoFooter}
            className={styles.imgFooter}
            alt="Logo carita de perro del campito"
          />
          <div>
            <div className={styles.infoContainer}>
              <TiLocation className={styles.iFooter} />
              <p className={styles.pFooter}>
                Estamos en Esteban Echeverr&iacute;a, Argentina
              </p>
            </div>
            <div className={styles.infoContainer}>
              <h4>#ADOPTANOCOMPRES</h4>
            </div>
          </div>
          <div className={styles.redes}>
            <h4 className={styles.h4Footer}>¡Seguinos!</h4>
            <a
              target="_blank"
              href="https://www.instagram.com/refugioelcampito/"
              rel="noreferrer"
            >
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://www.facebook.com/elcampitorefugio"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a
              href="https://www.youtube.com/@campitorefugio"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-youtube"></i>
            </a>
            <a
              href="https://twitter.com/elcampito"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-twitter"></i>
            </a>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-tiktok"></i>
          </div>
        </div>
        <p className={styles.derechos}>
          El Campito Refugio. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
