import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import FormPostDogs from "./components/FormPostDogs/FormPostDogs";
import Home from './components/Home';


function App() {
  return (
    <BrowserRouter>
      <Route exact path={'/home'} component={Home}/>
      <Route exact path={'/form'} component={FormPostDogs}/>
    </BrowserRouter>
  );
}

export default App;
