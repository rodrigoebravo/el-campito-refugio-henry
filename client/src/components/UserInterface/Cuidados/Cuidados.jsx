import React from "react";
import BarraDeNavegacion from "../BarraDeNavegacion/BarraDeNavegacion";
import Footer from "../Footer/Footer";
import styles from "./Cuidados.module.css"
import imgVoluntario2 from "../../../assets/img/escolar/img-voluntarios2.jpg"
import imgVoluntario3 from "../../../assets/img/escolar/img-voluntarios3.jpg"
import imgVoluntario4 from "../../../assets/img/escolar/img-voluntarios4.jpg"
import imgVoluntario5 from "../../../assets/img/escolar/img-voluntarios5.jpg"
import imgVoluntario6 from "../../../assets/img/escolar/img-voluntarios6.jpg"
import imgVoluntario7 from "../../../assets/img/escolar/img-voluntarios7.jpg"
import imgVoluntario8 from "../../../assets/img/escolar/img-voluntarios8.jpg"
import imgVoluntario9 from "../../../assets/img/escolar/img-voluntarios9.jpg"

const Cuidados = () => {
  return (
    <div className={styles.container}>
    <BarraDeNavegacion/>
      <main className={styles.parentColumn} id="main">
        <div className={styles.parent}>
            <section className={styles.sectionCuidados}>
                <h2 className={styles.h2cuidados}>CUIDADOS DENTRO DEL REFUGIO</h2>
                <p className={styles.pCuidados}>En todos los años que El Campito lleva adelante tareas de recuperaci&oacute;n, son incontables los casos con
                    los que trabajamos mano a pata.
                </p>
                <p className={styles.pCuidados}>Aqui les compartimos algunos de los casos de recuperaci&oacute;n y metamorfosis que tuvimos. El Campito
                    apuesta a la vida. Acompañamos a nuestros rescataditos y luchamos para devolverles la dignidad y el
                    respeto que se merecen. Observen atentamente las miradas antes y despu&eacute;s de la recuperaci&oacute;n, esas
                    sonrisas que nos regalan cuando ya se sienten bien, tranquilos y felices.
                </p>
                <p className={styles.pCuidados}>Algunos han tenido una vida muy dura, pero por suerte, se han cruzado en su camino personas de gran
                    coraz&oacute;n que han pedido por ellos, nosotros que los recibimos devolvi&eacute;ndoles la dignidad, y las
                    madrinas y padrinos que los acompañan durante el proceso de recuperaci&oacute;n cubriendo sus necesidades.
                    Algunos fueron felizmente adoptados, otros ya son estrellitas y otros todav&iacute;a esperan una familia.
                </p>
            </section>
        </div>
        {/* <section className={styles.boxContainer}>
            <div className={styles.box}>
                <img src={imgVoluntario2} className={styles.imgCuidados} alt="" />
            </div>
            <div className={styles.box}>
                <img src={imgVoluntario3} alt="" className={styles.imgCuidados} />
            </div>
            <div className={styles.box}>
                <img src={imgVoluntario4} alt="" className={styles.imgCuidados}/>
            </div>
            <div className={styles.box}>
                <img src={imgVoluntario5} alt="" className={styles.imgCuidados}/>
            </div>
            <div className={styles.box}>
                <img src={imgVoluntario6} alt="" className={styles.imgCuidados}/>
            </div>
            <div className={styles.box}>
                <img src={imgVoluntario7} alt=""  className={styles.imgCuidados}/>
            </div>
            <div className={styles.box}>
                <img src={imgVoluntario8} alt=""  className={styles.imgCuidados}/>
            </div>
            <div className={styles.box}>
                <img src={imgVoluntario9} alt=""  className={styles.imgCuidados}/>
            </div>
        </section> */}
        <div>
         <section className={styles.sectionCuidados}>
                <h2 className={styles.h2cuidados}>LOS DISCAS</h2>
                <p className={styles.pCuidados}>Son perros paral&iacute;ticos, ciegos, o con tres patas.
                    Somos el &uacute;nico refugio del mundo que cuida 130 perros que para trasladarse necesitan carros, como
                    sillas de rueda, y cuidados muy especiales.
                    Es a trav&eacute;s de esta tarea que el refugio cumple un rol muy importante en la sociedad, al abrir las
                    puertas y permitir crear nexos entre los visitantes y estos perritos que, a lo largo de sus vidas,
                    enseñan desde las bases el amor y el respeto, no solo por los animales, sino tambi&eacute;n por las
                    personas.
                </p>
                <p className={styles.pCuidados}>Es sumamente importante saber que un animal discapacitado no se auto-compadece, ni tampoco sus
                    compañeros hacen diferencias. Para un animal las discapacidades son algo con lo que aprenden a
                    manejarse, sin sentirse menoscabado.
                    No tienen conciencia sobre las diferencias que pueden existir con otros animales y, por sobre todas
                    las cosas, pueden ser plenamente felices.
                </p>
                <p className={styles.pCuidados}>Muchos habitantes del club son adoptados y tienen una vida digna y llena de amor al lado de los que
                    abren las puertas de su coraz&oacute;n, de su hogar y los integran a la familia.</p>

            </section>
        </div>
        <section className={styles.boxContainer}>
            <div className={styles.box}>
                <img src={imgVoluntario2} className={styles.imgCuidados} alt="" />
            </div>
            <div className={styles.box}>
                <img src={imgVoluntario3} alt="" className={styles.imgCuidados} />
            </div>
            <div className={styles.box}>
                <img src={imgVoluntario4} alt="" className={styles.imgCuidados}/>
            </div>
            <div className={styles.box}>
                <img src={imgVoluntario5} alt="" className={styles.imgCuidados}/>
            </div>
            <div className={styles.box}>
                <img src={imgVoluntario6} alt="" className={styles.imgCuidados}/>
            </div>
            <div className={styles.box}>
                <img src={imgVoluntario7} alt=""  className={styles.imgCuidados}/>
            </div>
            <div className={styles.box}>
                <img src={imgVoluntario8} alt=""  className={styles.imgCuidados}/>
            </div>
            <div className={styles.box}>
                <img src={imgVoluntario9} alt=""  className={styles.imgCuidados}/>
            </div>
        </section>
    </main>
    <Footer />
    </div>)
  }

  
export default Cuidados;
