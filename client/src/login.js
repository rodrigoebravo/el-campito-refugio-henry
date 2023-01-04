import axios from "axios";

export function loginUser(dataUser) {
  return async function () {
    try {
      let data = {};
      const Login = await axios.post("/api/auth/login", dataUser);
      console.log(Login, "Soy Login");
      // console.log(Login.data.info, "Soy Login");
      localStorage.setItem("user", JSON.stringify(Login));
      data = Login.data.info;
      window.location.reload();
      // console.log(data, "Soy data");
      return data;
    } catch (error) {
      console.log(error, "No pudo loguearse");
      if (dataUser.length) {
        alert("Huvo un error en las credenciales");
      }
      alert("Ingrese algun dato");
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
    const Login = await axios.post("/api/auth/login", dataUser);
    // console.log(Login, "Soy Login");
    localStorage.setItem("user", JSON.stringify(Login));
    // window.location.reload();
    // console.log(data, "Soy data");
  };
}

export function registerUserGoogle(dataUser) {
  return async function () {
    const registerData = await axios.post("/api/auth/register", dataUser);
    // console.log(Login, "Soy Login");
    localStorage.setItem("user", JSON.stringify(registerData));
    localStorage.setItem("userRegister", JSON.stringify(registerData));
    // window.location.reload();
    console.log(registerData, "Soy data");
  };
}

export function emailAvailable(email) {
  return async function () {
    const dataUsers = await axios.get("http://localhost:3001/api/users/");
    let data = dataUsers.data.map((e) => {
      return e.email;
    });
    // console.log(email,"soy email" )
    // console.log(data,"soy includs")
    let icludes = data.includes(email);
    if (icludes) {
      // console.log("No disponible");
      return false;
    } else {
      // console.log(icludes)
      // console.log("Disponible");
      return true;
    }
  };
}

export function payWithPayPal() {
  return async function () {
    const response = await axios.post(
      "http://localhost:3001/api/paypal/create-order"
    );
    console.log(response.data.links[1].href)
    // const data = response;
    window.location.href = response.data.links[1].href;
    // console.log(data);
  };
}



export function captureData() {
  return async function (req,res) {
    let {token} = await req.query


    console.log(token)
    

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