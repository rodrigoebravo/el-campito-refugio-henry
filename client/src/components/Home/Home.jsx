import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import IconsBar from "../IconsBar/IconsBar";
// import homeimg from '../../img/homeimg.jpg'
import style from "./Home.module.css";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className={style.homeContenedor}>
        <div className={style.halfHomeContenedor}>
          <div className={style.IconsBar}>
            <IconsBar />
          </div>
          <div className={style.textContainer}>
            <p className={style.pHome}>
              Somos una ONG sin fines de lucro que trabaja rescatando,
              recuperando y dando en adopción. Además buscamos generar
              conciencia para lograr una sociedad más inclusiva y respetuosa.
              Orgullosos de ser un refugio de puertas abiertas te invitamos a
              conocernos. Estamos en Esteban Echeverria, Bs As, Argentina.
            </p>
            <h2 className={style.h2Home}>Vale la pena involucrarse</h2>
          </div>
        </div>
        <div className={style.halfHomeContenedor}>
          <img
            src="https://res.cloudinary.com/dman2cjk5/image/upload/v1670545930/refugio/MAR_7368_2_1_wurkop.jpg"
            alt="homeImage"
            className={style.homeImage}
          />
        </div>
      </div>
      <div className={style.homeMenu}>
        {" "}
        {/* En este div le pase por porops descripcion y className para poder trabajar con cada componente por separado */}
        <Link to="/adoptar" className={`${style.adoptar} ${style.a}`}>
          Quiero adoptar
        </Link>
        <Link to="/colaborar" className={`${style.donaciones} ${style.a}`}>
          Donaciones y padrinazgos
        </Link>
        <Link to="/visitas" className={`${style.visitas} ${style.a}`}>
          Visitas
        </Link>
        <Link to="/home" className={`${style.veterinaria} ${style.a}`}>
          Veterinaria y Unidad de Cuidados Intensivos
        </Link>
        <Link to="/campito" className={`${style.veterinaria} ${style.a}`}>
          El Campito escolar
        </Link>
        <Link to="/home" className={`${style.comunicacion} ${style.a}`}>
          Comunicación, prensa y redes Sociales
        </Link>
        <Link to="/voluntario" className={`${style.voluntario} ${style.a}`}>
          Quiero ser voluntario
        </Link>
        <Link to="/home" className={`${style.comportamiento} ${style.a}`}>
          Comportamiento y sociabilizacion
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
