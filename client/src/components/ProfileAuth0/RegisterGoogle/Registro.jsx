import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { registerUserGoogle } from "../../../login";
import Loading from "../../Loading/Loading";

const Registro = () => {
  const { user, logout } = useAuth0();
  if (user) {
    let registerUsers = {
      email: user.email,
      pass: user.name,
      name: user.name,
      image: user.picture,
    };
    setTimeout(registerUserGoogle(registerUsers));
    setTimeout(logout());
    // setTimeout()
    // logout()
  }

  return (
    <div>
      <Loading />
    </div>
  );
};

export default Registro;
