import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import "./App.css";
import Login from './components/auth/login' 

function App() {
  return (
    <Router>
      <div className="App"> 
        <Route path = "/api/register" component = {Register} />
        <Route exact path = "/api/login" component = {Login} />
        <Route path = "/api/dashboard" component = {Dashboard} />
      </div>
    </Router>
  );
}

export default App;
