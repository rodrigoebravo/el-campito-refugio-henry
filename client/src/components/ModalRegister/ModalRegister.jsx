import React, { useState, useEffect } from "react";
import { registerUserGoogle } from "../../login";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "@mui/material/Button";
import styles from "./ModalRegister.module.css";
import Loading from "../Loading/Loading";

const ModalRegister = () => {
  const { user, logout } = useAuth0();
  const [items, setItems] = useState([]);
  const [modal, setModal] = useState(false);
  const [contador, setContador] = useState(0);

  // let itemslarge = items.length;
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

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("user"));
    if (items) {
      setItems(items);
    }
    setInterval(() => {
      setModal(true);
    }, 3000);
  }, []);
  console.log(user);

  if (items && modal) {
    return (
      <div className={styles.modalDivsup}>
        {contador < 2 ? (
          <div className={styles.modalDiv}>
            <h2 className={styles.h2modal}>
              Confirmar registro de usuario con email: {user.email}
            </h2>
            <Button
              variant="contained"
              onClick={() => {
                setContador(contador + 1);
                let info = registrar();
                let data = registerUserGoogle(info);
                data();
              }}
            >
              Registrar
            </Button>
          </div>
        ) : (
          <div className={styles.modalDiv}>
            <h2 className={styles.h2modal}>
              Si usted ya esta registrado puede cerrar este menu y loguearse
            </h2>
            <Button
              variant="contained"
              onClick={() => {
                logout();
              }}
            >
              Cerrar
            </Button>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className={styles.modalDivsup}>
        <div className={styles.modalDiv}>
          <div className={styles.divLoader}>
            <Loading></Loading>
          </div>
          {/* <h2 className={styles.h2modal}>Bienvenido "{user.name}"</h2>
          <Button variant="contained" disabled>
            Cerrar
          </Button> */}
        </div>
      </div>
    );
  }
};

export default ModalRegister;
