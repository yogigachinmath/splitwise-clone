import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import fire from '../config/fire';

export class register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };
    this.register = this.register.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  displayContentOnChange = e => {
    e.target.parentElement.nextSibling.style.display = 'block';
    this.setState({ [e.target.name]: e.target.value });
  };
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  register(e) {
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {
        console.log('success');
      })
      .catch(error => {
        console.log(error);
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
                  name="username"
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
                    value={this.state.name}
                    onChange={this.handleChange}
                    type="password"
                    name="password"
                    className="form-control"
                    autoComplete="new-password"
                  />
                </div>
              </div>
              <Link to={'./dashboard'}>
                <button
                  type="submit"
                  className="btn btn-orange signUpBtn"
                  onClick={this.register}
                >
                  Sign me up!
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default register;
