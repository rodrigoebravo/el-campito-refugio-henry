import { React } from "react";
import style from "./QuieroAdoptar.module.css";
import Footer from "../Footer/Footer";
import Navbar from "../NavBar/NavBar";
const QuieroAdoptar = () => {
  return (
    /*el navbar puede ir aca o  colocarlo para que salga en todas las rutas*/
    <div className={style.div}>
      <Navbar />

      <div className={style.adoptarContenedor}>
        <h1 className={style.h1Adoptar}>¡Quiero Adoptar!</h1>
        <h3>¿Por qué adoptar en vez de comprar?</h3>
        <p>
          Porque adoptando estás salvando la vida de un animal rescatado. Cada
          perro adoptado deja su lugar para que ingrese otro y pueda ser
          recuperado en el refugio. Adoptar es un acto de amor y de
          responsabilidad, por eso es necesario estar completamente seguros de
          que estamos capacitados y listos para tener un perro. Un animal de
          compañía dependerá toda su vida de nosotros. Recordá que un perro
          puede vivir entre 15 y 20 años y estás asumiendo un compromiso serio
          por todo ese tiempo.
        </p>
        <h3>
          Consideraciones a tener en cuenta antes de tomar la decisión de
          adoptar:
        </h3>
        <ul className={style.ulAdoptar}>
          <li className={style.liAdoptar}>
            Los perros no son un juguete. El perro es parte de la familia y
            todos tienen que estar de acuerdo con la adopción.
          </li>
          <li className={style.liAdoptar}>
            No todos los perros necesitan un parque para correr, pero sí espacio
            para moverse cómodamente por la casa y un lugar diferenciado para
            dormir y descansar.
          </li>
          <li className={style.liAdoptar}>
            No todos los perros necesitan un parque para correr, pero sí espacio
            para moverse cómodamente por la casa y un lugar diferenciado para
            dormir y descansar.
          </li>
          <li className={style.liAdoptar}>
            Los perros tienen un calendario de vacunación anual que cumplir,
            pipetas y desparasitaciones periódicas. También necesitan alimento
            de buena calidad para preservar su salud, pelaje y dentadura. Y hay
            que considerar la atención veterinaria.
          </li>
          <li className={style.liAdoptar}>
            Evaluá si tendrás paciencia, si soportarás los pelos en las
            alfombras, los hoyos en el jardín y algún mueble o prenda rota por
            el perro.
          </li>
          <li className={style.liAdoptar}>
            También tené en cuenta si viajás por trabajo o vacaciones, qué
            posibilidades tendrás de llevarlo con vos o si alguien podrá
            cuidarlo en tu ausencia.
          </li>
        </ul>
        <p>
          Quizás te parezcan demasiadas preguntas para hacerse, pero muchos
          animales en los refugios están allí porque sus dueños no pensaron
          realmente cuánto tiempo y dinero llevaba cuidar de ellos.<br></br>
          Un perro te dará amor incondicional, compañía y mejorará tu vida.
          <br></br>
          Las adopciones se tratan solamente con el adoptante final, no mediante
          terceros.<br></br>
          Es requisito excluyente ser mayor de 21 años.
        </p>
        <ul>
          <li className={style.liAdoptar}>
            Al solicitar la adopción de un camperito como primer paso enviamos
            un cuestionario de pre-adopción para ser completado por el
            interesado.
          </li>
          <li className={style.liAdoptar}>
            Luego hacemos un informe socioambiental del domicilio para conocer a
            la familia y constatar las condiciones en que vivirá nuestro
            Camperito.
          </li>
          <li className={style.liAdoptar}>
            En caso de aprobar la adopción, solicitamos los datos del adoptante,
            de su veterinario de confianza y por último, el teléfono y dirección
            de 4 familiares.
          </li>
          <li className={style.liAdoptar}>
            El adoptante deberá encargar la chapita identificatoria incluyendo
            nuestro teléfono. Una vez que la chapita está lista coordinamos el
            traslado del adoptado a su hogar, donde se firma el Contrato de
            Adopción.
          </li>
        </ul>
        <p>
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
        <div className={style.divButton}>
          <h3 className={style.h3centrado}>
            Ahora que ya te contamos todo, es hora de dar el primer paso:
          </h3>
          <button className={style.buttonAdoptar}>
            FORMULARIO DE ADOPCIÓN - LINK
          </button>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default QuieroAdoptar;
