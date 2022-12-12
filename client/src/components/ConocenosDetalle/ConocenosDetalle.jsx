import { React } from "react";
import style from "./ConocenosDetalle.module.css";
import Footer from "../Footer/Footer";
import Navbar from "../NavBar/NavBar";

const ConocenosDetalle = () => {
  return (
    <div>
      <Navbar />

      <div className={style.div}>
        <h1 className={style.h1}>Conocenos en detalle</h1>
        <h3>Nosotros somos El Campito Refugio.</h3>
        <p className={style.pAndLi}>
          Nuestra misión es fomentar la participación activa de la ciudadanía en
          el rescate, la recuperación y la adopción de animales indefensos
          construyendo un mundo donde los animales sin hogar sean incluidos de
          un modo justo.
        </p>
        <p className={style.pAndLi}>
          Trabajamos a puertas abiertas (quien lo desee puede visitarnos) porque
          nos proponemos lograr:
        </p>
        <ul className={style.ul}>
          <li className={style.pAndLi}>
            Una mayor comprensión y un mejor posicionamiento de los derechos de
            nuestros animales.
          </li>
          <li>
            Una intervención ciudadana cada vez más precisa, eficaz y
            fundamentada frente a los problemas que constituyen nuestra lucha.
          </li>
          <li className={style.pAndLi}>
            Mejores condiciones para que las autoridades respeten los derechos
            animales, mejoren las políticas públicas y las decisiones que tomen
            en estos temas.
          </li>
        </ul>
        <p className={style.pAndLi}>
          Tenemos una población que ronda los 400 perros y realizamos una tarea
          sin precedentes en América Latina. Lo que nos hace únicos en el mundo
          son nuestros 100 perros discas (como nosotros los llamamos), quienes
          no pueden caminar y usan carritos hechos a medida.
        </p>
        <p className={style.pAndLi}>
          Además viven en el refugio perros jóvenes, adultos y ancianos, muchos
          de los cuales están en tratamiento por diferentes patologías:
          problemas renales, hepáticos, cardíacos, oncológicos o diabéticos.
          ¡También hay cachorros y muchos más!
        </p>
        <h3 className={style.h4Naranja}>Nuestro objeto social:</h3>
        <ol>
          <li className={style.pAndLi}>
            Ofrecer amparo y cuidado a animales desprotegidos víctimas de la
            crueldad y el abandono.
          </li>
          <li className={style.pAndLi}>
            Defender a los animales contra el maltrato, el abandono y el abuso
            concientizando a la comunidad acerca de esta temática.
          </li>
          <li className={style.pAndLi}>
            Brindar servicio de asistencia médico veterinaria gratuita para la
            atención de animales maltratados y abandonados y para personas de
            bajos recursos.
          </li>
        </ol>

        <Footer />
      </div>
    </div>
  );
};

export default ConocenosDetalle;
