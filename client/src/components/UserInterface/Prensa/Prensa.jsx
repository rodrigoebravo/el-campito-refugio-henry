import React from "react";
import BarraDeNavegacion from "../BarraDeNavegacion/BarraDeNavegacion";
import Footer from "../Footer/Footer";
import grafica from "../../../assets/img/prensa/grafica.png"
import radio from "../../../assets/img/prensa/radio.png"
import television from "../../../assets/img/prensa/television.png"
import artistas from "../../../assets/img/prensa/artistas.png"
import styles from "./Prensa.module.css"
import { Link } from "react-router-dom";


const Prensa = () => {
  return(
    <div className={styles.container}>
    <BarraDeNavegacion/>
       <main className={styles.parentColumn}>
        <div className={styles.parentColumn}>
            <section>
                <h2 className={styles.h2Prensa}>COMUNICACI&oacute;N, REDES SOCIALES Y PRENSA</h2>
                <p className={styles.pPrensa}>Lo que no se cuenta no se contagia, y de eso se ocupa este equipo.
                    M&aacute;s all&aacute; de todo lo t&eacute;cnico que conforma el hecho de publicar en nuestras redes sociales,
                    El Campito tiene una voz conformada por muchas caracter&iacute;sticas, y dentro de ellas el sentimiento es
                    una cualidad que nos identifica.
                </p>
                <p className={styles.pPrensa}>Poder comunicar de una forma simple y sincera, hace que nuestros seguidores puedan
                    relacionarse mejor con la publicaci&oacute;n y logren sentirse identificados.
                </p>
                <p className={styles.pPrensa}><span>¿Qu&eacute; buscamos a la hora de comunicarnos?</span>
                </p>
                <p className={styles.pPrensa}><span>INVOLUCRAR</span> para llegar cada vez a m&aacute;s personas
                </p>
                <p className={styles.pPrensa}><span>MOVILIZAR</span> para que, quienes conozcan lo que hacemos, nos sigan apoyando</p>
                <p className={styles.pPrensa}><span>CONVERSAR</span> para que sepan que son escuchados y que son parte</p>
                
                <p className={styles.pPrensa}><span>INTERCAMBIAR</span> es la forma de generar comunidad
                </p>
                <p className={styles.pPrensa}>Por esto siempre decimos que ayudarnos a difundir lo que hacemos es una parte muy importante con la
                    que todos pueden colaborar.</p>
                <p className={styles.pPrensa}>El equipo de voluntarios cuenta con comunicadores, diseñadores gr&aacute;ficos, community managers,y
                    creadores de contenido (fot&oacute;grafos y filmakers)
                </p>
                <p className={styles.pPrensa}>Como dijimos, la difusi&oacute;n de nuestro trabajo es un eslab&oacute;n muy importante para generar conciencia en
                    la sociedad, y todo apoyo desde los medios de comunicaci&oacute;n es importante y muy valioso.</p>
                <p className={styles.pPrensa}>Dejamos a continuaci&oacute;n algunas notas para que puedan seguir conociendo lo que hacemos.
                </p>
            </section>
            <section>
                <div className={styles.prensaContainer}>
                    <Link to ="/prensa/grafica">
                        <div className={styles.prensaLinks}>
                            <img src={grafica} alt="Gr&aacute;fica" className={styles.imgPrensa}/> 
                            <p className={styles.pLightOrange}><span>Gr&aacute;fica</span></p>
                           
                        </div>
                    </Link>
                    <Link to ="/prensa/television">
                    <div className={styles.prensaLinks}>
                            <img src={television} alt="Televisi&oacute;n"className={styles.imgPrensa}/>
                            <p  className={styles.pLightOrange}><span>Televisi&oacute;n</span></p>
                        </div>
                    </Link>
                    <Link to ="/prensa/radio">
                    <div className={styles.prensaLinks}>
                            <img src={radio} alt="Radio" className={styles.imgPrensa}/>
                            <p  className={styles.pLightOrange}><span>Radio</span></p>
                        </div>
                    </Link>
                    <Link to ="/prensa/amigos">
                    <div className={styles.prensaLinks}>
                            <img src={artistas} alt="Artistas amigos" className={styles.imgPrensa}/>
                            <p className={styles.pLightOrange}><span>Artistas amigos</span></p>
                        </div>
                    </Link>
                </div>
            </section>
            <section className={styles.prensaButtonContainer}>
                <p className={styles.pPrensaC}>Si trabajas en un medio de comunicaci&oacute;n y quer&eacute;s comunicarte con nosotros, escribinos:</p>
                <button className={styles.buttonPrensa}><span className={styles.spanPrensa}>prensa@elcampitorefugio.org</span></button>
                
            </section>

        </div>
    </main>
    <Footer/>
    </div>
  )
}
export default Prensa;