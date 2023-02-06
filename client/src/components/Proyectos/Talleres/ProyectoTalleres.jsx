import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProyectos } from "../../../redux/actions/action";
import NavBar from "../../BarraDeNavegacion/BarraDeNavegacion";
import Footer from "../../Footer/Footer";
import styles from "./ProyectoTalleres.module.css";

import InfiniteCarousel from 'react-leaf-carousel';

let data = require('./data.json');

const ProyectoTalleres = () => {
  const proyectos = useSelector((state) => state.proyectos);
  const proyectosTalleres = proyectos?.filter(
    (el) => el.category === "talleres"
  );
 
  const proyectosCapacitaciones = proyectos?.filter(
    (el) => el.category === "capacitaciones"
  );
  const proyectosCharlas = proyectos?.filter(
    (el) => el.category === "charlas"
  )
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProyectos());
  }, [dispatch]);
 
  
  
  //console.log(proyectos)

  
  return (
    <div >
      <NavBar />
        <div className={styles.contenedorTalleres}>
        <div>
         <h2 className={styles.h2Talleres}>Talleres</h2>
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
  {console.log(proyectosTalleres)}
    {
      
      proyectosTalleres?.map((el) => { console.log(el.link)
          return (
            <iframe
              src={el.link}
              title={el.title}
            >{" "}</iframe>
          );
        })}
  </InfiniteCarousel>
        </div>
        <div>
         <h2 className={styles.h2Talleres}>Capacitaciones</h2>
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
      proyectosCapacitaciones?.map((el) => {
          return (
            <iframe
              src={el.link}
              title={el.title}
            >{" "}</iframe>
          );
        })}
  </InfiniteCarousel>
        </div>
        <div>
         <h2 className={styles.h2Talleres}> Charlas</h2>
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
      proyectosCharlas?.map((el) => {
          return (
            <iframe
              src={el.link}
              title={el.title}
            >{" "}</iframe>
          );
        })}
  </InfiniteCarousel>
        </div> 
</div>
      <Footer />
    </div>
  );
};

export default ProyectoTalleres;
