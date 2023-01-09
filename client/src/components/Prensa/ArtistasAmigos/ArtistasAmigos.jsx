import React from "react";

import BarraDeNavegacion from "../../BarraDeNavegacion/BarraDeNavegacion";
import Footer from "../../Footer/Footer";

import styles from "./ArtistasAmigos.module.css";

import press from "./prensa.json";
const ArtistasAmigos = () => {
  return (
    <div className={styles.container}>
      <BarraDeNavegacion />
      <div className={styles.amigosInfo}>
      <h2 className={styles.h2PrensaAmigos}>Artistas Amigos</h2>
      <div className={styles.card}>
        {press?.map((el) => {
          return (
            <iframe
            title="artistaAmigos"
              src={el.link}
              className={styles.iframePrensaAmigos}
            ></iframe>
          );
        })}
      </div>
      </div>
      <Footer />
    </div>
  );
};
export default ArtistasAmigos;
