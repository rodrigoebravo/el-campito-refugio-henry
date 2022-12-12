import { React } from "react";
import style from "./Visitas.module.css";
import auto from "../../img/transporte/auto.svg";
import combi from "../../img/transporte/combi.svg";
import tren from "../../img/transporte/tren.svg";
import Footer from "../Footer/Footer";
import Navbar from "../NavBar/NavBar";

const Visitas = () => {
  return (
    <div>
      <Navbar />

      <div className={style.div}>
        <h1>visitas</h1>
        <p>
          Por ahora las visitas están suspendidas hasta nuevo aviso, pero igual
          queremos contarte de qué se trata: <br></br>
          Los sábados son las visitas al refugio, excepto el primer fin de
          semana de cada mes que pasa al domingo. Si llueve se suspende, así que
          si tenes dudas antes de salir para el refugio chequeá nuestras redes
          sociales.
          <br></br>
          Recordá traer correas, lapiceras para llenar los cuestionarios de
          salud, repelente y protector solar (para el verano), abrigo (para el
          invierno) y lo que quieras para pasar el día (bebida, comida,
          reposeras, etc.) Vení a llenarte el alma ayudándolos, dándoles amor a
          nuestros camperitos y compartiendo con nosotros una hermosa tarde.
        </p>
        <h3>Punto de encuentro</h3>
        <div className={style.puntosDeEncuentro}>
          <div className={style.divImg}>
            <img src={auto} className={style.visitasImg} alt="auto img" />
            <h4>Si vas en auto</h4>
            <p className={style.pPuntosDeEncuentro}>
              Nos encontramos en Av. Hipólito Yrigoyen al 18500, Longchamps, en
              la estación de servicio AXION a las 13.00 hs. De ahí partimos
              PUNTUALMENTE a las 13.30 hs. en caravana hacia el refugio. La
              estación de servicio es sólo un punto de encuentro ya que el
              refugio queda en zona rural, alejado
            </p>
          </div>
          <div className={style.divImg}>
            <img src={combi} className={style.visitasImg} alt="combi img" />
            <h4>Combis al refugio</h4>
            <p className={style.pPuntosDeEncuentro}>
              {" "}
              Las combis salen del centro porteño hacia el refugio y a la vuelta
              te dejan en el Obelisco. Para más información y para reservar tu
              lugar, tenés que escribir CON ANTICIPACION a:
              campitotraslado@gmail.com. Otras Combis
              (https://www.fullbus.com.ar) Otra opción es este servicio de
              combis,Fullbus, que te dejan en la AXION (previo aviso).s
            </p>
          </div>
          <div className={style.divImg}>
            <img src={tren} className={style.visitasImg} alt="tren img" />
            <h4>Si vas en tren</h4>
            <p className={style.pPuntosDeEncuentro}>
              {" "}
              Tren Roca: te acercan los ramales GLEW y ALEJANDRO KORN. Consultá
              los horarios en la web: https://www.trenroca.com.ar/
              horarios/constitucion-temperley.php Bajate en la estación
              LONGCHAMPS y caminá unas cuadras hasta la estación de servicio
              AXION y calculá bien el horario del transporte para empalmarcon la
              salida de la caravana.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default Visitas;
