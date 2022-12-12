import React, { useEffect, useState } from "react";
import {
  getDogsDetails,
  clearDetails,
  clearDogs,
} from "../../redux/actions/action";
import { useDispatch, useSelector } from "react-redux";
import style from "./CardDogDetails.module.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Loading from "../Loading/Loading";

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
      <div className={style.divContenedor}>
        <Link to={"/adoptar/perros/"} className={style.btnBack}>
          <ArrowBackIcon />
        </Link>
        <div className={style.divImgs}>
          {photoActual !== 0 ? (
            <Button
              className={style.btnButton}
              variant="contained"
              sx={{ margin: "0 1rem" }}
              onClick={() => setPhotoActual(photoActual - 1)}
            >
              prev
            </Button>
          ) : (
            <Button
              className={style.btnButton}
              variant="contained"
              disabled
              sx={{ margin: "0 1rem" }}
              onClick={() => setPhotoActual(photoActual - 1)}
            >
              prev
            </Button>
          )}
          <img
            className={style.imgDog}
            alt="imgsola"
            src={detailsDogs.images[photoActual]}
          ></img>

          {photoActual >= 0 && detailsDogs.images.length - 1 > photoActual ? (
            <Button
              variant="contained"
              sx={{ margin: "0 1rem" }}
              onClick={() => setPhotoActual(photoActual + 1)}
            >
              next
            </Button>
          ) : (
            <Button
              variant="contained"
              disabled
              sx={{ margin: "0 1rem" }}
              onClick={() => setPhotoActual(photoActual + 1)}
            >
              next
            </Button>
          )}
        </div>
        <div className={style.divCaracteristicas}>
          <h3>Nombre: {detailsDogs.name}</h3>

          <h3>
            Genero:{detailsDogs.gender ? detailsDogs.gender : <>No hay info</>}
          </h3>
          <h3>Edad: {detailsDogs.age ? detailsDogs.age : <>No hay info</>}</h3>
          <h3>
            Tamaño: {detailsDogs.size ? detailsDogs.size : <>No hay info</>}
          </h3>
          <h3>
            Raza: {detailsDogs.race ? detailsDogs.size : <>No hay info</>}
          </h3>
          <h3>
            Caracteristicas:{" "}
            {detailsDogs.features ? detailsDogs.features : <>No hay info</>}
          </h3>
          <h3>Referencias:</h3>
          {detailsDogs.references ? (
            detailsDogs.references.map((ref) => {
              return <h3 key={ref}> {ref}</h3>;
            })
          ) : (
            <>No hay info</>
          )}
        </div>
      </div>
    );
  }
};

export default CardDogDetails;
