import axios from "axios";
import swal from "sweetalert";

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

export function updateProfile() {
  let dataRoles = "";
  return async function () {
    const localInfo = JSON.parse(localStorage.getItem("user"));
    const localInfoRole = JSON.parse(localStorage.getItem("user"));
    let id = localInfo.data?.info._id;
    let localRoles = localInfoRole.data?.info;
    const user = await axios.get(`/api/users/${id}`);

    dataRoles = user.data;

    if (
      localRoles.image === dataRoles.image &&
      localRoles.phone === dataRoles.phone &&
      localRoles.birthday === dataRoles.birthday &&
      dataRoles.roles.toString() === localRoles.roles.toString()
    ) {
      swal({
        title: "Tu perfil esta actualizado!",
        icon: "success",
        button: "Cerrar",
      });
    } else {
      localStorage.removeItem("user");
      swal({
        title: "Tu perfil se encuentra desactualizado, reinicia tu sesion",
        icon: "warning",
        button: "Cerrar",
      });
      window.location.reload();
    }
  };
}

export function loginUserGoogle(dataUser) {
  return async function () {
    try {
      const Login = await axios.post("/api/auth/login", dataUser);
      console.log(Login, "Soy Login de funcition login");
      localStorage.setItem("user", JSON.stringify(Login));
    } catch {
      alert("Error En iniciar sesión con Google,Pruba cambiando tu contraseña");
    }
  };
}

export function registerUserGoogle(dataUser) {
  return async function () {
    // validacion que no este registrado//
    const dataUsers = await axios.get("/api/users/");
    let data = dataUsers.data.map((e) => {
      return e.email;
    });
    let includes = data.includes(dataUser.email);
    if (!dataUser) return alert("Ingrese Informacion");
    if (includes) return alert("El Email Ya Fue Registrado");
    ///////////////////////////////////////////////////

    try {
      const registerData = await axios.post(
        "/api/auth/register",
        dataUser
      );
      registerData();
      console.log(registerData, "soy dATA ENVIDA");
      console.log(dataUser, "dATA ENVIDA");
      // localStorage.setItem("user", JSON.stringify(registerData));
      // window.location.reload();
      // console.log(registerData, "Soy data de fun register de login");
      registerData();
      alert("Se registro correctamente");
    } catch {
      // alert("ERROR AL REGISTRARSE");
    }
  };
}

export function emailAvailable(email) {
  return async function () {
    const dataUsers = await axios.get("/api/users/");
    let data = dataUsers.data.map((e) => {
      return e.email;
    });
    let localInfoRole = JSON.parse(localStorage.getItem("user"));
    // console.log(localInfoRole);

    let icludes = data.includes(email);
    let filtro = data.find((e) => e !== "");
    let userType = null;
    // if (filtro && !!localInfoRole === false) {
    //   console.log("No se ingreso email");
    //   return (userType = 1);
    // }
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

export function payWithPayPal(monto, names) {
  return async function () {
    const response = await axios.post(
      "/api/paypal/create-order",
      { monto, names }
    );
    console.log(monto, "soy monto login");
    console.log(response.data.links[1].href);
    window.location.href = response.data.links[1].href;
  };
}

export function editProfile(emailData, id) {
  return async function (req, res) {
    // traer el id y el usuario registrado de la bd con el email
    // luego comporbar que conicida el email con el ingresado anteriormente
    // modificar el valor de pass de db atravez de un put el valor ingresado

    await axios.put(
      `/api/users/${id}`,
      emailData
    );
    swal({
      title: "Cambios guardados!",
      icon: "success",
      button: "Cerrar",
    });
  };
}

export function changePassword(emailData) {
  return async function (req, res) {
    const dataUsers = await axios.get("/api/users/");
    let data = dataUsers.data.map((e) => {
      let objEmail = e.email;
      let objId = e._id;
      let info = { email: objEmail, id: objId };
      return info;
    });
    let edit = data.find((e) => e.email === emailData);
    if (!edit) return alert("No se encontro email");

    let email = edit?.email;
    let id = edit?.id;

    if (edit) {
      const recoveryEmail = await axios.post(
        "/api/password/",
        { email, id }
      );
      console.log(recoveryEmail);
    }
    alert("Se envio un correo para recuperar tu cuenta.");
    window.location = "/";
  };
}

export function updatePassword(obj) {
  return async function (req, res) {
    try {
      // let {obj} = req.body
      console.log(obj, "soy id de update");
      console.log(obj.pass);
      let pass = obj.pass;
      let id = obj.id;
      console.log(pass, "soy pass");
      console.log(id, "soy id");
      const recoveryEmail = await axios.put(
        `/api/users/password/${id}`,
        { pass }
      );
      console.log(recoveryEmail, "soy id");
      alert("Se Cambio tu contaseña.");
      window.location = "/";
    } catch {
      alert("Hubo un error al cambiar la contraseña");
    }
  };
}

export function dataProfile(id) {
  return async function () {
    const userEmail = await axios.get(`/api/users/${id}`);
    let dataProfile = userEmail.data.email;
    console.log(dataProfile);
    return dataProfile;
  };
}

// export function sendMail(emailData) {
//   return async function (req, res) {
//     const recoveryEmail = await axios.post(
//       "http://localhost:3001/api/password/"
//     );
//     console.log(recoveryEmail);
//   };
//   alert("Se envio un correo para recuperar tu cuenta.");
//   window.location = "http://localhost:3000/";
// }
