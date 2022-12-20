import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import ConocenosDetalle from './components/ConocenosDetalle/ConocenosDetalle'
import QuieroAdoptar from './components/QuieroAdoptar/QuieroAdoptar'
import QuieroColaborar from './components/QuieroColaborar/QuieroColaborar'
import QuieroSerVoluntario from './components/QuieroSerVoluntario/QuieroSerVoluntario'
import Visitas from './components/Visitas/Visitas'
import ElCampitoEscolar from "./components/ElCampitoEscolar/ElCampitoEscolar";
import FormPostDogs from "./components/FormPostDogs/FormPostDogs";
import Home from "./components/Home/Home";
// import Dashboard from "./components/Dashboard/Dashboard";
// import AdminDogs from "./components/Dashboard/AdminDogs/AdminDogs";
// import { AdminUsers } from "./components/Dashboard/AdminUsers/AdminUsers";
// import { AdminDogsDetails } from "./components/Dashboard/AdminDogsdDetails/AdminDogsDetails";
import AdminIndex from "./components/ReactAdmin/index";
import { CardsDogs } from "./components/CardsDogs/CardsDogs";
import CardDogDetails from "./components/CardDogDetails/CardDogDetails";
import Conocenos from "./components/Contactanos/Contactanos";
import Voluntario from "./components/Forms/Voluntario/Voluntario.jsx";
import Adopcion from "./components/Forms/Adopcion/Adopcion.jsx";
import Contacto from "./components/Forms/Contacto/Contacto";


function App() {
  return (
    <BrowserRouter>
      <Route exact path={"/form"} component={FormPostDogs} />
      <Route exact path={"/"} component={Home} />
      <Route exact path={"/detalle"} component={ConocenosDetalle} />
      <Route exact path={"/adoptar"} component={QuieroAdoptar} />
      <Route exact path={"/colaborar"} component={QuieroColaborar} />
      <Route exact path={"/voluntario"} component={QuieroSerVoluntario} />
      <Route exact path={"/visitas"} component={Visitas} />
      <Route exact path={"/campito"} component={ElCampitoEscolar} />
      <Route exact path={"/contactanos"} component={Conocenos} />
      <Route exact path={"/admin"} component={AdminIndex} />
      <Route exact path={"/adoptar/perros"} component={CardsDogs} />
      <Route exact path={"/adoptar/perros/:id"} component={CardDogDetails} />
      <Route exact path={"/volunteerForm"} component={Voluntario} />
      <Route exact path={"/AdoptionForm"} component={Adopcion} />
      <Route exact path={"/ContactForm"} component={Contacto} />
      {/* <Route exact path={'/admin/Perros'} component={AdminDogs} />
      <Route exact path={'/admin/Usuarios'} component={AdminUsers} />
      <Route exact path={'/admin/Perros/:id'} component={AdminDogsDetails} /> */}
    </BrowserRouter>
    
  );
}

export default App;
