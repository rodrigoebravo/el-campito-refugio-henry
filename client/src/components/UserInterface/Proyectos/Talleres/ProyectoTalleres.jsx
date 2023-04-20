import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProyectos } from "../../../../redux/actions/action";
import NavBar from "../../BarraDeNavegacion/BarraDeNavegacion";
import Footer from "../../Footer/Footer";
import Loading from "../../../Loading/Loading";
import styles from "./ProyectoTalleres.module.css";

import imgVoluntario2 from "../../../../assets/img/escolar/img-voluntarios2.jpg";
import imgVoluntario3 from "../../../../assets/img/escolar/img-voluntarios3.jpg";
import imgVoluntario4 from "../../../../assets/img/escolar/img-voluntarios4.jpg";
import imgVoluntario5 from "../../../../assets/img/escolar/img-voluntarios5.jpg";
import imgVoluntario6 from "../../../../assets/img/escolar/img-voluntarios6.jpg";
import imgVoluntario7 from "../../../../assets/img/escolar/img-voluntarios7.jpg";
import imgVoluntario8 from "../../../../assets/img/escolar/img-voluntarios8.jpg";
import imgVoluntario9 from "../../../../assets/img/escolar/img-voluntarios9.jpg";

import InfiniteCarousel from 'react-leaf-carousel';

import ModalVideos from "../../../Modals/ModalVideos/ModalVideos";


// let data = require('./data.json');

const ProyectoTalleres = () => {

  const proyectos = useSelector((state) => state.proyectos);
  const [modal, setModal] = useState(false); 
  const [video, setVideo] = useState({
    title: "",
    link: ""
  }); 

  const dispatch = useDispatch();
  let videos = [];

  useEffect(() => {
    dispatch(getProyectos());
  }, [dispatch]);

  const handleClick = (id)=> {
      console.log(id);
      let videoIn = videos.find((v)=> v._id === id );
      console.log(videoIn);
      setVideo(videoIn);
      setModal(true);
  }
 
  const handleClose = ()=> {
    setModal(false)
  };
  
  return (
    <div >
      <NavBar />
        <div className={styles.contenedorTalleres}>
          <section>
            <h2 className={styles.h2Talleres}>Charlas, Talleres y Capacitaciones</h2>
            <br></br>
            <p className={styles.pProyectoEscolar}>
              Es muy importante para nosotros buscar el bienestar de los perritos y 
              que cada vez m&aacute;s perritos tengan una vida linda y en armon&iacute;a.
            </p>
            <p className={styles.pProyectoEscolar}>
              En el Campito queremos contarles, por ejemplo, sobre la
              responsabilidad que implica tener un animal en el hogar y querer
              sensibilizar a los niños y adultos sobre el maltrato animal.
            </p>
            <p className={styles.pProyectoEscolar}>
              Nuestro mayor objetivo es poder lograr que la sociedad 
              se comprometan a ayudar a aquellos animales que est&eacute;n en
              situaci&oacute;n de calle.
            </p>
            <p className={styles.pProyectoEscolar}>
              Este proyecto abarca diferentes formas en la busqueda de concientizar,
              entre las que podemos destacar, talleres, capacitaciones y charlas.
            </p>
        
            <p className={styles.pProyectoEscolar}>
              Las charlas de concientizaci&oacute;n son dictadas por voluntarios
              del refugio y se llevan a cabo virtualmente o en el refugio
              con una duraci&oacute;n aproximada de 1.30 a 2.00 horas.
            </p>
            <p className={styles.pProyectoEscolar}>
              Si quer&eacute;s programar o participar una charla u otro tipo de
              formatos dictadas por nosotros, escribinos a{" "}
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
              Tambi&eacute;n pod&eacute;s mirar al final de esta sección los
              videos  de talleres, capacitaciones y charlas, o bien
              acceder desde nuestro canal de{" "}
              <span>
                <a className={styles.aProyectoEscolar} href="https://www.youtube.com/@campitorefugio">
                  Youtube
                </a>
              </span>{" "}
              a una serie de videos generados para que puedas compartirlos con
              cualquier pequeño que tengas cerca. ¡Esperamos que lo disfruten!
            </p>
          </section>
          <br></br>
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
          <div  className={styles.videosBox}>
            <div>
              { modal ? 
                <ModalVideos  
                  title={video.title}
                  url={video.link}
                  close={handleClose}                
                /> 
                : <></>
              }  
              <h2 className={styles.h2Talleres}>Talleres</h2>
              <InfiniteCarousel
                    breakpoints={[
                      {
                        breakpoint: 500,
                        settings: {
                          slidesToShow: 1,
                          slidesToScroll: 1,
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
                    proyectos.length < 0 ? <Loading /> :
                    proyectos
                    .filter(
                      (el) => el.category === "talleres" && el.img !== null 
                    )
                    .map((el, index) => { console.log(el._id)
                      videos.push(el);
                      return (                                        
                            <button 
                              key={index}
                              className={styles.buttonVideo} 
                              onClick={()=> handleClick(el._id)}
                               >
                                <h5>{el.title}</h5>                                
                                <img  src={el.img} alt="" />
                            </button>                                           
                      );
                    })
                  }
              </InfiniteCarousel>
            </div>

            <div>
              <h2 className={styles.h2Talleres}>Capacitaciones</h2>
              <InfiniteCarousel
                  breakpoints={[
                    {
                      breakpoint: 500,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
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
                    proyectos.length < 0 ? <Loading /> :
                    proyectos
                    .filter(
                      (el) => el.category === "capacitaciones" && el.img !== null 
                    )
                    .map((el, index) => { console.log(el._id)
                      videos.push(el);
                      return (                                        
                            <button 
                              key={index}
                              className={styles.buttonVideo} 
                              onClick={()=> handleClick(el._id)}
                               >
                                <h5>{el.title}</h5>                                
                                <img  src={el.img} alt="" />
                            </button>                                           
                      );
                    })
                  }
              </InfiniteCarousel>
            </div>

            <div>
              <h2 className={styles.h2Talleres}> Charlas</h2>
              <InfiniteCarousel
                  breakpoints={[
                    {
                      breakpoint: 500,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
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
                  slidesToScroll={41}
                  slidesToShow={4}
                  scrollOnDevice={true}
                >
                {
                            proyectos.length < 0 ? <Loading /> :
                            proyectos
                            .filter(
                              (el) => el.category === "charlas" && el.img !== null 
                            )
                            .map((el, index) => { console.log(el._id)
                      videos.push(el);
                      return (                                        
                            <button 
                              key={index}
                              className={styles.buttonVideo} 
                              onClick={()=> handleClick(el._id)}
                               >
                                <h5>{el.title}</h5>                                
                                <img  src={el.img} alt="" />
                            </button>                                           
                      );
                    })
                          }
              </InfiniteCarousel>
            </div> 
          </div>
          
      </div>
      <Footer />
    </div>
  );
};

export default ProyectoTalleres;