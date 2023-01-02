import React, { useState, useEffect } from "react";
import { registerUserGoogle, loginUserGoogle } from "../../login";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "./Modal.module.css";
import Button from "@mui/material/Button";

const Modal = () => {
  const { user, logout } = useAuth0();
  const [items, setItems] = useState([]);
  let registerUsers = {};
  if (user) {
    registerUsers = {
      email: user.email,
      pass: user.name,
      name: user.name,
      image: user.picture,
    };
  }

  if (user) {
    let loginUsers = {
      email: user.email,
      pass: user.name,
    };

    setTimeout(loginUserGoogle(loginUsers));
  }

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("user"));
    if (items) {
      setItems(items);
    }
  }, []);
  // console.log(items, "soy items");

  if (user && !items) {
    return (
      <div className={styles.modalDivsup}>
        <div className={styles.modalDiv}>
          <h2 className={styles.h2modal}>
            Confirmar registro de usuario con email: {user.email}
          </h2>
          <Button
            variant="contained"
            onClick={() => {
              registerUserGoogle(registerUsers);
              logout();
            }}
          >
            Continuar
          </Button>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.modalDivsup}>
        <div className={styles.modalDiv}>
          <h2 className={styles.h2modal}>Bienvenido "{user.name}"</h2>
          <Button
            variant="contained"
            onClick={() => {
              logout();
            }}
          >
            Continuar
          </Button>
        </div>
      </div>
    );
  }
};

export default Modal;
