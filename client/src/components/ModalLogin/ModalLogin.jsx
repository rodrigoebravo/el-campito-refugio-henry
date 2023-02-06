import React, { useState, useEffect } from "react";
import { registerUserGoogle, loginUserGoogle } from "../../login";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "@mui/material/Button";
import styles from "./ModalLogin.module.css";

const ModalLogin = () => {
  const { user, logout } = useAuth0();
  const [items, setItems] = useState([]);
  const [modal, setModal] = useState(false);
  const [contador, setContador] = useState(0);

  let itemslarge = items.length;
  // let registerUsers = {};
  // if (user) {
  //   registerUsers = {
  //     email: user.email,
  //     pass: user.name,
  //     name: user.name,
  //     image: user.picture,
  //   };
  // }
  let registerUsers = null;
  const registrar = () => {
    if (user) {
      registerUsers = {
        email: user.email,
        pass: user.name,
        name: user.name,
        image: user.picture,
      };
      return registerUsers;
    }
  };

  console.log(itemslarge, "soy items large");

  if (user && items.length === 0) {
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
    setInterval(() => {
      setModal(true);
    }, 3000);
  }, []);

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
            }}
          >
            Registrar
          </Button>
        </div>
      </div>
    );
  } else if (items && modal) {
    return (
      <div className={styles.modalDivsup}>
        <div className={styles.modalDiv}>
          <h2 className={styles.h2modal}>Bienvenido "{user.name}"</h2>
          {contador > 0 ? (
            <Button
              variant="contained"
              onClick={() => {
                setContador(contador + 1);
                let info = registrar();
                let data = registerUserGoogle(info);
                data();
              }}
            >
              Confirmar Registro
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={() => {
                logout();
              }}
            >
              Cerrar
            </Button>
          )}
        </div>
      </div>
    );
  } else {
    console.log(items.length);
    return (
      <div className={styles.modalDivsup}>
        <div className={styles.modalDiv}>
          <h2 className={styles.h2modal}>Bienvenido "{user.name}"</h2>
          <Button variant="contained" disabled>
            Cerrar Login
          </Button>
        </div>
      </div>
    );
  }
};

export default ModalLogin;
