import React from "react";
import Register from "./components/register";
import {BrowserRouter as Router, Route} from "react-router-dom";

import "./App.css";

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
