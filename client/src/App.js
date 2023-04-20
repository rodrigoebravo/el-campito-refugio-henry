import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

// ------- /UserInterface
import Home from "./components/UserInterface/Home/Home";
import ConocenosDetalle from "./components/UserInterface/ConocenosDetalle/ConocenosDetalle";
import QuieroAdoptar from "./components/UserInterface/QuieroAdoptar/QuieroAdoptar";
import QuieroColaborar from "./components/UserInterface/QuieroColaborar/QuieroColaborar";
import QuieroSerVoluntario from "./components/UserInterface/QuieroSerVoluntario/QuieroSerVoluntario";
import Proyectos from "./components/UserInterface/Proyectos/Proyectos.jsx";
import Cuidados from "./components/UserInterface/Cuidados/Cuidados.jsx";
import Denuncias from "./components/UserInterface/Denuncias/Denuncias.jsx";
import Prensa from "./components/UserInterface/Prensa/Prensa.jsx";
import Visitas from "./components/UserInterface/Visitas/Visitas";
import Contactanos from "./components/UserInterface/Contactanos/Contactanos";

// ------- /ControlledActions
import Profile from "./components/ControlledActions/Profile/Profile";
import NoAccess from "./components/ControlledActions/NoAccess/NoAccess";
import Pay from "./components/ControlledActions/Pay/Pay";
import RecuperarCuenta from "./components/ControlledActions/RecuperarCuenta/RecuperarCuenta";
import ProfileEdit from "./components/ControlledActions/ProfileEdit/ProfileEdit";
import ChangePassword from "./components/ControlledActions/ChangePassword/ChangePassword";

// ------- /ReactAdmin
import AdminIndex from "./components/ReactAdmin/index";

// dentro de /QuieroAdoptar
import CardsDogs from "./components/UserInterface/QuieroAdoptar/CardsDogs/CardsDogs";
import CardDogDetails from "./components/UserInterface/QuieroAdoptar/CardDogDetails/CardDogDetails";

// ----- /Forms
import Voluntario from "./components/Forms/Voluntario/Voluntario.jsx";
import Adopcion from "./components/Forms/Adopcion/Adopcion.jsx";
import Contacto from "./components/Forms/Contacto/Contacto";

// dentrode /Proyectos
import ProyectoEscolar from "./components/UserInterface/Proyectos/Escolar/ProyectoEscolar";
import ProyectoTalleres from "./components/UserInterface/Proyectos/Talleres/ProyectoTalleres";

// dentro de /Prensa
import PrensaGrafica from "./components/UserInterface/Prensa/Grafica/PrensaGrafica.jsx";
import PrensaTelevision from "./components/UserInterface/Prensa/Television/PrensaTelevision";
import PrensaRadio from "./components/UserInterface/Prensa/Radio/PrensaRadio.jsx";
import PrensaAmigos from "./components/UserInterface/Prensa/ArtistasAmigos/ArtistasAmigos.jsx";



function App() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <BrowserRouter>
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
      <Route exact path={"/proyectotalleres"} component={ProyectoTalleres} />
      <Route exact path={"/cuidados"} component={Cuidados} />
      <Route exact path={"/denuncias"} component={Denuncias} />
      <Route exact path={"/prensa"} component={Prensa} />
      <Route exact path={"/prensa/grafica"} component={PrensaGrafica} />
      <Route exact path={"/prensa/television"} component={PrensaTelevision} />
      <Route exact path={"/prensa/radio"} component={PrensaRadio} />
      <Route exact path={"/prensa/amigos"} component={PrensaAmigos} />
      <Route exact path={"/profile"} component={Profile} />
      <Route exact path={"/pay"} component={Pay} />

      {/* <Route exact path={"/profile/edit"} component={ProfileEdit} /> */}
      {user && user.data?.info ? (
        <Switch>
          <Route path={"/profile/edit/:id"} component={ProfileEdit} />
          <Route path={"/cambiarPassword"} component={NoAccess} />
          <Route exact path={"/recuperar"} component={NoAccess} />
        </Switch>
      ) : (
        <Switch>
          <Route exact path={"/recuperar"} component={RecuperarCuenta} />
          <Route path={"/profile/edit"} component={NoAccess} />
          <Route path={"/cambiarPassword"} component={ChangePassword} />
        </Switch>
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
