import React, { useState } from "react";
import { useHistory } from "react-router";
import { updatePassword } from "../../../login";
import styles from "./ChangePassword.module.css";


const ChangePassword = () => {
  const history = useHistory();
  const [input, setInput] = useState({
    pass: "",
  });
  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }
  let id = history.location.pathname.replace("/cambiarPassword/", "");

  let obj = {
    pass: input.pass,
    id: id,
  };
  return (
    <div className={styles.div}>
      <input className={styles.input}
        name="pass"
        type="password"
        value={input.pass}
        onChange={handleChange}
        placeholder="Ingresar Contraseña Nueva"
      ></input>
      <button className={styles.ButtonDashboard2} onClick={updatePassword(obj)}>
        Cofirmar
      </button>
    </div>
  );
};

export default ChangePassword;
