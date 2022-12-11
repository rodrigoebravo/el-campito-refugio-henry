import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Voluntario from "./components/Forms/Voluntario/Voluntario";
import Contacto from "./components/Forms/Contacto/Contacto"


function App() {
  return (
    <BrowserRouter>
      <Route exact path={'/home'} component={Home}/>
      <Route exact path={'/form'} component={Voluntario}/>
      <Route exact path={'/form2'} component={Contacto}/>
    </BrowserRouter>
  );
}

export default App;
