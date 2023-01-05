import React, { useEffect, useState } from "react";
import {
  getDogsDetails,
  clearDetails,
  clearDogs,
} from "../../redux/actions/action";
import { useDispatch, useSelector } from "react-redux";
import styles from "./CardDogDetails.module.css";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";

import Footer from "../Footer/Footer"
 


const CardDogDetails = (props) => {
  const dispatch = useDispatch();
  const detailsDogs = useSelector((state) => state.detailsDogs);

  const [photoActual, setPhotoActual] = useState(0);
  useEffect(
    (e) => {
      dispatch(getDogsDetails(props.match.params.id));
      return function () {
        dispatch(clearDetails());
        dispatch(clearDogs());
      };
    },
    [dispatch, props.match.params.id]
  );

  

  if (!detailsDogs) {
    return <Loading />;
  } else if (detailsDogs.length === 0) {
    return <Loading />;
  } else {
    
    return (
      <div className={styles.divContenedor}>

        <div className={styles.divImgs}>
          {photoActual !== 0 ? (
            <button
              className={styles.btnButton}
              onClick={() => setPhotoActual(photoActual - 1)}
            >
              prev
            </button>
          ) : (
            <button
              className={styles.btnButton}
              disabled
              onClick={() => setPhotoActual(photoActual - 1)}
            >
              prev
            </button>
          )}
          <img
            className={styles.imgDog}
            alt="imgsola"
            src={detailsDogs.images[photoActual]}
          ></img>

          {photoActual >= 0 && detailsDogs.images.length - 1 > photoActual ? (
            <button 
            className={styles.btnButton}
              onClick={() => setPhotoActual(photoActual + 1)}
            >
              next
            </button>
          ) : (
            <button
              className={styles.btnButton}
              disabled
              onClick={() => setPhotoActual(photoActual + 1)}
            >
              next
            </button>
          )}
        </div>

        <div className={styles.divCaracteristicas}>

          <p>
            <span>Nombre: </span>
            {detailsDogs.name}
          </p>

          <p>
            <span>Genero: </span>
            {detailsDogs.gender ? detailsDogs.gender : <>No hay info</>}
          </p>
          <p>
            <span>Edad: </span>
            {detailsDogs.age ? detailsDogs.age : <>No hay info</>}
          </p>
          <p>
            <span>Tamaño: </span>
            {detailsDogs.size ? detailsDogs.size : <>No hay info</>}
          </p>
          <p>
            {" "}
            <span>Raza: </span>{" "}
            {detailsDogs.race ? detailsDogs.size : <>No hay info</>}
          </p>

          <p>
            <span>Caracteristicas: </span>{" "}
            {detailsDogs.features ? detailsDogs.features : <>No hay info</>}
          </p>

          <p>
            <span>Referencias: </span>{" "}
          </p>
          
          {detailsDogs.references ? (
            detailsDogs.references.map((ref) => {
              return <p key={ref}> {ref}</p>;
            })
          ) : (
            <>No hay info</>
          )}
        </div>

        <p>
          <span>
            Si quer&eacute;s adoptar completa el siguiente formulario:
          </span>
        </p>
        <Link
          className={styles.buttonAdoptar}
          to={`/adoptionForm/${detailsDogs.name}`}
        >
          ADOPTAME
        </Link>
        <p>
          <span>Si quer&eacute;s colaborar podes hacerlo en:</span>
        </p>
        <Link
          to={`/colaborar/${detailsDogs.name}`}
          className={styles.buttonAdoptar}
        >
          APADRINAR
        </Link>
        
        <Footer />
        
      </div>
    );
  }
};

export default CardDogDetails;