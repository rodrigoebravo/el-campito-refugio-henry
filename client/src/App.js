import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import ConocenosDetalle from "./components/ConocenosDetalle/ConocenosDetalle";
import QuieroAdoptar from "./components/QuieroAdoptar/QuieroAdoptar";
import QuieroColaborar from "./components/QuieroColaborar/QuieroColaborar";
import QuieroSerVoluntario from "./components/QuieroSerVoluntario/QuieroSerVoluntario";
import Visitas from "./components/Visitas/Visitas";
import FormPostDogs from "./components/FormPostDogs/FormPostDogs";
import Home from "./components/Home/Home";
import AdminIndex from "./components/ReactAdmin/index";
import CardsDogs from "./components/CardsDogs/CardsDogs";
import CardDogDetails from "./components/CardDogDetails/CardDogDetails";
import Contactanos from "./components/Contactanos/Contactanos";
import Voluntario from "./components/Forms/Voluntario/Voluntario.jsx";
import Adopcion from "./components/Forms/Adopcion/Adopcion.jsx";
import Contacto from "./components/Forms/Contacto/Contacto";
import Proyectos from "./components/Proyectos/Proyectos.jsx";
import ProyectoEscolar from "./components/Proyectos/ProyectoEscolar.jsx";
import Cuidados from "./components/Cuidados/Cuidados.jsx";
import Denuncias from "./components/Denuncias/Denuncias.jsx";
import Prensa from "./components/Prensa/Prensa.jsx";
import PrensaGrafica from "./components/Prensa/Grafica/PrensaGrafica.jsx";
import PrensaTelevision from "./components/Prensa/Television/PrensaTelevision";
import PrensaRadio from "./components/Prensa/Radio/PrensaRadio.jsx";
import PrensaAmigos from "./components/Prensa/ArtistasAmigos/ArtistasAmigos.jsx";
import Profile from "./components/Profile/Profile";
import NoAccess from "./components/NoAccess/NoAccess";
import Pay from "./components/Pay/Pay";
import RecuperarCuenta from "./components/RecuperarCuenta/RecuperarCuenta";
import ProfileEdit from "./components/ProfileEdit/ProfileEdit";

function App() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <BrowserRouter>
      <Route exact path={"/form"} component={FormPostDogs} />
      <Route exact path={"/"} component={Home} />
      <Route exact path={"/detalle"} component={ConocenosDetalle} />
      <Route exact path={"/adoptar"} component={QuieroAdoptar} />
      <Route path={"/colaborar"} component={QuieroColaborar} />
      <Route exact path={"/voluntario"} component={QuieroSerVoluntario} />
      <Route exact path={"/visitas"} component={Visitas} />
      <Route exact path={"/contactanos"} component={Contactanos} />
      <Route exact path={"/adoptar/perros"} component={CardsDogs} />
      <Route exact path={"/adoptar/perros/:id"} component={CardDogDetails} />
      <Route exact path={"/volunteerForm"} component={Voluntario} />
      <Route path={"/AdoptionForm"} component={Adopcion} />
      <Route exact path={"/ContactForm"} component={Contacto} />
      <Route exact path={"/proyectos"} component={Proyectos} />
      <Route exact path={"/proyectoescolar"} component={ProyectoEscolar} />
      <Route exact path={"/cuidados"} component={Cuidados} />
      <Route exact path={"/denuncias"} component={Denuncias} />
      <Route exact path={"/prensa"} component={Prensa} />
      <Route exact path={"/prensa/grafica"} component={PrensaGrafica} />
      <Route exact path={"/prensa/television"} component={PrensaTelevision} />
      <Route exact path={"/prensa/radio"} component={PrensaRadio} />
      <Route exact path={"/prensa/amigos"} component={PrensaAmigos} />
      <Route exact path={"/profile"} component={Profile} />
      <Route exact path={"/pay"} component={Pay} />
      <Route exact path={"/recuperar"} component={RecuperarCuenta} />

      {/* <Route exact path={"/profile/edit"} component={ProfileEdit} /> */}
      {user && user.data?.info ? (
        <Route exact path={"/profile/edit"} component={ProfileEdit} />
      ) : (
        <Route exact path={"/profile/edit"} component={NoAccess} />
      )}

      {(user && user.data?.info.roles.includes("admin")) ||
      (user && user.data?.info.roles.includes("superAdmin")) ? (
        <Route exact path={"/admin"} component={AdminIndex} />
      ) : (
        <Route exact path={"/admin"} component={NoAccess} />
      )}
  
    </BrowserRouter>
  );
}

export default App;
