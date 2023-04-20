import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPress } from "../../../../redux/actions/action";
import BarraDeNavegacion from "../../BarraDeNavegacion/BarraDeNavegacion";
import Footer from "../../Footer/Footer";
import CardPrensaGrafica from "./CardPrensaGrafica";
import styles from "./PrensaGrafica.module.css";



const PrensaGrafica = () => {
const press = useSelector((state) => state.press);  
const pressGrafica = press.filter(el=> el.type==="Prensa Gráfica")
//console.log(press)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPress());
  }, [dispatch]);
  return (
    <div className={styles.container}>
      <BarraDeNavegacion />
      <h2 className={styles.h2Prensa}>Prensa Grafica</h2>
      <div className={styles.card}>
        {pressGrafica?.map((el) => {
          return (
            <CardPrensaGrafica
              key={el._id}
              img={el.img}
              media={el.media}
              date={el.date}
              title={el.title}
              description={el.description}
              link={el.link}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
};
export default PrensaGrafica;
