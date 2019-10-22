import React, { Component } from 'react';
import Header from '../layouts/nav';
import fire from '../../config/fire';
import firebase from 'firebase'

class login extends Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      email: '',
      password: ''
    };
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handlelogin = (e) => {
    e.preventDefault();
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    firebase.auth().signInWithPopup(provider).then(u => {
      console.log('succesfully loggedIn');
    }).catch = (error) => {
      console.log(error);  
    }
  }
  login(e) {
    e.preventDefault();
    const target = e.target;
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {
        this.props.history.push('/dash/main');
      })
      .catch(error => {
        console.log(error);
        // alert('Invalid username or password');
        console.log('Event login', target.previousSibling);
        target.previousSibling.style.display = 'block';
        target.previousSibling.textContent = 'Invalid credentials';
      });
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="container main">
          <div className="row">
            <div className="logo">
              <img
                src="https://dx0qysuen8cbs.cloudfront.net/assets/core/logo-square-65a6124237868b1d2ce2f5db2ab0b7c777e2348b797626816400534116ae22d7.svg"
                alt="logo"
              />
            </div>
            <div className="form signup">
              <form>
                <h6 className="introText">WELCOME TO SPLITWISE</h6>
                <h6>Email address</h6>
                <div className="form-group">
                  <input
                    type="email"
                    value={this.state.name}
                    onChange={this.handleChange}
                    name="email"
                    className="form-control"
                  />
                </div>
                <div className="loginCred">
                  <div className="form-group">
                    <h6>Password</h6>
                    <input
                      value={this.state.name}
                      onChange={this.handleChange}
                      type="password"
                      name="password"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="errorMsg bg-danger text-light p-3 mb-3"></div>
                <button
                  type="submit"
                  onClick={this.login}
                  className="btn btn-orange signUpBtn"
                >
                  Log in
                </button>
                <button className="btn m-2 btn-outline-info" onClick={this.handlelogin} ><img src='https://dx0qysuen8cbs.cloudfront.net/assets/fat_rabbit/signup/google-2017-a5b76a1c1eebd99689b571954b1ed40e13338b8a08d6649ffc5ca2ea1bfcb953.png' /><span className='p-1'>  Google</span></button>
                <p className="forgetPassword">
                  {/* Forgot your password? <a href="/forgotPassword"> Click here</a> */}
                </p>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default login;
