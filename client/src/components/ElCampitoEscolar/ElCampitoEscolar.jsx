import style from "./ElCampitoEscolar.module.css";
import Footer from "../Footer/Footer";
import Navbar from "../NavBar/NavBar";

const ElCampitoEscolar = () => {
  return (
    <div>
      <Navbar/>
      <div className={style.campitoContenedor}>
        <h1 className={style.h1Campito}>El campito escolar</h1>
        <p>
          Campito escolar surgió con la intención de concientizar y de trabajar
          con niños desde las bases. El objetivo es poder enseñarles, por
          ejemplo, sobre la responsabilidad que implica tener un animal en el
          hogar, entre otras cosas debidamente identificada y vacunada, y sobre
          los beneficios de la castración a temprana edad. Asimismo, buscamos
          sensibilizar a los niños sobre el maltrato animal.
        </p>
        <p>
          Nuestro mayor objetivo es poder lograr que lasgeneraciones futuras se
          comprometan a ayudar a aquellos animales que estén en situación de
          calle.
        </p>
        <br></br>
        <p>
          Este proyecto abarca los 3 niveles educativos: La ETAPA INICIAL (niños
          de 3 a 5 años) La ETAPA PRIMARIA (niños de 6 a 11 años) La ETAPA
          SECUNDARIA (adolescentes y preadolescentes a partir de los 12 años).
        </p>
        <br></br>
        <p>
          Si bien el enfoque básico es el mismo para todos, también hemos
          incluido el uso de términos nuevos como "eutanasia", "criaderos
          clandestinos" y "zoonosis" para los niños de mayor edad. Las charlas
          de concientización son dictadas por voluntarios del refugio y se
          llevan a cabo en los distintos establecimientos escolares (muchos de
          los colegios realizan un trabajo previo sobre la temática), con una
          duración aproximada de 1.30 a 2.00 horas. También podemos realizar
          charlas virtuales, adecuándonos a la necesidad de cada colegio y del
          contexto.
        </p>
        {/** aca va una galeria */}
        <div className={style.programaCharla}>
          <h3>Si querés programar una charla, escribinos a </h3>
          <button className={style.campitoButton}>
            institucional@elcampitorefugio.org
          </button>
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default ElCampitoEscolar;
