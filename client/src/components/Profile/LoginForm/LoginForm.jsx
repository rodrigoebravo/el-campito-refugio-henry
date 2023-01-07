import React, { useState } from "react";
import { loginUser } from "../../../login";
import Button from "@mui/material/Button";
import LoginGoogle from "../../ProfileAuth0/LoginGoogle/LoginGoogle";
import styles from "./LoginForm.module.css";

function validate(input) {
  let errors = {};
  if (
    !input.email ||
    !input.email.trim().replace(/\s+/g, " ") ||
    !/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(input.email) ||
    input.email.length < 8
  ) {
    errors.email = "El email debe ser valido."; //.trim para quitar espacios vacios al principio y al final, .remplace para quitar espacios en blanco y expresion regular testeada con el .test para verificar que sea alfanumerico y
  } else if (
    !input.pass ||
    input.pass.length < 8 ||
    !/[A-Za-z0-9]+/g.test(input.pass)
  ) {
    errors.pass =
      "Tu contraseña debe tener mas de 8 caracteres y ser una combinación de letras y números.";
  }

  return errors;
}

const LoginForm = () => {
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    email: "",
    pass: "",
  });
  const [contador, setContador] = useState(0);

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

  const handleSubmitLogin = async () => {
    setInput({
      email: "",
      pass: "",
    });
  };

  return (
    <div className={styles.divContendor}>
      <div className={styles.divSubContendor}>
        <div className={styles.divSubContendor2}>
          <h2>Iniciar Sesión</h2>
          <form className={styles.form}>
            <input
              type="email"
              name="email"
              value={input.email}
              placeholder="Email"
              onChange={handleChange}
              className={styles.input}
            ></input>
            {errors.email && <p>{errors.email}</p>}
            <input
              type="password"
              name="pass"
              value={input.pass}
              placeholder="Contraseña"
              onChange={handleChange}
              className={styles.input}
            ></input>
            {errors.pass && <p>{errors.pass}</p>}
          </form>
          {errors["pass"] ||
          errors["email"] ||
          input.email === "" ||
          input.pass === "" ? (
            <Button variant="contained" disabled>
              Iniciar Sesión
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={() => {
                setContador(contador + 1);
                const funcion1 = loginUser(input);
                const funcion2 = handleSubmitLogin;
                funcion1();
                funcion2();
              }}
            >
              Iniciar Sesión
            </Button>
          )}
          {contador < 2 ? (
            <></>
          ) : (
            <div>
              <h3>
                Recuperar cuenta <button>x</button>
              </h3>
            </div>
          )}
        </div>

        <LoginGoogle className={styles.loginGoogle} />
      </div>
    </div>
  );
};

export default LoginForm;
