import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BarraDeNavegacion from "../../BarraDeNavegacion/BarraDeNavegacion";
import Footer from "../../Footer/Footer";
import { getPress } from "../../../../redux/actions/action";
import styles from "./PrensaTelevision.module.css";

import CardPrensaTelevision from "./CardPrensaTelevision";

const PrensaGrafica = () => {
  const press = useSelector((state) => state.press);
  const pressTelevision = press.filter(
    (el) => el.type === "Televisión / Audiovisual"
  );
  console.log(pressTelevision);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPress());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <BarraDeNavegacion />
      <h2 className={styles.h2PrensaTele}>Prensa Television</h2>
      <div className={styles.card}>
        {pressTelevision?.map((el) => {
          return (
            <CardPrensaTelevision
              key={el._id}
              link={el.link}
              media={el.media}
              logo={el.favicon}
              title={el.title}
              description={el.description}
            />
          );
        })}
      </div>
      <div className={styles.footerTelevision}>
        <Footer />
      </div>
    </div>
  );
};
export default PrensaGrafica;
