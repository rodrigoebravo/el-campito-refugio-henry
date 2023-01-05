import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { registerUserGoogle,emailAvailable } from "../../../login";

const Registro = () => {
  const { user } = useAuth0();
  let registerUsers = null;
  let email = ""
  // console.log(user, "soy user2");
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
  // console.log(registerUsers,"soy registrar")
  if(user){
    email = user.email
    console.log(email)
  }

  return (
    <div>
      <h2>Registrate</h2>
      <button
        onClick={() => {
          let info = registrar()
          let data = registerUserGoogle(info);
          data()
        }}
      >
        x
      </button>
      <button onClick={emailAvailable(email)}>
        zz
      </button>
    </div>
  );
};

export default Registro;
