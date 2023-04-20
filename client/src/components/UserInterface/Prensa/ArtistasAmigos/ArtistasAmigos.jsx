import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import BarraDeNavegacion from "../../BarraDeNavegacion/BarraDeNavegacion";
import Footer from "../../Footer/Footer";
import { getPress } from "../../../../redux/actions/action";
import styles from "./ArtistasAmigos.module.css";
import press from "./prensa.json";

const ArtistasAmigos = () => {
  // const press = useSelector((state) => state.press);  
  // const pressAmigos = press.filter(el=> el.type==="Artistas Amigos")
  // console.log(press)
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getPress());
    }, [dispatch]);  

  return (
    <div className={styles.container}>
      <BarraDeNavegacion />
      <div className={styles.amigosInfo}>
      <h2 className={styles.h2PrensaAmigos}>Artistas Amigos</h2>
      <div className={styles.card}>
        {press?.map((el) => { // descomentar pressAmigos, probar y mapear eso
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
