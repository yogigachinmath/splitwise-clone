import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path = "/register" component = {Register} />
        <Route path = "/dashboard" component = {Dashboard} />
      </div>
    </Router>
  );
}

export default App;
