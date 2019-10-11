import React from "react";
import Register from "./components/register";
import {BrowserRouter as Router, Route} from "react-router-dom";

import "./App.css";
import {BrowserRouter,Route,Link} from 'react-router-dom';
import Login from './components/auth/login' 

function App() {
  return (
    <Router>
      <div className="App">
        <Route path = "/register" component = {Register} />
      </div>
    </Router>
  );
}

export default App;
