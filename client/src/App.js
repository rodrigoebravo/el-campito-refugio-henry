import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home';


function App() {
  return (
    <BrowserRouter>
      <Route exact path={'/home'} component={Home}/>
    </BrowserRouter>
  );
}

export default App;
