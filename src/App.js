import React from 'react';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import PrivateRoute from './components/auth/privaterouter'
import Register from './components/register';
import Dashboard from './components/Dashboard';
import './App.css';
import Login from './components/auth/login';
import fire from './config/fire';
import AddApartment from "./components/AddApartment";
import DashboardMain from "./components/DashboardMain";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authorized:true
    };
  }

  componentDidMount() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        console.log('app.js user found',user);
        this.setState({ authorized:true });
      } else {
        console.log('app.js user not found',user);
        this.setState({ authorized:false });
      }
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
          <Route path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          {console.log(this.state.authorized)}
          <PrivateRoute  path='/dashboard' authed={this.state.authorized} component={Dashboard} />
            {/* <Route path="/dashboard" component={Dashboard} /> */}
            <Route path = "/new/apartment" component = {AddApartment} />
        <Route path = "/dash/main" component = {DashboardMain} />
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
