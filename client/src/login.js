import axios from "axios";

export function loginUser(dataUser) {
  return async function () {
    if (dataUser.length || !dataUser) {
      alert("Ingrese algun dato");
    }
    try {
      let data = {};
      const Login = await axios.post("/api/auth/login", dataUser);
      // console.log(Login, "Soy Login");
      localStorage.setItem("user", JSON.stringify(Login));
      data = Login.data.info;
      window.location.reload();
      return data;
    } catch (error) {
      console.log(error, "No pudo loguearse");
      alert("El email o la contraseña no coinciden");
    }
  };
}

export function updateRole() {
  let dataRoles = "";
  return async function () {
    const localInfo = JSON.parse(localStorage.getItem("user"));
    const localInfoRole = JSON.parse(localStorage.getItem("user"));
    let id = localInfo.data?.info._id;
    let localRole = localInfoRole.data?.info.roles;
    const user = await axios.get(`http://localhost:3001/api/users/${id}`);

    dataRoles = user.data.roles;
    if (dataRoles !== localRole) {
      localStorage.removeItem("user");
      window.location.reload();
      console.log("Hay que actualizar");
    } else {
      console.log("Todo bien");
    }
    return dataRoles;
  };
}

export function loginUserGoogle(dataUser) {
  return async function () {
    try {
      const Login = await axios.post("/api/auth/login", dataUser);
      console.log(Login, "Soy Login de funcition login");
      localStorage.setItem("user", JSON.stringify(Login));
      // window.location.reload();
      // console.log(data, "Soy data");
    } catch {
      alert("eror");
    }
  };
}

export function registerUserGoogle(dataUser) {
  return async function () {
    // validacion que no este registrado//
    const dataUsers = await axios.get("http://localhost:3001/api/users/");
    let data = dataUsers.data.map((e) => {
      return e.email;
    });
    let includes = data.includes(dataUser.email);
    if (!dataUser) return alert("Ingrese Informacion");
    if (includes) return alert("El Email Ya Registrado");
    ///////////////////////////////////////////////////

    try {
      const registerData = await axios.post(
        "http://localhost:3001/api/auth/register",
        dataUser
      );
      registerData();
      console.log(registerData, "soy dATA ENVIDA");
      console.log(dataUser, "dATA ENVIDA");
      localStorage.setItem("user", JSON.stringify(registerData));
      // window.location.reload();
      // console.log(registerData, "Soy data de fun register de login");
      registerData();
      alert("se pudo");
    } catch {
      alert("ERROR AL REGISTRARSE");
    }
  };
}

export function emailAvailable(email) {
  return async function () {
    const dataUsers = await axios.get("http://localhost:3001/api/users/");
    let data = dataUsers.data.map((e) => {
      return e.email;
    });
    let localInfoRole = JSON.parse(localStorage.getItem("user"));
    // console.log(localInfoRole);

    let icludes = data.includes(email);
    let filtro = data.find((e) => e !== "");
    let userType = null;
    if (filtro && !!localInfoRole === false) {
      console.log("No se ingreso email");
      return (userType = 1);
    }
    if (!!localInfoRole) {
      console.log("Estoy logueado");
      return (userType = 2);
    }
    if (icludes) {
      console.log("No disponible");
      return (userType = 3);
    }
    if (!icludes && !filtro) {
      console.log("Disponible");
      userType = 4;
      return userType;
    }
  };
}

export function payWithPayPal() {
  return async function () {
    const response = await axios.post(
      "http://localhost:3001/api/paypal/create-order"
    );
    console.log(response.data.links[1].href);
    // const data = response;
    window.location.href = response.data.links[1].href;
    // console.log(data);
  };
}

export function captureData() {
  return async function (req, res) {
    let { token } = await req.query;

    console.log(token);
  };
}

// if (user) {
//   let loginUsers = {
//     email: user.email,
//     pass: user.name,
//   };

//   setTimeout(loginUserGoogle(loginUsers));
//   // logout()
// }

// if(user && !items){
//   let registerUsers = {
//     email: user.email,
//     pass: user.name,
//     name:user.name,
//     image:user.picture
//   };
//   // setTimeout()
//   // logout()
//   setTimeout(registerUserGoogle(registerUsers))
//   let register = emailAvailable(user.email)
//   if(register) {
//     let loginUsers = {
//       email: user.email,
//       pass: user.name,
//     }
//     setTimeout(loginUserGoogle(loginUsers));
//   }
// }

// }
