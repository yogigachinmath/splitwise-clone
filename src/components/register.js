import React, { Component } from 'react';
import fire from '../config/fire';
import 'firebase/firestore';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

export class register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    };
    this.register = this.register.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleregister = e => {
    e.preventDefault();
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(u => {
        fire
          .firestore()
          .collection('users')
          .doc(u.user.uid)
          .get()
          .then(val => {
            console.log("exact" in val, 'val222');
            if ("exact" in val === false) {
              console.log('sdkjdh');
              u.user.updateProfile({
                displayName: u.user.providerData[0].displayName
              });
              fire
                .firestore()
                .collection('users')
                .doc(u.user.uid)
                .set({
                  name: u.user.displayName,
                  email: u.user.email
                })
                .then(() => {
                  this.props.history.push('/dashboard');
                })
                .catch(error => {
                  console.log('error', error);
                  document.querySelector('.errorMsg').textContent = error;
                  document.querySelector('.errorMsg').style.display = 'block';
                });
            }
          }).catch = () => {
          console.log('this is me');
        };
      })
      .catch(error => {
        console.log('error', error);
        document.querySelector('.errorMsg').textContent = error;
        document.querySelector('.errorMsg').style.display = 'block';
      });
  };
  displayContentOnChange = e => {
    e.target.parentElement.nextSibling.style.display = 'block';
    this.setState({ [e.target.name]: e.target.value });
  };
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  register(e) {
    document.querySelector('.showWait').style.display = 'block';
    document.querySelector('.signUpBtn').style.display = 'none';
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {
        u.user.updateProfile({
          displayName: this.state.name
        });
        console.log(u.user.uid);
        fire.firestore().collection('users').doc(u.user.uid).set({
          name: this.state.name,
          email: this.state.email
        }).then(() => {
          this.props.history.push('/dashboard');
        }).catch(error => {
          document.querySelector('.errorMsg').textContent = error;
          document.querySelector('.errorMsg').style.display = 'block';
          document.querySelector('.showWait').style.display = 'none';
          document.querySelector('.signUpBtn').style.display = 'block';
        })
      })
      .catch(error => {
        document.querySelector('.errorMsg').textContent = error;
        document.querySelector('.errorMsg').style.display = 'block';
        document.querySelector('.showWait').style.display = 'none';
        document.querySelector('.signUpBtn').style.display = 'block';
      });
  }

  render() {
    return (
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
              <h6 className="introText">Introduce yourself</h6>
              <h3>Hi there! My name is</h3>
              <div className="form-group">
                <input
                  type="text"
                  value={this.state.name}
                  name="name"
                  className="form-control"
                  onChange={this.displayContentOnChange}
                />
              </div>
              <div className="displayOnChange">
                <div className="form-group">
                  <h6>
                    Here's my <b>email address</b>:
                  </h6>
                  <input
                    value={this.state.email}
                    onChange={this.handleChange}
                    type="email"
                    name="email"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <h6>
                    And here's my <b>password</b>:
                  </h6>
                  <input
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    name="password"
                    className="form-control"
                    autoComplete="new-password"
                    required
                  />
                </div>
              </div>
              <div className="showWait" style={{display: 'none'}}>wait...</div>
              <div className="bg-danger text-light errorMsg p-3 my-2"></div>
              <button
                type="submit"
                className="btn btn-orange signUpBtn"
                onClick={this.register}
              >
                Sign me up!
              </button>
              <button
                className="btn btn-outline-success googlebtn m-3 "
                onClick={this.handleregister}
              >
                <img src="https://dx0qysuen8cbs.cloudfront.net/assets/fat_rabbit/signup/google-2017-a5b76a1c1eebd99689b571954b1ed40e13338b8a08d6649ffc5ca2ea1bfcb953.png" />
                <span className="p-2 text-secondary">Sign up with Google</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default register;
