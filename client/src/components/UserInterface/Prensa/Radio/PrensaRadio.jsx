import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BarraDeNavegacion from "../../BarraDeNavegacion/BarraDeNavegacion";
import Footer from "../../Footer/Footer";
import { getPress } from "../../../../redux/actions/action";

import styles from "./PrensaRadio.module.css";
import CardPrensaRadio from "./CardPrensaRadio";

const PrensaRadio = () => {
  const press = useSelector((state) => state.press);  
const pressRadio = press.filter(el=> el.type==="Radio / Audio")

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPress());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <BarraDeNavegacion />
      <h2 className={styles.h2PrensaRadio}>Prensa Radio</h2>
      <div className={styles.card}>
        {pressRadio?.map((el) => {
          return (
            <CardPrensaRadio
              key={el._id}
              link={el.link}
              media={el.media}
              logo={el.favicon}
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
