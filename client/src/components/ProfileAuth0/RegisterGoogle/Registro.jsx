import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { registerUserGoogle } from "../../../login";

const Registro = () => {
  const { user, logout } = useAuth0();

  const registrar = () => {
    if (user) {
      let registerUsers = {
        email: user.email,
        pass: user.name,
        name: user.name,
        image: user.picture,
      };
      // setTimeout(registerUserGoogle(registerUsers));
      // setTimeout(logout());
      // setTimeout()
      // logout()
      return registerUsers;
    }
  };

  return (
    <div>
      <h2>Registrate</h2>
      <button
        onClick={() => {
          registerUserGoogle(registrar);
          logout();
        }}
      >
        x
      </button>
    </div>
  );
};

export default Registro;
