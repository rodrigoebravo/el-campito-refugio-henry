
import { React } from "react";
import styles from "./QuieroSerVoluntario.module.css";
import Footer from "../Footer/Footer";
import BarraDeNavegacion from "../BarraDeNavegacion/BarraDeNavegacion";
import { Link } from "react-router-dom";
import imgVoluntarios from "../../assets/img/img-voluntariado.png"

const QuieroSerVoluntario = () => {
  return (
    <div className={styles.container}>
      <BarraDeNavegacion />
      <div className={styles.div}>
        <h2 className={styles.h2Voluntario}>¡QUIERO SER VOLUNTARIO!</h2>
        <p className={styles.pVoluntario}><span  className={styles.spanVoluntario}>¡En El Campito hay mucho por hacer!</span></p>
        <p className={styles.pVoluntario}>Todos los años El Campito abre la inscripci&oacute;n para reclutar voluntarios que posean un real compromiso para trabajar en las distintas &aacute;reas de nuestro refugio  ¡Vos pod&eacute;s ser uno de ellos!
        </p>
          <p className={styles.pVoluntario}>No todos los que se anoten ser&aacute;n voluntarios, pues se elegir&aacute;n para tareas espec&iacute;ficas y la cantidad de los mismos ser&aacute; determinada por la naturaleza de esas tareas a desarrollar. 
        </p>
        <h3 className={styles.h3Voluntario}>¡Vos podés ser uno de ellos!</h3>
       
        <img src={imgVoluntarios}  alt="Voluntarios" className={styles.imgVoluntarios}/>
        <p className={styles.pVoluntario}>Ser voluntario te permitir&aacute;:</p>
        <ul className={styles.ul}>
          <li className={styles.liVoluntario}>
            Desarrollar las habilidades existentes y obtener nuevos
            conocimientos.
          </li>
          <li className={styles.liVoluntario}>Conocer gente nueva.</li>
          <li className={styles.liVoluntario}>
            Saber más sobre los que hacer y ser parte de un equipo.
          </li>
          <li className={styles.liVoluntario}>Divertirte.</li>
          <li className={styles.liVoluntario}>
            Hacer algo a la vez desafiante y muy gratificante.
          </li>
          <li className={styles.liVoluntario}>
            Pasar tiempo de calidad con nuestros camperitos.
          </li>
        </ul>
        {/**aca iria una galeria con las fotos de los voluntarios */}
        <div className={styles.voluntarioContacto}>
        <p className={styles.pVoluntario}><span  className={styles.spanVoluntario}>Para sumarte a nuestra base de datos completa el siguiente formulario:</span></p>
          <Link to="volunteerForm" className={styles.aVoluntario}>
           Formulario
          </Link>
          <p className={styles.pVoluntario}><span  className={styles.spanVoluntario}>¡Te esperamos!</span></p>
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default QuieroSerVoluntario;