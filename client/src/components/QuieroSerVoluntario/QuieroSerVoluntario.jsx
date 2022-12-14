
import { React } from "react";
import style from "./QuieroSerVoluntario.module.css";
import Footer from "../Footer/Footer";
import Navbar from "../NavBar/NavBar";

const QuieroSerVoluntario = () => {
  return (
    <div>
      <Navbar />
      <div className={style.div}>
        <h1 className={style.h1Voluntario}>¡QUIERO SER VOLUNTARIO!</h1>
        <h3>¡En El Campito hay mucho por hacer!</h3>
        <p>
          Para que puedas integrarte hemos creado un espacio formativo
          permanente que nos ayude a potenciar la participación real y efectiva
          de aquellos que deseen dejar de ser visitantes para convertirse en
          voluntarios de nuestra ONG.
          <br></br>Todos los años El Campito abre la inscripción para reclutar
          voluntarios que posean un real compromiso para trabajar en las
          distintas áreas de nuestro refugio: proveyendo compañía, estímulo y
          ejercicio a nuestros Camperitos, brindando su trabajo en caniles,
          enfermería, página web, redes sociales, foto/video, colectas,
          reeducación y sociabilización, evaluando adoptantes, efectuando
          traslados y rescates, trabajando en jornadas y asistiendo a colegios
          para concientizar, dando la bienvenida y asistiendo a nuestros
          visitantes.
        </p>
        <h3 className={style.h3Voluntario}>¡Vos podés ser uno de ellos!</h3>
        <p>
          Deberemos consensuar con cada voluntario su compromiso inicial, y
          establecer acuerdos acerca de su disposición temporal,
          responsabilidades y tareas sin dejar de exigir su cumplimiento.
          <br></br>
          No todos los que se anoten alcanzarán la categoría de voluntario, pues
          se elegirán para tareas específicas y la cantidad de los mismos será
          determinada por la naturaleza de las tareas a desarrollar. Les pedimos
          que piensen muy cuidadosamente acerca de la posibilidad de dar su
          tiempo antes de enviarnos su solicitud.
        </p>
        <p>Ser voluntario te permitirá:</p>
        <ul className={style.ul}>
          <li className={style.liVoluntario}>
            Desarrollar las habilidades existentes y obtener nuevos
            conocimientos.
          </li>
          <li className={style.liVoluntario}>Conocer gente nueva.</li>
          <li className={style.liVoluntario}>
            Saber más sobre los que hacer y ser parte de un equipo.
          </li>
          <li className={style.liVoluntario}>Divertirte.</li>
          <li className={style.liVoluntario}>
            Hacer algo a la vez desafiante y muy gratificante.
          </li>
          <li className={style.liVoluntario}>
            Pasar tiempo de calidad con nuestros camperitos.
          </li>
        </ul>
        {/**aca iria una galeria con las fotos de los voluntarios */}
        <div className={style.voluntarioContacto}>
          <h3>Para anotarte, escribinos un mail contándonos sobre vos a</h3>
          <button className={style.buttonVoluntario}>
            institucional@versiusamosestemail
          </button>
          <h3>¡Te esperamos!</h3>
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default QuieroSerVoluntario;
