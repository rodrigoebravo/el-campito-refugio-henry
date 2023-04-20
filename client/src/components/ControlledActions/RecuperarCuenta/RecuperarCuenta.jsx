import React, { useState } from "react";
import styles from "./RecuperarCuenta.module.css";
import { changePassword } from "../../../login";

const RecuperarCuenta = () => {
  const [input, setInput] = useState({
    email: "",
  });
  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }
  console.log(input);
  return (
    <div className={styles.div}>
      <h2 className={styles.text}>Recupear Cuenta</h2>
      <input
      className={styles.input}
        type="email"
        name="email"
        placeholder="Ingrese Su email"
        value={input.email}
        onChange={handleChange}
      ></input>
      <button className={styles.ButtonDashboard2}onClick={changePassword(input.email)}>Enviar</button>
    </div>
  );

};

export default RecuperarCuenta;