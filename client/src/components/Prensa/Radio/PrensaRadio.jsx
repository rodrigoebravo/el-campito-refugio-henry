import React from "react";

import BarraDeNavegacion from "../../BarraDeNavegacion/BarraDeNavegacion";
import Footer from "../../Footer/Footer";
import press from "./prensa.json";

import styles from "./PrensaRadio.module.css";
import CardPrensaRadio from "./CardPrensaRadio";

const PrensaRadio = () => {
  return (
    <div className={styles.container}>
      <BarraDeNavegacion />
      <h2 className={styles.h2PrensaRadio}>Prensa Radio</h2>
      <div className={styles.card}>
        {press?.map((el) => {
          return (
            <CardPrensaRadio
              key={el._id}
              link={el.link}
              media={el.media}
              logo={el.logo}
              title={el.title}
              date={el.date}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
};
export default PrensaRadio;
