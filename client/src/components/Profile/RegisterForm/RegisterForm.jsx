import React, { useState } from "react";
import { registerFunction } from "../../../redux/actions/action";
import { useDispatch } from "react-redux";
import RegisterGoogle from "../../ProfileAuth0/RegisterGoogle/RegisterGoogle";
import styles from "./RegisterForm.module.css";
import Button from "@mui/material/Button";

function validate(input) {
  let errors = {};
  if (
    !input.name ||
    !input.name.trim().replace(/\s+/g, " ") ||
    !/[A-Za-z]+/g.test(input.name) ||
    /[0-9]+/g.test(input.name) ||
    input.name.length < 8
  ) {
    errors.name = "El Nombre no es valido.";
  }
  if (
    !input.email ||
    !input.email.trim().replace(/\s+/g, " ") ||
    !/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(input.email) ||
    input.email.length < 8
  ) {
    errors.email = "El email debe ser valido."; //.trim para quitar espacios vacios al principio y al final, .remplace para quitar espacios en blanco y expresion regular testeada con el .test para verificar que sea alfanumerico y
  } else if (
    !input.pass ||
    !/[a-zA-Z]+/.test(input.pass) ||
    !/[0-9]+/.test(input.pass) ||
    input.pass.length < 8
  ) {
    errors.pass = "Tu contraseña debe ser una combinación de letras y números";
  }

  return errors;
}

const RegisterForm = () => {
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    email: "",
    pass: "",
    name: "",
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    dispatch(registerFunction(input));
    console.log(input);
    window.location.reload();
    setInput({
      email: "",
      pass: "",
      name: "",
    });
  };

  return (
    <div className={styles.divContendor}>
      <div className={styles.divSubContendor}>
        <div className={styles.divSubContendor2}>
          <h2>Registrarse</h2>
          <form className={styles.form}>
            <input
              type="text"
              name="name"
              value={input.name}
              placeholder="Nombre"
              className={styles.input}
              onChange={handleChange}
            ></input>
            {errors.name && <p>{errors.name}</p>}
            <input
              type="email"
              name="email"
              value={input.email}
              placeholder="Email"
              className={styles.input}
              onChange={handleChange}
            ></input>
            {errors.email && <p>{errors.email}</p>}
            <input
              type="password"
              name="pass"
              value={input.pass}
              className={styles.inputPass}
              placeholder="Contraseña"
              onChange={handleChange}
            ></input>
            {errors.pass && <p>{errors.pass}</p>}

            {errors["pass"] || errors["email"] || input.email === ""? (
              <Button variant="contained" disabled>
                Registrarse
              </Button>
            ) : (
              <Button variant="contained" onClick={handleSubmitRegister}>Registrarse</Button>
            )}
          </form>
        </div>
        
        <RegisterGoogle className={styles.buttonLogin} />
        
      </div>

    </div>
  );
};

export default RegisterForm;
