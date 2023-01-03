import React from "react";


import NavBar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";

import styles from "./PrensaTelevision.module.css"
import press from "./prensa.json"
import CardPrensaTelevision from "./CardPrensaTelevision";

const PrensaGrafica = () => {

  //aca va un useefect

  return(
    <div className={styles.container}> 
     <NavBar/>
     <h2 className={styles.h2PrensaTele}>Prensa Television</h2>
     <div className={styles.card}>
     {press?.map((el) => {
            return (
             
                
                  <CardPrensaTelevision
                    key={el._id}
                    link={el.link}
                    media={el.media}
                    logo={el.logo}
                    title={el.title}
                    description={el.description}
                  />
                
              
            );
          })}
          </div>
     <Footer/>
    </div>
  )
}
export default PrensaGrafica;