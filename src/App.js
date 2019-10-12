import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import AddApartment from "./components/AddApartment";
import DashboardMain from "./components/DashboardMain";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path = "/register" component = {Register} />
        <Route path = "/dashboard" component = {Dashboard} />
        <Route path = "/new/apartment" component = {AddApartment} />
        <Route path = "/dash/main" component = {DashboardMain} />
      </div>
    </Router>
  );
}

export default App;
