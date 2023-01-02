import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import NavBar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";

import styles from "./ArtistasAmigos.module.css"

import press from "./prensa.json"

const ArtistasAmigos = () => {

  return(
    <div className={styles.container}>
     <NavBar/>
     <h2 className={styles.h2PrensaAmigos}>Artistas Amigos</h2>
     <div className={styles.card}>
     
     {press?.map((el) => {
            return (
             
                <iframe src={el.link} className={styles.iframePrensaAmigos}></iframe>
                
              
            );
          })}
          </div>
     <Footer/>
    </div>
  )
}
export default ArtistasAmigos;