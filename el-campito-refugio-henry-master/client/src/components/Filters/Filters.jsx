import React from "react";

const Filters = ({ filterGender ,filterAge,filterSize}) => {
  return (
    <div>
      <select
        onChange={(e) => {
          filterGender(e);
        }}
      >
        <option value={"All"}>Genero</option>
        <option value={"macho"}>Macho</option>
        <option value={"hembra"}>Hembra</option>
      </select>
      <select onChange={(e) => {
          filterAge(e);
        }}>
        <option value={"All"}>Edad</option>
        <option value={"adulto"}>adulto</option>
        <option value={"adulto jóven"}>adulto jóven</option>
        <option value={"viejito"}>viejito</option>
        <option value={"cachorro"}>cachorro</option>
        <option value={"especial"}>especial</option>
      </select>
      <select onChange={(e) => {
          filterSize(e);
        }}>
        <option value={"All"}>Tamaño</option>
        <option value={"chico"}>chico</option>
        <option  value={"mediano"}>mediano</option>
        <option value={"grande"}>grande</option>
      </select>
    </div>
  );
};

export default Filters;
