import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
<<<<<<< HEAD
=======
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";

>>>>>>> b88765af2ccb8d260b452088a24701677bcc80dd
import "./App.css";
import Login from './components/auth/login' 

function App() {
  return (
    <Router>
<<<<<<< HEAD
      <div className="App"> 
        <Route path = "/api/register" component = {Register} />
        <Route path = "/api/login" component = {Login} />
=======
      <div className="App">
        <Route path = "/register" component = {Register} />
        <Route path = "/dashboard" component = {Dashboard} />
>>>>>>> b88765af2ccb8d260b452088a24701677bcc80dd
      </div>
    </Router>
  );
}

export default App;
