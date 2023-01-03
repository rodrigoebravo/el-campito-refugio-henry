import React, { useEffect } from "react";
import {
  getDogsDetails,
  clearDetails,
  clearDogs,
} from "../../../redux/actions/action";
import { useDispatch, useSelector } from "react-redux";

export const AdminDogsDetails = (props) => {
  const dispatch = useDispatch();
  const detailsDogs = useSelector((state) => state.detailsDogs);

  useEffect(() => {
    dispatch(getDogsDetails(props.match.params.id));
    dispatch(clearDetails());
    dispatch(clearDogs());
  }, [dispatch, props.match.params.id]);

  if (!detailsDogs) {
    return <h2>Error en traer Perros</h2>;
  } else if (detailsDogs.length === 0) {
    return <h2>Cargando</h2>;
  } else {
    return (
      <div>
        {detailsDogs.images.map((img) => {
          return <img key={img} alt="imgdog" src={img}></img>;
        })}
        <h3>Nombre: {detailsDogs.name}</h3>
        <h3>Genero: {detailsDogs.gender}</h3>
        <h3>Edad: {detailsDogs.age}</h3>
        <h3>Tamaño: {detailsDogs.size}</h3>
        <h3>Raza: {detailsDogs.race}</h3>
        <h3>Caracteristicas: {detailsDogs.features}</h3>
        <h3>Referencias:</h3>
        {detailsDogs.references.map((ref) => {
          return <h3 key={ref}> {ref}</h3>;
        })}
      </div>
    );
  }
};
