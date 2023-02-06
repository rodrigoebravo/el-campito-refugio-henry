import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import style from "./RegisterGoogle.module.css";

const RegisterGoogle = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div
      className={style.google_btn}
      onClick={loginWithRedirect}
    >
      {/* Login con google */}
      <div className={style.google_icon_wrapper}>
        <img
          className={style.google_icon}
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
          alt="imgGoogle"
        />
      </div>
      <p className={style.btn_text}>
        <b>Registrar con Google</b>
      </p>
    </div>
  );
};

export default RegisterGoogle;
