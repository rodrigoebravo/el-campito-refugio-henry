import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import homeimg from "../../../assets/img/homeimg.jpg";

import { getUsersEmail } from "../../../redux/actions/action";

import BarraDeNavegacion from "../BarraDeNavegacion/BarraDeNavegacion";
// import { Slide,Slideshow } from "../Slider/Slider";
// import {getSlider} from "../../redux/actions/actions"
import Footer from "../Footer/Footer";
import ModalLogin from "../../Modals/ModalLogin/ModalLogin";
import ModalRegister from "../../Modals/ModalRegister/ModalRegister";

import styles from "./Home.module.css";


const Home = () => {
  const { user } = useAuth0();
  // const imagenes = useSelector((state) => state.slider);
  const dispatch = useDispatch();
  const [userGoogle, setUserGoogle] = useState();
  const usersEmail = useSelector((state) => state.userEmail);
  const [data, setData] = useState(null);
  const localStore = JSON.parse(localStorage.getItem("user"));
  // let paraNada = data;
  console.log(data);
  const dataSet = (googleUser)=> {
    if (googleUser) {
      let info = usersEmail.includes(googleUser);
      setData(info);
      return info;
    }
  };
  let userIn = user?.email || "";

  useEffect(() => {
    dispatch(getUsersEmail());
    // return () => {
    setUserGoogle(userIn);
    dataSet(userGoogle);
    // dispatch(getSlider());
    
  }, [dispatch]); // , userGoogle, usersEmail, user

  let aux = null;
  const aca = () => {
    if (user) {
      return usersEmail.includes(user.email);
    }
  };

  let fun = aca();
  console.log(fun, "estado");
  console.log(aux, "estadodata");

  //   console.log(userGoogle)
  //   if (userGoogle) {
  //     let datass = usersEmail.includes(userGoogle);
  //     console.log(datass);
  //     // setData(datass);
  //   }
  //   console.log(data);
  //     console.log(user.email,"soy local USER OME")
  //     let userType = emailAvailable(user.email)
  //     console.log(userType)
  // }
  // console.log(userGoogle,"soy el estado")
  // useEffect( () =>{
  //     let data =  serUserGoogle(userType)

  // })
  console.log(localStore);

  return (
    <div className={styles.container}>
      {user && !localStore && fun === false ? <ModalRegister /> : <></>}
      {user && !localStore && fun === true ? <ModalLogin /> : <></>}
      <BarraDeNavegacion />
      <main className={styles.home}>
        <section>
          <article className={styles.articleHome}>
            <div className={styles.content}>
              <h1 className={styles.h1Home}>El campito Refugio</h1>
              <p>
                Somos una ONG sin fines de lucro que trabaja rescatando,
                recuperando y dando en adopci&oacute;n. Adem&aacute;s buscamos
                generar conciencia para lograr una sociedad m&aacute;s inclusiva
                y respetuosa.
              </p>
              <p className={styles.pHomeS}>
                Orgullosos de ser un refugio de puertas abiertas te invitamos a
                conocernos.
              </p>
              <p className={styles.pHomeXS}>
                Estamos en Esteban Echeverria, Bs As, Argentina
              </p>
              <h2 className={styles.h2Home}>VALE LA PENA INVOLUCRARSE</h2>
            </div>
            <img
              src={homeimg}
              className={styles.imgHome}
              alt="Perro con humano"
            />
            {/* aca va el slider */}
            {/* <main>
              <Slideshow
                controles={true}
                autoplay={true}
                velocidad="2000"
                intervalo="3000"
              >
                <Slide>
                  <a href="https://www.instagram.com/refugioelcampito/">
                    <img src={imagenes[0]} alt="" />
                  </a>
                </Slide>
                {imagenes[1] ? (
                  <Slide>
                    <a href="https://www.instagram.com/refugioelcampito/">
                      <img src={imagenes[1]} alt="" />
                    </a>
                  </Slide>
                ) : (
                  <></>
                )}
                {imagenes[2] ? (
                  <Slide>
                    <a href="https://www.instagram.com/refugioelcampito/">
                      <img src={imagenes[2]} alt="" />
                    </a>
                  </Slide>
                ) : (
                  <></>
                )}
                {imagenes[3] ? (
                  <Slide>
                    <a href="https://www.instagram.com/refugioelcampito/">
                      <img src={imagenes[3]} alt="" />
                    </a>
                  </Slide>
                ) : (
                  <></>
                )}
                {imagenes[4] ? (
                  <Slide>
                    <a href="https://www.instagram.com/refugioelcampito/">
                      <img src={imagenes[4]} alt="" />
                    </a>
                  </Slide>
                ) : (
                  <></>
                )}
                {imagenes[5] ? (
                  <Slide>
                    <a href="https://www.instagram.com/refugioelcampito/">
                      <img src={imagenes[5]} alt="" />
                    </a>
                  </Slide>
                ) : (
                  <></>
                )}
                {imagenes[6] ? (
                  <Slide>
                    <a href="https://www.instagram.com/refugioelcampito/">
                      <img src={imagenes[6]} alt="" />
                    </a>
                  </Slide>
                ) : (
                  <></>
                )}
                {imagenes[7] ? (
                  <Slide>
                    <a href="https://www.instagram.com/refugioelcampito/">
                      <img src={imagenes[7]} alt="" />
                    </a>
                  </Slide>
                ) : (
                  <></>
                )}
              </Slideshow>
            </main> */}
            {/* aca termino el slider */}
          </article>
        </section>
        <section className={styles.boxContainer}>
          <Link to="/adoptar" className={styles.boxBgPink}>
            <h3 className={styles.h3Home}>Quiero Adoptar</h3>
          </Link>
          <Link to="/colaborar" className={styles.boxBgGreen}>
            <h3 className={styles.h3Home}>Donaciones</h3>
          </Link>
          <Link to="/visitas" className={styles.boxBgOrange}>
            <h3 className={styles.h3Home}>Visitas</h3>
          </Link>
          <Link className={styles.boxBgPurple} to="./cuidados">
            <h3 className={styles.h3Home}>Cuidados</h3>
          </Link>
          <Link to="/proyectoescolar" className={styles.boxBgGreen}>
            <h3 className={styles.h3Home}>El Campito Escolar</h3>
          </Link>
          <Link className={styles.boxBgLightOrange} to="./prensa">
            <h3 className={styles.h3Home}>
              Comunicaci&oacute;n y Redes Sociales
            </h3>
          </Link>
          <Link to="/voluntario" className={styles.boxBgLightBlue}>
            <h3 className={styles.h3Home}>Quiero ser Voluntario</h3>
          </Link>
          <Link className={styles.boxBgGrey} to="./denuncias">
            <h3 className={styles.h3Home}>Denuncias sobre maltrato</h3>
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
