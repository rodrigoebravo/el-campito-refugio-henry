import React from "react";
import BarraDeNavegacion from "../BarraDeNavegacion/BarraDeNavegacion"
import Form from "../Forms/Contacto/Contacto"
import Footer from "../Footer/Footer"
import styles from "./Contactanos.module.css"

const Contactanos = () => {
    return(
        <div className={styles.mainContactanos}>
            <BarraDeNavegacion/>
            <h2 className= {styles.h2Contactanos}>CONTACTANOS</h2>
        <section className={styles.mainContainer}>
                <Form/>
        </section>
        <section className={styles.sectionContactanos} >
            <p><span className={styles.spanContactanos}>Contactanos a nuestras redes sociales o a</span></p>
            <button className={styles.buttonContactanos}>institucional@elcampitorefugio.org</button>
        </section>
            <Footer/>
        </div>
    )
}

export default Contactanos;