import React from "react";
import Register from "./components/register";
import {BrowserRouter as Router, Route} from "react-router-dom";
import "./App.css";
import Login from './components/auth/login' 

function App() {
  return (
    <Router>
      <div className="App"> 
        <Route path = "/api/register" component = {Register} />
        <Route path = "/api/login" component = {Login} />
      </div>
    </Router>
  );
}

export default App;
