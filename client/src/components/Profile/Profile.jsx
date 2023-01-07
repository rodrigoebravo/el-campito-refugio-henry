import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import styles from "./Profile.module.css";
import LoginForm from "./LoginForm/LoginForm";
import RegisterForm from "./RegisterForm/RegisterForm";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Registro from "../ProfileAuth0/RegisterGoogle/Registro";
import Loading from "../Loading/Loading";
import { updateRole } from "../../login";

const Profile = () => {
  const [items, setItems] = useState([]);
  const { user, isLoading, logout } = useAuth0();

  const [buttonClicked, setButtonClicked] = useState(false);

  let handleButtonClick = () => {
    setButtonClicked(!buttonClicked);
  };
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("user"));
    if (items) {
      setItems(items);
    }
  }, []);

  // console.log(items, "soy items");
  function logoutSession() {
    localStorage.removeItem("user");
    window.location.reload();
  }

  if (isLoading) {
    return <Registro />;
  } else if (items.length === 0 && user) {
    return <Loading />;
  } else {
    return (
      <div className={styles.divUserData}>
        {items.data?.info ? (
          <div className={styles.divUserData}>
            <div className={styles.divNabBar}>
              <h2>{items.data?.info.name}</h2>
              {!items.data?.info.image ? (
                <div className={styles.img}>
                  <AccountCircleIcon />
                </div>
              ) : (
                <div>
                  <img
                    className={styles.img}
                    src={items.data?.info.image}
                    alt={items.data?.info.name}
                  ></img>
                </div>
              )}
            </div>
            <div className={styles.divCard}>
              {!items.data?.info.image ? (
                <></>
              ) : (
                <img
                  className={styles.img2}
                  src={items.data?.info.image}
                  alt={items.data?.info.name}
                ></img>
              )}
              <h2>Email: {items.data?.info.email}</h2>
              <h2>
                Tu rol de usuario es:{" "}
                {items.data?.info.roles.map((e) => e + " ")}
              </h2>
              {items.data?.info.roles.includes("admin") ||
              items.data?.info.roles.includes("super") ? (
                <h4>Puedes acceder al Panel de administrador</h4>
              ) : (
                <h4>Tu rol no te permite realizar ciertas acciones</h4>
              )}
              <div className={styles.divButtons}>
                {items.data?.info.roles.includes("admin") ||
                items.data?.info.roles.includes("superAdmin") ? (
                  <Link to="/admin" className={styles.ButtonDashboard}>
                    Panel Admin
                  </Link>
                ) : (
                  <></>
                )}

                <Link to="/" className={styles.ButtonDashboard2}>
                  Home
                </Link>
                <Link to="/profile/edit" className={styles.ButtonDashboard2}>
                  Editar Perfil
                </Link>
                <buton
                  className={styles.ButtonDashboard2}
                  onClick={() => {
                    let update = updateRole();
                    update();
                    console.log("CLICK");
                  }}
                >
                  Actualizar Estado
                </buton>

                <button
                  className={styles.ButtonDashboard3}
                  onClick={() => {
                    const funcion1 = logoutSession;
                    const funcion2 = logout;
                    funcion1();
                    funcion2();
                  }}
                >
                  Cerrar Sesión
                </button>
                {/* <UserDBRegister/> */}
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.divLogins}>
            <div className={styles.divSubLogins}>
              {buttonClicked ? (
                <>
                  <RegisterForm />

                  <h2>
                    Si ya tienes cuenta
                    <span onClick={handleButtonClick} className={styles.span}>
                      Inicia Sesión
                    </span>
                  </h2>
                  <Link to="/" className={styles.ButtonDashboard2}>
                    Home
                  </Link>
                </>
              ) : (
                <>
                  <LoginForm />

                  <h2>
                    Si no tienes cuenta
                    <span onClick={handleButtonClick} className={styles.span}>
                      registrate
                    </span>
                  </h2>
                  <Link to="/" className={styles.ButtonDashboard2}>
                    Home
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
};

export default Profile;
