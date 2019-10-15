import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/register";
import Login from "./components/auth/login";
import PrivateRoute from "./components/auth/privaterouter";
import fire from "./config/fire";
import Dashboard from "./components/Dashboard";
import AddApartment from "./components/AddApartment";
import DashboardMain from "./components/DashboardMain";
import PrivateRouteLogin from './components/auth/privaterouterlogin'
import "./App.css";
import './loader'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authorized: true
    };
  }

  componentDidMount() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        console.log("app.js user found", user);
        this.setState({ authorized: true });
      } else {
        console.log("app.js user not found", user);
        this.setState({ authorized: false });
      }
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
          <Route path="/register" component={Register} />
          <PrivateRouteLogin  path='/login' authed={this.state.authorized} component={Login} />
          <PrivateRoute  path='/dashboard' authed={this.state.authorized} component={Dashboard} />      
            <Route exact path="/" component={Home} />
            <Route path="/new/apartment" component={AddApartment} />
            <Route path="/dash/main" component={DashboardMain} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
