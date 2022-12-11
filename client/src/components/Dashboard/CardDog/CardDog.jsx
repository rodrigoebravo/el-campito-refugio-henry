import React from "react";
import style from "./CardDog.module.css";

const CardDog = ({  img, name, gender, age }) => {
  return (
    <div className={style.divCard} >
      <div className={style.div}>
        <img className={style.imgCard} src={img} alt="img_dog"></img>
      </div>
      <div className={style.div}>
        <h3 className={style.name}>{name}</h3>
      </div>
      <div className={style.div}>
        <h3>{gender}</h3>
      </div>
      <div className={style.div}>
        <h3>{age}</h3>
      </div>
    </div>
  );
};

export default CardDog;
