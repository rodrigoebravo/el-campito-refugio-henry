import React from "react";
import styles from "./NoAccess.module.css"

const NoAccess = () => {
  function goHome() {
    window.location = process.env.FRONT||"http://localhost:3000/";
  }
  setTimeout(goHome, 3000);

  return (
    <div className={styles.div}>
      <h2 className={styles.text}> 
        Usted no tiene los permisos para ingresar al panel de administrador
      </h2>
    </div>
  );
};

export default NoAccess;
