import { React } from "react";
import styles from "./QuieroAdoptar.module.css";
import Footer from "../Footer/Footer";
import BarraDeNavegacion from "../BarraDeNavegacion/BarraDeNavegacion";
import imgAdoptar from "../../assets/img/img-adopta.jpg"
import { Link } from "react-router-dom";
const QuieroAdoptar = () => {
  return (
    
    <div className={styles.container}>
      <BarraDeNavegacion />

      <div className={styles.mainAdoptar} >

      <div className={styles.imgContenedor}> <img src={imgAdoptar} className={styles.imgAdoptar} alt="Dos perros esperando ser adoptados"/></div>
       <div className={styles.adoptarContenedor}>
        <h2 className={styles.h2Adoptar}>¡Quiero Adoptar!</h2>
        <p className={styles.pAdoptar}>
          Adoptando estás salvando la vida de un animal rescatado. Cada
          perro adoptado deja su lugar para que ingrese otro y pueda ser
          recuperado en el refugio. Adoptar es un acto de amor y de
          responsabilidad, por eso es necesario estar completamente seguros de
          que estamos capacitados y listos para tener un perro. Un animal de
          compañía dependerá toda su vida de nosotros. Recordá que un perro
          puede vivir entre 15 y 20 años y estás asumiendo un compromiso serio
          por todo ese tiempo.
        </p>
        <p className={styles.pAdoptar}><span className={styles.spanAdoptar}>Consideraciones a tener en cuenta antes de tomar la decisión de
          adoptar:</span></p>
          
     
        <ul className={styles.ulAdoptar}>
          <li className={styles.liAdoptar}>
            Los perros no son un juguete. El perro es parte de la familia y
            todos tienen que estar de acuerdo con la adopción.
          </li>
          <li className={styles.liAdoptar}>
            No todos los perros necesitan un parque para correr, pero sí espacio
            para moverse cómodamente por la casa y un lugar diferenciado para
            dormir y descansar.
          </li>
          <li className={styles.liAdoptar}>
            No todos los perros necesitan un parque para correr, pero sí espacio
            para moverse cómodamente por la casa y un lugar diferenciado para
            dormir y descansar.
          </li>
          <li className={styles.liAdoptar}>
            Los perros tienen un calendario de vacunación anual que cumplir,
            pipetas y desparasitaciones periódicas. También necesitan alimento
            de buena calidad para preservar su salud, pelaje y dentadura. Y hay
            que considerar la atención veterinaria.
          </li>
          <li className={styles.liAdoptar}>
            Evaluá si tendrás paciencia, si soportarás los pelos en las
            alfombras, los hoyos en el jardín y algún mueble o prenda rota por
            el perro.
          </li>
          <li className={styles.liAdoptar}>
            También tené en cuenta si viajás por trabajo o vacaciones, qué
            posibilidades tendrás de llevarlo con vos o si alguien podrá
            cuidarlo en tu ausencia.
          </li>
        </ul>
        <p className={styles.pAdoptar}>Quiz&aacute;s te parezcan demasiadas preguntas para hacerse, pero muchos animales en los refugios est&aacute;n all&iacute;
                    porque sus dueños no pensaron realmente cu&aacute;nto tiempo y dinero llevaba cuidar de ellos.</p>
        <h2 className={styles.h2Adoptar}>Un perro te dar&aacute; amor incondicional, compañ&iacute;a y mejorar&aacute; tu vida.</h2>
        <p className={styles.pAdoptar}><span className={styles.spanAdoptar}>Para adoptar en El Campito:</span></p>
        <ul className={styles.ulAdoptar}>
          <li className={styles.liAdoptar}>
            Al solicitar la adopción de un camperito como primer paso enviamos
            un cuestionario de pre-adopción para ser completado por el
            interesado.
          </li>
          <li className={styles.liAdoptar}>
            Luego hacemos un informe socioambiental del domicilio para conocer a
            la familia y constatar las condiciones en que vivirá nuestro
            Camperito.
          </li>
          <li className={styles.liAdoptar}>
            En caso de aprobar la adopción, solicitamos los datos del adoptante,
            de su veterinario de confianza y por último, el teléfono y dirección
            de 4 familiares.
          </li>
          <li className={styles.liAdoptar}>
            El adoptante deberá encargar la chapita identificatoria incluyendo
            nuestro teléfono. Una vez que la chapita está lista coordinamos el
            traslado del adoptado a su hogar, donde se firma el Contrato de
            Adopción.
          </li>
        </ul>
        <p className={styles.pAdoptar}>
          Todos nuestros adoptados reciben un moño naranja que los identifica
          como ADOPTADOS y son llevados a domicilio.También se puede venir al
          refugio a conocerlos previamente.<br></br>
          Todos se van vacunados, desparasitados y castrados. En caso de ser un
          cachorrito, se entrega con compromiso de castración cuando tenga la
          edad suficiente. <br></br>
          Además somos padrinos de nuestros Camperitos de por vida. Esto quiere
          decir que podrás contar con nosotros cuando lo necesites, y también
          que habrá personal del refugio coordinando visitas o realizando
          contactos por algún medio para saber cómo están.
        </p>
       </div>
    </div>
      <div className={styles.buttonContenedor}>
        <p className={styles.pAdoptar}><span className={styles.spanAdoptar}>Ahora que ya te contamos todo, es hora de dar el primer paso:</span></p>
        <p className={styles.pAdoptar}><span className={styles.spanAdoptar}>Para conocer a nuestros camperitos en adopci&oacute;n:</span></p>
        <Link className={styles.buttonAdoptar}
              to='/adoptar/perros'>CONOCE A NUESTROS CAMPERITOS</Link>
        {/*<a className={styles.buttonAdoptar}
              href='https://adoptauncamperito.com.ar'>CONOCE A LOS CAMPERITOS</a>
        <p className={styles.pAdoptar}><span className={styles.spanAdoptar}>Si quer&eacute;s completar el formulario:</span></p>
        <Link to="./AdoptionForm" className={styles.buttonAdoptar}>FORMULARIO DE ADOPCI&Oacute;N </Link>*/}
        
        </div>
    <Footer />
    </div>
  );
};

export default QuieroAdoptar;