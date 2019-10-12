import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateRoute from './components/auth/privaterouter'
import Register from './components/register';
import Dashboard from './components/Dashboard';
import './App.css';
import Login from './components/auth/login';
import fire from './config/fire';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authed:false
    };
  }

  componentDidMount() {
    console.log('fsfdd');
    fire.auth().onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        this.setState({ authed:true });
      } else {
        this.setState({ authed:false });
      }
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          {/* <PrivateRoute authed={this.state.authed} path='/dashboard' component={Dashboard} /> */}
            <Route path="/dashboard" component={Dashboard} />
        </div>
      </Router>
    );
  }
}

export default App;
