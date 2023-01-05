import { React } from "react";
import styles from "./Visitas.module.css";
import Footer from "../Footer/Footer";
import BarraDeNavegacion from "../BarraDeNavegacion/BarraDeNavegacion";
import correa from "../../assets/img/visitas/correa.png"
import repelente from "../../assets/img/visitas/repelente.png"
import protector from "../../assets/img/visitas/protector.png"
import abrigo from  "../../assets/img/visitas/abrigo.png"
import comida from  "../../assets/img/visitas/comida.png"
import auto from  "../../assets/img/visitas/auto.png"
import combi from  "../../assets/img/visitas/colectivo.png"
import tren from  "../../assets/img/visitas/tren.png"

const Visitas = () => {
  return (
    <div className={styles.container}>
      <BarraDeNavegacion />
      <main className={styles.visitas}>
        <div className={styles.parentColumn}>
            <section>
                <h2 className={styles.h2Visitas}>VISITAS</h2>
                <p className={styles.pVisitas}>Por ahora las visitas est&aacute;n suspendidas hasta nuevo aviso, pero igual queremos contarte de
                    qu&eacute; se
                    trata:</p>
                    <p  className={styles.pVisitas}>Las visitas son el primer domingo de cada mes y los s&aacute;bados siguientes. Se suspende por lluvia o mal
                    clima, por esto aconsejamos siempre chequear nuestras redes sociales antes de salir. No hace falta
                    que te anotes previamente.
                </p>
                <p  className={styles.pVisitas}><span className={styles.spanVisitas}>Record&aacute; traer:</span>
                </p>
                <div className={styles.parentTransporte}>
                    <div className={styles.transporte}>
                        <img src={correa} className={styles.imgVisitas} alt="Correas" />
                        <p className={styles.pOrange}><span className={styles.spanVisitas}>Correas</span></p>
                    </div>
                    <div className={styles.transporte}>
                        <img src={repelente} alt="Repelente para mosquitos" className={styles.imgVisitas} />
                        <p className={styles.pOrange}><span className={styles.spanVisitas}>Repelente para mosquitos</span></p>
                    </div>
                    <div className={styles.transporte}>
                        <img src={protector} alt="Protector solar" className={styles.imgVisitas}/>
                        <p className={styles.pOrange}><span className={styles.spanVisitas}>Protector solar</span></p>
                    </div>
                    <div className={styles.transporte}>
                        <img src={abrigo} alt="Abrigo" className={styles.imgVisitas}/>
                        <p className={styles.pOrange}><span className={styles.spanVisitas}>Abrigo</span></p>
                    </div>
                </div>
                <p><span className={styles.spanVisitas}>y lo que quieras para pasar el d&iacute;a en el pasto junto a ellos (bebidas, comida, lonitas, reposeras,
                    etc.)</span></p>
                    <div className={styles.parent}>
                        <img src={comida} alt="Comida" className={styles.imgVisitas}/>
                        <p className={styles.pMargin}>Si quer&eacute;s hacerles un mimo especial, te contamos un secreto: a los camperitos les encanta el arroz
                    con pollo (hervido, sin sal ni condimentos porque hay muchos que tienen patolog&iacute;as y siguen dietas
                    especiales)
                </p></div>
                
                <h2 className={styles.h2Visitas}>¡Mientras ellos esperan su familia para siempre, seamos la manada que los acompaña!
                </h2>
            </section>
            <section>
                <h4 className={styles.h4Visitas}>¿C&oacute;MO LLEGAR?</h4>
                <div className={styles.transporteContainer}>
                <div className={styles.transporte}>
                        <img src={auto} alt="Auto" width="90px" height="auto"/>
                        <p className={styles.pOrange}><span  className={styles.spanVisitas}>Si vas en auto</span></p>
                        <p className={styles.pVisitas}>Pod&eacute;s venir los d&iacute;as de visitas directamente con tu auto, sin que te anotes. Contamos con
                            estacionamiento en la puerta. Nos encontras ac&aacute;: <a className={styles.aVisitas}
                                href="https://g.page/elcampitorefugio?share">https://g.page/elcampitorefugio</a>
                        </p>
                    </div>
                    <div className={styles.transporte}>
                        <img src={combi} alt="Combi" width="80px" height="auto"/>
                        <p className={styles.pOrange}><span  className={styles.spanVisitas}>Combis al refugio</span></p>
                        <p className={styles.pVisitas}>Solo contratamos este servicio para determinados eventos, y siempre lo informamos en redes
                            sociales. Aqu&iacute; s&iacute; es necesario anotarse y reservar el asiento.</p>
                    </div>
                    <div className={styles.transporte}>
                        <img src={tren} alt="Tren" width="80px" height="auto"/>
                        <p className={styles.pOrange}><span  className={styles.spanVisitas}>Si vas en tren</span></p>
                        <p className={styles.pVisitas}>Pod&eacute;s venir en el tren Roca: te acercan los ramales GLEW y ALEJANDRO KORN. Desde all&iacute; deber&aacute;s
                            tomar un remis (hay varios en zona pero te aconsejamos que averigues previamente si est&aacute;n
                            trabajando)</p>
                    </div>
                </div>
            </section>
        </div>
    </main>
      
      <Footer />
    </div>
  );
};
export default Visitas;