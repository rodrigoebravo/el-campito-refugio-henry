import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
<<<<<<< HEAD
import './App.css';
import ConocenosDetalle from './components/ConocenosDetalle/ConocenosDetalle'
import QuieroAdoptar from './components/QuieroAdoptar/QuieroAdoptar'
import QuieroColaborar from './components/QuieroColaborar/QuieroColaborar'
import QuieroSerVoluntario from './components/QuieroSerVoluntario/QuieroSerVoluntario'
import Visitas from './components/Visitas/Visitas'
import ElCampitoEscolar from "./components/ElCampitoEscolar/ElCampitoEscolar";
import Home from './components/Home/Home';
import Dashboard from "./components/Dashboard/Dashboard";
import AdminDogs from "./components/Dashboard/AdminDogs/AdminDogs";
import { AdminUsers } from "./components/Dashboard/AdminUsers/AdminUsers";
import { AdminDogsDetails } from "./components/Dashboard/AdminDogsdDetails/AdminDogsDetails";
import Voluntario from "./components/Forms/Voluntario/Voluntario"
import Contactanos from "./components/Contactanos/Contactanos"
=======
import "./App.css";

import ConocenosDetalle from "./components/ConocenosDetalle/ConocenosDetalle";
import QuieroAdoptar from "./components/QuieroAdoptar/QuieroAdoptar";
import QuieroColaborar from "./components/QuieroColaborar/QuieroColaborar";
import QuieroSerVoluntario from "./components/QuieroSerVoluntario/QuieroSerVoluntario";
import Visitas from "./components/Visitas/Visitas";
import ElCampitoEscolar from "./components/ElCampitoEscolar/ElCampitoEscolar";
import FormPostDogs from "./components/FormPostDogs/FormPostDogs";
import Home from "./components/Home/Home";
// import Dashboard from "./components/Dashboard/Dashboard";
// import AdminDogs from "./components/Dashboard/AdminDogs/AdminDogs";
// import { AdminUsers } from "./components/Dashboard/AdminUsers/AdminUsers";
// import { AdminDogsDetails } from "./components/Dashboard/AdminDogsdDetails/AdminDogsDetails";
import AdminIndex from "./components/ReactAdmin/index";
>>>>>>> 3c17799311ef5e8dd614ccc8d815501c9c1307e8

function App() {
  return (
    <BrowserRouter>
<<<<<<< HEAD
      <Route exact path={'/home'} component={Home}/>
      <Route exact path={'/form'} component={Voluntario}/>
      <Route exact path={'/contactanos'} component={Contactanos}/>
      <Route exact path={'/'} component={Home} />
      <Route exact path={'/detalle'} component={ConocenosDetalle} />
      <Route exact path={'/adoptar'} component={QuieroAdoptar} />
      <Route exact path={'/colaborar'} component={QuieroColaborar} />
      <Route exact path={'/voluntario'} component={QuieroSerVoluntario} />
      <Route exact path={'/visitas'} component={Visitas} />
      <Route exact path={'/campito'} component={ElCampitoEscolar} />
      <Route exact path={'/admin'} component={Dashboard} />
      <Route exact path={'/admin/Perros'} component={AdminDogs} />
=======
      <Route exact path={"/form"} component={FormPostDogs} />
      <Route exact path={"/"} component={Home} />
      <Route exact path={"/detalle"} component={ConocenosDetalle} />
      <Route exact path={"/adoptar"} component={QuieroAdoptar} />
      <Route exact path={"/colaborar"} component={QuieroColaborar} />
      <Route exact path={"/voluntario"} component={QuieroSerVoluntario} />
      <Route exact path={"/visitas"} component={Visitas} />
      <Route exact path={"/campito"} component={ElCampitoEscolar} />
      <Route exact path={"/admin"} component={AdminIndex} />
      {/* <Route exact path={'/admin/Perros'} component={AdminDogs} />
>>>>>>> 3c17799311ef5e8dd614ccc8d815501c9c1307e8
      <Route exact path={'/admin/Usuarios'} component={AdminUsers} />
      <Route exact path={'/admin/Perros/:id'} component={AdminDogsDetails} /> */}
    </BrowserRouter>
  );
}

export default App;
