import React, { useState, useEffect } from "react";
import { registerUserGoogle, loginUserGoogle } from "../../login";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "@mui/material/Button";
import styles from "./ModalRegister.module.css";
import Loading from "../Loading/Loading";

const ModalRegister = () => {
  const { user, logout } = useAuth0();
  const [items, setItems] = useState([]);
  const [modal, setModal] = useState(false);
  const [contador, setContador] = useState(0);

  let itemslarge = items.length;
  let registerUsers = null;
  const registrar = () => {
    if (user) {
      registerUsers = {
        email: user.email,
        pass: user.name,
        name: user.name,
        image: user.picture,
      };
      // setTimeout(registerUserGoogle(registerUsers));
      // setTimeout(logout());
      // setTimeout()
      // logout()
      // console.log(registerUsers, "se registro");
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

  // let loginUsers = {}
  // if (user && items.length === 0) {
  //   loginUsers = {
  //     email: user.email,
  //     pass: user.name,
  //   };
  //   return loginUsers;
  // }

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
                // loginUserGoogle(loginUsers);
              }}
            >
              Cerrar
            </Button>
          </div>
        )}
      </div>
    );
  }
  // )(
  //   <div className={styles.modalDivsup}>
  //      <div className={styles.modalDiv}>
  //       </div><h2 className={styles.h2modal}>
  //         Confirmar registro de usuario con email: {user.email}
  //       </h2>
  // <Button
  //   variant="contained"
  //   onClick={() => {
  //     setContador(contador + 1);
  //     let info = registrar();
  //     let data = registerUserGoogle(info);
  //     data();
  //   }}
  // >
  //   Registrar
  // </Button>
  // </div>
  // </div>)

  // )
  /* {contador > 1 ? (
            <div className={styles.divInterno}> 
              <h4>
                Si ya tiene un email registrado puede cerrar el menu y
                Registrarse
              </h4>
              <Button
                variant="contained"
                onClick={() => {
                  logout();
                  window.location.reload();
                }}
              >
                Cerrar
              </Button>
            </div>
          ) : (
            <></>
          )} */
  else {
    // console.log(items.length);
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

  // else if (items && modal) {
  //   return (
  //     <div className={styles.modalDivsup}>
  //       <div className={styles.modalDiv}>
  //         <h2 className={styles.h2modal}>Bienvenido "{user.name}"</h2>
  //         <Button
  //           variant="contained"
  //           onClick={() => {
  //             logout();
  //           }}
  //         >
  //           Cerrar Login
  //         </Button>
  //       </div>
  //     </div>
  //   );
  // } else {
  //   console.log(items.length);
  //   return (
  //     <div className={styles.modalDivsup}>
  //       <div className={styles.modalDiv}>
  //         <h2 className={styles.h2modal}>Bienvenido "{user.name}"</h2>
  //       </div>
  //     </div>
  //   );
  // }
};

export default ModalRegister;
