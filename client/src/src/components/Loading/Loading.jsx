import React from "react";
import style from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={style.contenedor}>
      <div className={style.ellipsis}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
