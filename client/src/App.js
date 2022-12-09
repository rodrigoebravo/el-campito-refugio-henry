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
import Home from './components/Home/Home';

function App() {
  return (
    <BrowserRouter>
      
      <Route exact path={'/form'} component={FormPostDogs}/>
      <Route exact path={'/home'} component={Home}/>
      <Route exact path={'/detalle'} component={ConocenosDetalle}/>
      <Route exact path={'/adoptar'} component={QuieroAdoptar}/>
      <Route exact path={'/colaborar'} component={QuieroColaborar}/>
      <Route exact path={'/voluntario'} component={QuieroSerVoluntario}/>
      <Route exact path={'/visitas'} component={Visitas}/>
      <Route exact path={'/campito'} component={ElCampitoEscolar}/>
    </BrowserRouter>
  );
}

export default App;
