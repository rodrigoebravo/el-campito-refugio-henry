import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../BarraDeNavegacion/BarraDeNavegacion";
import Footer from "../../Footer/Footer";
import styles from "./ProyectoEscolar.module.css";
import { getProyectos } from "../../../redux/actions/action";
import imgVoluntario2 from "../../../assets/img/escolar/img-voluntarios2.jpg";
import imgVoluntario3 from "../../../assets/img/escolar/img-voluntarios3.jpg";
import imgVoluntario4 from "../../../assets/img/escolar/img-voluntarios4.jpg";
import imgVoluntario5 from "../../../assets/img/escolar/img-voluntarios5.jpg";
import imgVoluntario6 from "../../../assets/img/escolar/img-voluntarios6.jpg";
import imgVoluntario7 from "../../../assets/img/escolar/img-voluntarios7.jpg";
import imgVoluntario8 from "../../../assets/img/escolar/img-voluntarios8.jpg";
import imgVoluntario9 from "../../../assets/img/escolar/img-voluntarios9.jpg";
import InfiniteCarousel from 'react-leaf-carousel';
let data = require('../Talleres/data.json');

const ProyectoEscolar = () => {
  const proyectos = useSelector((state) => state.proyectos)
 const proyectosEscolar = proyectos?.filter(
    (el) => el.category === "escolar"
  );
 
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProyectos());
  }, [dispatch]);
  
  

  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.proyectoEscolarmain}>
        <section>
          <h2 className={styles.h2ProyectoEscolar}>EL CAMPITO ESCOLAR</h2>
          <p className={styles.pProyectoEscolar}>
            El Campito Escolar surge de querer concientizar y de trabajar con
            niños desde las bases. De querer enseñarles, por ejemplo, sobre la
            responsabilidad que implica tener un animal en el hogar y querer
            sensibilizar a los niños sobre el maltrato animal.
          </p>
          <p className={styles.pProyectoEscolar}>
            Nuestro mayor objetivo es poder lograr que las generaciones futuras
            se comprometan a ayudar a aquellos animales que est&eacute;n en
            situaci&oacute;n de calle.
          </p>
          <p className={styles.pProyectoEscolar}>
            Este proyecto abarca los 3 niveles educativos:
          </p>
          <ul className={styles.ulProyectoEscolar}>
            <li className={styles.liProyectoEscolar}>
              La ETAPA INICIAL (niños de 3 a 5 años)
            </li>
            <li className={styles.liProyectoEscolar}>
              La ETAPA PRIMARIA (niños de 6 a 11 años){" "}
            </li>
            <li className={styles.liProyectoEscolar}>
              La ETAPA SECUNDARIA (adolescentes y preadolescentes a partir de
              los 12 años).{" "}
            </li>
          </ul>
          <p className={styles.pProyectoEscolar}>
            Si bien el enfoque b&aacute;sico es el mismo para todos, hemos
            incluido el uso de t&eacute;rminos como "eutanasia", "criaderos
            clandestinos" y "zoonosis" para los niños de mayor edad.
          </p>
          <p className={styles.pProyectoEscolar}>
            Las charlas de concientizaci&oacute;n son dictadas por voluntarios
            del refugio y se llevan a cabo virtualmente o en los
            establecimientos escolares (muchos de los colegios realizan un
            trabajo previo sobre la tem&aacute;tica), con una duraci&oacute;n
            aproximada de 1.30 a 2.00 horas.
          </p>
          <p className={styles.pProyectoEscolar}>
            Si quer&eacute;s programar una charla, escribinos a{" "}
            <span>
              <a
                className={styles.aProyectoEscolar}
                href="mailto:escolar@elcampitorefugio.org"
              >
                escolar@elcampitorefugio.org
              </a>
            </span>
          </p>
          <p className={styles.pProyectoEscolar}>
            Tambi&eacute;n pod&eacute;s acceder desde nuestro canal de{" "}
            <span>
              <a className={styles.aProyectoEscolar} href="/#">
                Youtube
              </a>
            </span>{" "}
            a una serie de videos generados para que puedas compartirlos con
            cualquier pequeño que tengas cerca. ¡Esperamos que lo disfruten!
          </p>
        </section>
        <section className={styles.boxContainer}>
          <div className={styles.box}>
            <img
              src={imgVoluntario2}
              className={styles.imgProyectoEscolar}
              alt=""
            />
          </div>
          <div className={styles.box}>
            <img
              src={imgVoluntario3}
              className={styles.imgProyectoEscolar}
              alt=""
            />
          </div>
          <div className={styles.box}>
            <img
              src={imgVoluntario4}
              className={styles.imgProyectoEscolar}
              alt=""
            />
          </div>
          <div className={styles.box}>
            <img
              src={imgVoluntario5}
              className={styles.imgProyectoEscolar}
              alt=""
            />
          </div>
          <div className={styles.box}>
            <img
              src={imgVoluntario6}
              className={styles.imgProyectoEscolar}
              alt=""
            />
          </div>
          <div className={styles.box}>
            <img
              src={imgVoluntario7}
              className={styles.imgProyectoEscolar}
              alt=""
            />
          </div>
          <div className={styles.box}>
            <img
              src={imgVoluntario8}
              className={styles.imgProyectoEscolar}
              alt=""
            />
          </div>
          <div className={styles.box}>
            <img
              src={imgVoluntario9}
              className={styles.imgProyectoEscolar}
              alt=""
            />
          </div>
        </section>

        <InfiniteCarousel
    breakpoints={[
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ]}
    dots={true}
    showSides={true}
    sidesOpacity={.5}
    sideSize={.1}
    slidesToScroll={4}
    slidesToShow={4}
    scrollOnDevice={true}
  >
    {
        proyectosEscolar?.map((el) => { console.log(el.link)
          return (
            <iframe
              src={el.link}
              title={el.title}
            >{" "}</iframe>
          );
        })}
  </InfiniteCarousel>
      
        <section className={styles.infoProyectoEscolar}>
          <p className={styles.pProyectoEscolar}>
            <span className={styles.spanProyectoEscolar}>
              Si quer&eacute;s programar una charla, escribinos a:
            </span>
          </p>
          <button className={styles.buttonProyectoEscolar}>
            institucional@elcampitorefugio.org
          </button>
          <p className={styles.pProyectoEscolar}>
            <span className={styles.spanProyectoEscolar}>¡Te esperamos!</span>
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default ProyectoEscolar;
