import { React } from "react";
import styles from "./ConocenosDetalle.module.css";
import Footer from "../Footer/Footer";
import BarraDeNavegacion from "../BarraDeNavegacion/BarraDeNavegacion";
import imgDetalle from '../../assets/img/img-nosotros.jpg'

const ConocenosDetalle = () => {
  return (
    <div className={styles.container}>
      <BarraDeNavegacion />
      <div className={styles.conocenosContenedor}>
      <img src={imgDetalle} className={styles.imgConocenos} alt="Nosotros"/>
       <div className={styles.div}>
        <h1 className={styles.h1Conocenos}>Conocenos en detalle</h1>
        <span className={styles.spanConocenos}>Nosotros somos El Campito Refugio.</span>
        <p className={styles.pConodenos}>
          Nuestra misión es fomentar la participación activa de la ciudadanía en
          el rescate, la recuperación y la adopción de animales indefensos
          construyendo un mundo donde los animales sin hogar sean incluidos de
          un modo justo.
        </p>
        <span className={styles.spanConocenos}>
          Trabajamos a puertas abiertas porque
          nos proponemos lograr:
          </span>
        <ul className={styles.ulConocenos}>
          <li className={styles.liConocenos}>
            Una mayor comprensión y un mejor posicionamiento de los derechos de
            nuestros animales.
          </li>
          <li className={styles.liConocenos}>  Una intervención ciudadana cada vez más precisa, eficaz y
            fundamentada frente a los problemas que constituyen nuestra lucha.
          </li>
          <li className={styles.liConocenos}>
            Mejores condiciones para que las autoridades respeten los derechos
            animales, mejoren las políticas públicas y las decisiones que tomen
            en estos temas.
          </li>
        </ul>
        <p className={styles.pConodenos}>
          Tenemos una población que ronda los 400 perros y realizamos una tarea
          sin precedentes en América Latina. Lo que nos hace únicos en el mundo
          son nuestros 100 perros discas (como nosotros los llamamos), quienes
          no pueden caminar y usan carritos hechos a medida.
        </p>
        <p className={styles.pConodenos}>
          Además viven en el refugio perros jóvenes, adultos y ancianos, muchos
          de los cuales están en tratamiento por diferentes patologías:
          problemas renales, hepáticos, cardíacos, oncológicos o diabéticos.
          ¡También hay cachorros y muchos más!
        </p>
        <h3 className={styles.h3Naranja}>Nuestro objeto social:</h3>
        <ol className={styles.olConocenos}>
        <li className={styles.liOconocenos}>
            Ofrecer amparo y cuidado a animales desprotegidos víctimas de la
            crueldad y el abandono.
          </li>
          <li className={styles.liOconocenos}>
            Defender a los animales contra el maltrato, el abandono y el abuso
            concientizando a la comunidad acerca de esta temática.
          </li>
          <li className={styles.liOconocenos}>
            Brindar servicio de asistencia médico veterinaria gratuita para la
            atención de animales maltratados y abandonados y para personas de
            bajos recursos.
          </li>
        </ol>

       
      </div>
    </div>
    <Footer />
    </div>  
  );
};

export default ConocenosDetalle;