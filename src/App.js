import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Register from "./components/register";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <div className="App">
            <Route exact path="/" component={Home} />
            <Route path="/register" component={Register} />
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
